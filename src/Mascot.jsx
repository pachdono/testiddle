// Tiddle, the Testiddle duckling. Each pose shows Tiddle in one of the avatar costumes, so the same
// turned, shaded drawing appears everywhere: waving as the astronaut, reading as the bookworm,
// cheering as the superhero, thinking as the detective, sitting as the sleepy one.

import { TiddleAv } from "./TiddleAvatars.jsx";

const FOR_POSE = { stand: "cool", wave: "astronaut", read: "bookworm", cheer: "superhero", think: "detective", sit: "sleepy", cook: "chef", panic: "panic" };

/** pose: "stand" (default), "wave", "read", "cheer", "think", "sit", "cook" or "panic". */
export function Mascot({ size = 120, pose = "stand", className = "", title = "Tiddle, the Testiddle duckling" }) {
  return (
    <span className={"tiddle " + className} style={{ width: size, height: size, display: "inline-block" }} role="img" aria-label={title}>
      <TiddleAv id={FOR_POSE[pose] || "cool"} size="100%" />
    </span>
  );
}
