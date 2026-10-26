// Explains one question a student pasted from a real paper, using the answer from
// the official key. The model is told to say so when the question it is given
// does not support the key, rather than agreeing with it.

import { ask, fail, userError } from "./_llm.js";
import { allow } from "./_guard.js";

export const config = { maxDuration: 60 };

const SYSTEM = `You are a patient tutor helping a student review a question from a real practice paper.

You are given the question as the student pasted it, the answer the official key gives, and what the student chose.

Write a clear explanation in 4 to 8 short sentences:
- Work the question through, step by step for maths.
- Say why the key's answer is right.
- If the student chose something else, say why it is tempting and why it fails.
- If the pasted question does not contain enough to confirm the key's answer, or you reach a different answer, say so plainly and show your working instead of agreeing.

Write mathematics with real symbols (x², √, ×, ÷, ≤). British English. No em dashes or en dashes. No markdown headings, no bullet lists, no emoji. Plain sentences.`;

export default async function handler(req, res) {
  if (!allow(req, res, { limit: 10 })) return;

  const question = String(req.body?.question || "").trim().slice(0, 3000);
  const test = String(req.body?.test || "").slice(0, 60);
  const section = String(req.body?.section || "").slice(0, 60);
  const correct = String(req.body?.correct || "").slice(0, 40);
  const yours = String(req.body?.yours || "").slice(0, 40);
  const number = Number(req.body?.number) || 0;
  if (question.length < 8) return userError(res, 400, "Paste the question first.");

  const user = [
    test ? `Test: ${test}${section ? `, ${section}` : ""}` : null,
    number ? `Question number: ${number}` : null,
    `Question as pasted:\n${question}`,
    `Answer from the official key: ${correct || "not given"}`,
    `The student chose: ${yours || "nothing"}`,
  ].filter(Boolean).join("\n\n");

  try {
    const text = await ask({ system: SYSTEM, user, maxTokens: 900, temperature: 0.3 });
    const explanation = String(text || "").trim();
    if (!explanation) return userError(res, 502, "No explanation came back. Try again.");
    res.status(200).json({ explanation });
  } catch (err) {
    fail(res, err);
  }
}
