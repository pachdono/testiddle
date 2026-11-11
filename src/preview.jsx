import { createRoot } from "react-dom/client";
import "./courses.css";
import { Critter } from "./Critters.jsx";
const all = [["tiddle", "top"], ["sprout", "corner"], ["inky", "side"], ["wiggle", "under"], ["pip", "perch"], ["mochi", "perch"], ["bumble", "fly"], ["fern", "side"], ["dot", "climb"]];
createRoot(document.getElementById("root")).render(<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 300px)", gap: "120px 40px", padding: 100 }}>{all.map(([w, p]) => <div key={w} style={{ position: "relative", height: 90, border: "2px solid #ccd", borderRadius: 14, background: "#fbfbff", transform: "scale(1.6)" }}><Critter who={w} where={p} at="50%" /></div>)}</div>);
