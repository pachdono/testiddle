# Testiddle

Timed SAT, ACT, SSAT, IELTS and TOEFL practice, split out of Dwiddle.

- `src/TestPrep.jsx` is the Test prep page, moved from Dwiddle's `App.jsx` unchanged.
- `src/tests.js`, `generate.js`, `tasks.js`, `scoring.js`, `bank.js` hold the tests, question builders, rubrics and the fresh question bank.
- `api/testgen.js` writes fresh questions and `api/grade.js` marks writing.
- It uses the same Supabase project as Dwiddle, so accounts are shared. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` on Vercel, plus the same AI keys Dwiddle uses, and add this site's address to the Supabase redirect URLs.

```
npm install
npm run dev    # http://localhost:5181
npm run build
```
