// Calls to our own serverless functions. The NVIDIA key is never here; it
// lives only on the server, so nothing in this file can leak it.

import { levelForAI } from "./level.js";

// On the web these are same origin. Inside the desktop app the pages are
// loaded from disk, so there is no origin to be relative to and the calls have
// to name the deployment explicitly.
const API = (typeof window !== "undefined" && window.DWIDDLE_API) || "";

// The free models fail intermittently: busy, slow, occasionally malformed. One
// quiet retry turns most of those into a success rather than an error the
// person has to act on.
async function post(path, body, { retry = true } = {}, attempt = 0) {
  let reply;
  try {
    reply = await fetch(API + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level: levelForAI() || undefined, ...body }),
    });
  } catch {
    // A dropped connection or a function still starting up: worth one more go.
    if (retry && attempt < 1) {
      await new Promise((r) => setTimeout(r, 1500));
      return post(path, body, { retry }, attempt + 1);
    }
    throw Object.assign(new Error("Could not reach the server. Check your connection and try again."), { status: 0 });
  }

  let data = null;
  try {
    data = await reply.json();
  } catch {
    // A non JSON body means the function itself fell over.
  }

  // A spent daily allowance is not transient, so it is not retried. Anything
  // else that failed on the server (a slow model, an answer that came back
  // broken) usually works on the next go, which is what people found
  // themselves doing by pressing the button again, so it is done for them,
  // once. More than that piles up behind a busy provider and only makes the
  // wait longer.
  const serverSide = reply.status >= 500;
  if (retry && !reply.ok && serverSide && attempt < 1 && !data?.limit && reply.status !== 404) {
    await new Promise((r) => setTimeout(r, 1200 * (attempt + 1)));
    return post(path, body, { retry }, attempt + 1);
  }

  if (!reply.ok) {
    const fail = (message) => Object.assign(new Error(message), { status: reply.status, limit: !!data?.limit });
    if (reply.status === 504 || (reply.status === 502 && !data)) {
      throw fail("That took too long and the server gave up. The model was probably slow. Try again, and it usually goes through second time.");
    }
    if (reply.status === 503) {
      throw fail(data?.error || "The free model service is busy. Wait a minute and try again.");
    }
    if (reply.status === 404) {
      throw fail("The AI endpoints are not running. They only exist when the app is served by Vercel, so use vercel dev locally.");
    }
    throw fail(data?.error || `The server returned ${reply.status}`);
  }
  return data;
}

export const gradeWriting = ({ answer, prompt, rubric, criteria, scale }) =>
  post("/api/grade", { answer, prompt, rubric, criteria, scale });

// Fresh questions for a test section, written to that section's style.
export const generateTestQuestions = ({ test, section, skills, count, passage, audio, avoid }) =>
  post("/api/testgen", { test, section, skills, count, passage, audio, avoid });

// One question from a real paper, explained with the official key's answer.
export const explainQuestion = ({ test, section, number, question, yours, correct }) =>
  post("/api/explain", { test, section, number, question, yours, correct });
