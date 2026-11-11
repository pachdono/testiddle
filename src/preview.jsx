import { createRoot } from "react-dom/client";
import "@fontsource/patrick-hand/400.css";
import "@fontsource-variable/nunito";
import "@fontsource-variable/fraunces";
import "./styles.css";
import "./testiddle.css";
import "./courses.css";
import IgcsePage from "./Igcse.jsx";
createRoot(document.getElementById("root")).render(<IgcsePage id="igcse-biology" nav={() => {}} />);
