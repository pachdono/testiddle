// Gives a shared link a proper preview. The site is one page that draws itself in the
// browser, so a chat app that only reads the page's head would show the same title for
// every address. This serves the same page with a title, description and picture that
// match the address, and the browser then carries on exactly as before.

import { PPQ } from "../src/ppq.js";

export const config = { maxDuration: 10 };

const NAMES = { sat: "SAT", psat: "PSAT/NMSQT", act: "ACT", ssat: "SSAT", isee: "ISEE", gre: "GRE", gmat: "GMAT", ielts: "IELTS", toefl: "TOEFL iBT", det: "Duolingo English Test", "igcse-mcq": "Cambridge IGCSE", edexcel: "Pearson Edexcel", aqa: "AQA", ocr: "OCR" };
const slug = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function describe(path) {
  const [, , exam, sl] = path.split("/");
  const name = NAMES[exam];
  if (!exam || !name) return { title: "Real exam papers | Testiddle", text: "Practice papers for the SAT, ACT, SSAT, IELTS, TOEFL and more, timed and marked, with every question explained. Free." };
  const cfg = PPQ[exam];
  if (sl && cfg?.numbered) {
    for (const g of cfg.groups) for (let n = 1; n <= g.count; n++) {
      if (`${slug(g.name)}-test-${n}` !== sl) continue;
      const own = g.own || g.digital;
      return {
        title: `${g.title(n)} | Testiddle`,
        text: own
          ? `${g.title(n)}: ${g.questions} original questions in ${g.minutes} minutes, marked automatically with an explanation for every question. Free on Testiddle.`
          : `${g.title(n)}: the official ${cfg.board} test, with a timed answer sheet and a review of every question. Free on Testiddle.`,
      };
    }
  }
  return { title: `${name} practice papers | Testiddle`, text: `${name} practice tests and papers, timed and marked, with every question explained. Free on Testiddle.` };
}

export default async function handler(req, res) {
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const path = String(req.query?.p || "/real").slice(0, 200);
  try {
    const page = await fetch(`https://${host}/index.html`).then((r) => r.text());
    const { title, text } = describe(path);
    const url = `https://${host}${path.replace(/[^\w/\-]/g, "")}`;
    const tags = [
      `<meta property="og:type" content="website" />`, `<meta property="og:site_name" content="Testiddle" />`,
      `<meta property="og:title" content="${esc(title)}" />`, `<meta property="og:description" content="${esc(text)}" />`,
      `<meta property="og:url" content="${esc(url)}" />`, `<meta property="og:image" content="https://${host}/og.png" />`,
      `<meta property="og:image:width" content="1200" />`, `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`, `<meta name="twitter:title" content="${esc(title)}" />`,
      `<meta name="twitter:description" content="${esc(text)}" />`, `<meta name="twitter:image" content="https://${host}/og.png" />`,
    ].join("\n    ");
    const html = page
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
      .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(text)}" />`)
      .replace("</head>", `    ${tags}\n  </head>`);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).send(html);
  } catch {
    res.redirect(302, "/");
  }
}
