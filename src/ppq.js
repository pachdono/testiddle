// The SAT practice tests this site holds, grouped into the two courses.

export const PPQ = {
  sat: {
    board: "College Board",
    numbered: true,
    note: "Two kinds of full length practice test.",
    groups: [
      { name: "Paper SAT", count: 5, title: (n) => `SAT Paper Test ${n}`, minutes: 134, questions: 98, own: "sat-paper", query: (n) => `Testiddle SAT Paper Test ${n}`, blurb: "Original Testiddle tests in the digital format, printed. Write on the paper here, then submit each module to be marked with an explanation for every question.", note: "Write on the paper, then submit each module to be marked." },
      { name: "Computer SAT", count: 5, title: (n) => `SAT Computer Test ${n}`, minutes: 134, questions: 98, digital: "sat-digital", blurb: "Original tests that work like the Bluebook app: one question at a time, with a second module that is harder or easier depending on how the first went. Includes a calculator, flags and a score estimate.", query: (n) => `Testiddle SAT Computer Test ${n}` },
    ],
  },
};
