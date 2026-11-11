// Hand drawn diagrams for the IGCSE cheat sheets, keyed by sheet id (subject-topic). Topics
// without one show a map of the sheet's parts instead.

import biology from "./biology.jsx";
import chemistry from "./chemistry.jsx";
import physics from "./physics.jsx";
import maths from "./maths.jsx";
import techGeo from "./tech-geo.jsx";
import humanities from "./humanities.jsx";

export const IFIG = { ...biology, ...chemistry, ...physics, ...maths, ...techGeo, ...humanities };
