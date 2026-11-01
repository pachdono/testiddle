// The mascot, drawn as vectors so it stays sharp at 16px in a browser tab and
// at 240px on an empty state, and so it costs nothing to load.
//
// Proportions are measured off the reference art: the brim spans about 68% of
// the width and clears the top of the sunglasses, the body about 75%, and the
// head sits inside the top of the body so the two read as one silhouette.
//
// The colours are deliberately fixed rather than themed. A mascot that changes
// colour in dark mode stops being the same character.

import { CHARACTERS as OUTFITS } from "./DuckAvatars.jsx";

const YELLOW = "#F8DC6E";
const BELLY = "#FAE491";
const WING = "#EFC94E";
const BEAK = "#E8963C";
const BEAK_LINE = "#C9762A";
const FOOT = "#E8933A";
const STRAW = "#D9BE7E";
const STRAW_LIGHT = "#E2CB93";
const STRAW_LINE = "#CDB076";
const BAND = "#C0563A";
const BLACK = "#1A1A1A";
const LENS = "#4A4A4A";

export function Duck({ size = 120, className = "", shadow = true, outfit }) {
  const dress = outfit && OUTFITS.find((c) => c.id === outfit);
  const top = dress ? -14 : 0; // room for taller hats
  return (
    <svg
      className={className}
      width={size}
      height={size * ((140 - top) / 120)}
      viewBox={`0 ${top} 120 ${140 - top}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Dwiddle duck"
    >
      {shadow && <ellipse cx="61" cy="126" rx="38" ry="6" fill="#000" opacity="0.055" />}

      {dress
        ? <><DuckParts hat={false} shades={!dress.eyes} />{dress.eyes}{dress.hat}</>
        : <DuckParts />}
    </svg>
  );
}

// hat and shades can be left off, for a duck wearing something else.
export function DuckParts({ hat = true, shades = true }) {
  return (
    <>
      {/* feet, splayed slightly outward */}
      <ellipse cx="49" cy="124" rx="11" ry="6" fill={FOOT} transform="rotate(-8 49 124)" />
      <ellipse cx="77" cy="124" rx="11" ry="6" fill={FOOT} transform="rotate(8 77 124)" />

      {/* body, then head set into its top, so the outline reads as one shape */}
      <ellipse cx="63" cy="90" rx="45" ry="31" fill={YELLOW} />
      <circle cx="63" cy="59" r="29" fill={YELLOW} />
      <ellipse cx="63" cy="74" rx="42" ry="24" fill={YELLOW} />

      {/* belly */}
      <ellipse cx="65" cy="97" rx="27" ry="21" fill={BELLY} />

      {/* wing, tucked against the body rather than floating beside it */}
      <ellipse cx="31" cy="88" rx="12" ry="19" fill={WING} transform="rotate(-6 31 88)" />

      {/* beak */}
      <ellipse cx="64" cy="63" rx="17" ry="10" fill={BEAK} />
      <rect x="47" y="61.6" width="34" height="3" rx="1.5" fill={BEAK_LINE} />

      {shades && (<>
      {/* sunglasses: arms, then lenses, sitting clear of the brim above */}
      <rect x="27" y="43" width="14" height="5" rx="2.5" fill={BLACK} />
      <rect x="87" y="43" width="14" height="5" rx="2.5" fill={BLACK} />
      <rect x="40" y="39" width="21" height="13" rx="4.5" fill={BLACK} />
      <rect x="66" y="39" width="21" height="13" rx="4.5" fill={BLACK} />
      <rect x="59" y="43" width="9" height="4" rx="1.6" fill={BLACK} />
      <rect x="44" y="42" width="8" height="3.4" rx="1.7" fill={LENS} />
      <rect x="70" y="42" width="8" height="3.4" rx="1.7" fill={LENS} />
      </>)}

      {hat && (<>
      {/* straw hat: wide flat brim, band, then the crown on top */}
      <ellipse cx="64" cy="27" rx="41" ry="8.6" fill={STRAW} />
      <ellipse cx="64" cy="25" rx="27" ry="6" fill={STRAW_LIGHT} />
      <path d="M47 24.5c4-7 30-7 34 0" stroke={STRAW_LINE} strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <rect x="46" y="19" width="37" height="9.5" rx="1.8" fill={BAND} />
      <ellipse cx="64.5" cy="18.5" rx="18" ry="5" fill={STRAW_LIGHT} />
      <path d="M52 17c4-3.5 21-3.5 25 0" stroke={STRAW_LINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </>)}
    </>
  );
}

// The duck for small spaces: the sidebar, the floating bar on the landing
// page. It is the full drawing, cropped to the head and shoulders, rather than
// a second simplified one.
//
// There used to be a separate mark here of fewer, chunkier shapes, on the idea
// that the detail would turn to mush below 32px. It did not look like the duck
// at all: a yellow disc with one black bar across it, which read as a
// blindfold, and a blob for a beak. On any screen made in the last decade a
// 26px icon is drawn at 52 or 78 real pixels, which is plenty for two lenses,
// a bridge and a beak line.
export function DuckMark({ size = 24, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="20 3 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Dwiddle"
    >
      <ellipse cx="63" cy="90" rx="45" ry="31" fill={YELLOW} />
      <circle cx="63" cy="59" r="29" fill={YELLOW} />
      <ellipse cx="63" cy="74" rx="42" ry="24" fill={YELLOW} />
      <ellipse cx="65" cy="97" rx="27" ry="21" fill={BELLY} />
      <ellipse cx="64" cy="63" rx="17" ry="10" fill={BEAK} />
      <rect x="47" y="61.6" width="34" height="3" rx="1.5" fill={BEAK_LINE} />
      <rect x="27" y="43" width="14" height="5" rx="2.5" fill={BLACK} />
      <rect x="87" y="43" width="14" height="5" rx="2.5" fill={BLACK} />
      <rect x="40" y="39" width="21" height="13" rx="4.5" fill={BLACK} />
      <rect x="66" y="39" width="21" height="13" rx="4.5" fill={BLACK} />
      <rect x="59" y="43" width="9" height="4" rx="1.6" fill={BLACK} />
      <rect x="44" y="42" width="8" height="3.4" rx="1.7" fill={LENS} />
      <rect x="70" y="42" width="8" height="3.4" rx="1.7" fill={LENS} />
      <ellipse cx="64" cy="27" rx="41" ry="8.6" fill={STRAW} />
      <ellipse cx="64" cy="25" rx="27" ry="6" fill={STRAW_LIGHT} />
      <path d="M47 24.5c4-7 30-7 34 0" stroke={STRAW_LINE} strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <rect x="46" y="19" width="37" height="9.5" rx="1.8" fill={BAND} />
      <ellipse cx="64.5" cy="18.5" rx="18" ry="5" fill={STRAW_LIGHT} />
      <path d="M52 17c4-3.5 21-3.5 25 0" stroke={STRAW_LINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

