// Turning a raw score into a scaled score and an estimated percentile.
//
// The scales and the percentile anchors below come from the score reports the
// test makers publish. They are ESTIMATES here for two reasons: a practice set
// of eight questions is far shorter than a real paper, and real tests equate
// each administration so the same raw score can map to slightly different
// scaled scores on different days. Treat the band, not the number.

// Linear interpolation through a table of [value, percentile] anchors,
// which must be listed high to low.
function interpolate(table, value) {
  if (value >= table[0][0]) return table[0][1];
  const last = table[table.length - 1];
  if (value <= last[0]) return last[1];
  for (let i = 0; i < table.length - 1; i++) {
    const [hiV, hiP] = table[i];
    const [loV, loP] = table[i + 1];
    if (value <= hiV && value >= loV) {
      const span = hiV - loV;
      const t = span === 0 ? 0 : (value - loV) / span;
      return loP + t * (hiP - loP);
    }
  }
  return last[1];
}

const PERCENTILES = {
  // Composite score, percentile of test takers at or below it.
  sat: [[1600, 99], [1500, 98], [1400, 94], [1300, 86], [1200, 74], [1100, 58], [1000, 40], [900, 23], [800, 10], [700, 3], [400, 1]],
  act: [[36, 100], [34, 99], [32, 96], [30, 93], [28, 88], [26, 82], [24, 74], [22, 63], [20, 52], [18, 41], [16, 27], [14, 14], [12, 6], [1, 1]],
  toefl: [[120, 100], [110, 96], [100, 82], [90, 62], [80, 42], [70, 24], [60, 12], [50, 5], [0, 1]],
  // SSAT percentiles are against same grade and gender only, so they run low.
  ssat: [[800, 99], [750, 90], [720, 78], [700, 65], [680, 52], [650, 33], [620, 18], [600, 10], [500, 1]],
  // IELTS publishes band distributions rather than percentiles.
  ielts: [[9, 99], [8.5, 97], [8, 93], [7.5, 86], [7, 75], [6.5, 60], [6, 43], [5.5, 27], [5, 15], [4, 5], [0, 1]],
};

// The newer tests. All of these are estimates from published score distributions.
PERCENTILES.psat = [[1520, 99], [1400, 99], [1300, 96], [1200, 90], [1100, 76], [1000, 58], [900, 40], [800, 23], [700, 10], [600, 4], [320, 1]];
// Percentiles compare you only with students in the same grade.
PERCENTILES.isee = [[940, 99], [900, 92], [880, 82], [860, 68], [840, 52], [820, 36], [800, 22], [780, 10], [760, 1]];
PERCENTILES.gre = [[340, 99], [330, 98], [320, 93], [310, 80], [300, 60], [290, 40], [280, 22], [270, 9], [260, 2]];
PERCENTILES.gmat = [[805, 100], [745, 99], [705, 96], [675, 90], [645, 80], [615, 68], [585, 55], [555, 42], [525, 30], [495, 20], [455, 8], [205, 1]];
PERCENTILES.det = [[160, 99], [140, 93], [130, 84], [120, 68], [110, 45], [100, 25], [90, 10], [10, 1]];

// IELTS Listening and Reading are marked out of 40 and converted to a band.
// This is the widely published Academic Reading conversion.
const IELTS_BANDS = [
  [39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7],
  [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [0, 3.5],
];

function ieltsBand(rawOutOf40) {
  for (const [min, band] of IELTS_BANDS) {
    if (rawOutOf40 >= min) return band;
  }
  return 3.5;
}

const round10 = (n) => Math.round(n / 10) * 10;
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

/**
 * @param {string} scoring  which test's scale to use
 * @param {number} right    questions answered correctly
 * @param {number} total    questions in the set
 */
export function estimate(scoring, right, total) {
  const pct = total === 0 ? 0 : right / total;

  switch (scoring) {
    case "sat": {
      const scaled = clamp(round10(400 + pct * 1200), 400, 1600);
      return {
        scaled: String(scaled),
        unit: "out of 1600",
        percentile: interpolate(PERCENTILES.sat, scaled),
        detail: `About ${round10(200 + pct * 600)} per section if you scored evenly.`,
      };
    }

    case "act": {
      const scaled = clamp(Math.round(1 + pct * 35), 1, 36);
      return {
        scaled: String(scaled),
        unit: "composite, out of 36",
        percentile: interpolate(PERCENTILES.act, scaled),
        detail: "The composite is the average of your section scores, rounded.",
      };
    }

    case "toefl": {
      const scaled = clamp(Math.round(pct * 120), 0, 120);
      return {
        scaled: String(scaled),
        unit: "out of 120",
        percentile: interpolate(PERCENTILES.toefl, scaled),
        detail: `Roughly ${Math.round(pct * 30)} in each of the four sections.`,
      };
    }

    case "ssat": {
      const scaled = clamp(Math.round(500 + pct * 300), 500, 800);
      return {
        scaled: String(scaled),
        unit: "per section, 500 to 800",
        percentile: interpolate(PERCENTILES.ssat, scaled),
        detail: "SSAT percentiles compare you only with the same grade and gender, so they read lower than other tests.",
      };
    }

    case "ielts": {
      const band = ieltsBand(Math.round(pct * 40));
      return {
        scaled: band.toFixed(1),
        unit: "band, out of 9",
        percentile: interpolate(PERCENTILES.ielts, band),
        detail: `Equivalent to about ${Math.round(pct * 40)} out of 40 raw marks.`,
      };
    }

    case "psat": {
      const scaled = clamp(round10(320 + pct * 1200), 320, 1520);
      return {
        scaled: String(scaled),
        unit: "out of 1520",
        percentile: interpolate(PERCENTILES.psat, scaled),
        detail: "Each section runs 160 to 760. In grade 11 the National Merit Selection Index doubles the Reading and Writing score and adds Math.",
      };
    }

    case "isee": {
      const scaled = clamp(Math.round(760 + pct * 180), 760, 940);
      return {
        scaled: String(scaled),
        unit: "per section, 760 to 940",
        percentile: interpolate(PERCENTILES.isee, scaled),
        detail: `About stanine ${clamp(Math.round(1 + pct * 8), 1, 9)} of 9. Percentiles compare you only with students in the same grade.`,
      };
    }

    case "gre": {
      const scaled = clamp(Math.round(130 + pct * 40), 130, 170);
      return {
        scaled: String(scaled),
        unit: "per section, 130 to 170",
        percentile: interpolate(PERCENTILES.gre, scaled * 2),
        detail: `If Verbal and Quantitative were both about this level your total would be near ${scaled * 2} out of 340.`,
      };
    }

    case "gmat": {
      const scaled = clamp(205 + Math.round(pct * 60) * 10, 205, 805);
      return {
        scaled: String(scaled),
        unit: "total, 205 to 805",
        percentile: interpolate(PERCENTILES.gmat, scaled),
        detail: `Each section is scored 60 to 90, which would be about ${clamp(Math.round(60 + pct * 30), 60, 90)} here.`,
      };
    }

    case "det": {
      const scaled = clamp(Math.round((10 + pct * 150) / 5) * 5, 10, 160);
      return {
        scaled: String(scaled),
        unit: "out of 160",
        percentile: interpolate(PERCENTILES.det, scaled),
        detail: "Many universities read 105 as about IELTS 6.5 and 120 as about IELTS 7. The real score also depends on writing and speaking.",
      };
    }

    default:
      return { scaled: `${right}/${total}`, unit: "", percentile: pct * 100, detail: "" };
  }
}
