// Past paper questions by year. The papers belong to the exam boards, so nothing
// here is copied: each row is one year and session, and its buttons open a search
// for exactly that paper and its mark scheme. Direct file links change every year
// and break without warning, whereas a search for "Edexcel 4MA1 June 2023" always
// finds the current copy.

const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

const search = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;

export const PPQ = {
  "igcse-mcq": {
    board: "Cambridge IGCSE",
    note: "Papers 1 and 2 in the sciences are multiple choice with the key in the mark scheme, so you can sit them here. Other papers are written.",
    sessions: [["s", "May/June"], ["w", "Oct/Nov"], ["m", "Feb/March"]],
    years: YEARS,
    hubs: [["Cambridge International past papers", "https://www.cambridgeinternational.org/"], ["Physics and Maths Tutor", "https://www.physicsandmathstutor.com/past-papers/"], ["Save My Exams", "https://www.savemyexams.com/"]],
    levels: [{
      id: "igcse", name: "IGCSE", subjects: [
        { name: "Mathematics", code: "0580" }, { name: "Additional Mathematics", code: "0606" },
        { name: "Biology", code: "0610", mcq: true }, { name: "Chemistry", code: "0620", mcq: true }, { name: "Physics", code: "0625", mcq: true },
        { name: "Combined Science", code: "0653", mcq: true }, { name: "Economics", code: "0455" }, { name: "Business Studies", code: "0450" },
        { name: "Computer Science", code: "0478" }, { name: "Geography", code: "0460" }, { name: "History", code: "0470" },
        { name: "English First Language", code: "0500" },
      ],
    }],
    paperQuery: (lvl, s, y, sess) => `Cambridge ${lvl.name} ${s.name} ${s.code} ${sess[1]} ${y} question paper pdf`,
    markQuery: (lvl, s, y, sess) => `Cambridge ${lvl.name} ${s.name} ${s.code} ${sess[1]} ${y} mark scheme pdf`,
  },

  edexcel: {
    board: "Pearson Edexcel",
    note: "Written papers: sit them on paper, then mark yourself against the mark scheme.",
    sessions: [["Jun", "May/June"], ["Nov", "Oct/Nov"], ["Jan", "January"]],
    years: YEARS,
    hubs: [["Pearson past papers", "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html"], ["Physics and Maths Tutor", "https://www.physicsandmathstutor.com/past-papers/"], ["Save My Exams", "https://www.savemyexams.com/"]],
    levels: [
      { id: "igcse", name: "International GCSE", sessions: [["Jun", "May/June"], ["Nov", "Oct/Nov"], ["Jan", "January"]], subjects: [
        { name: "Mathematics A", code: "4MA1" }, { name: "Mathematics B", code: "4MB1" }, { name: "Biology", code: "4BI1" }, { name: "Chemistry", code: "4CH1" }, { name: "Physics", code: "4PH1" },
        { name: "Economics", code: "4EC1" }, { name: "Business", code: "4BS1" }, { name: "English Language A", code: "4EA1" }, { name: "History", code: "4HI1" }, { name: "Geography", code: "4GE1" } ] },
      { id: "gcse", name: "GCSE", sessions: [["Jun", "May/June"], ["Nov", "November resit"]], subjects: [
        { name: "Mathematics", code: "1MA1" }, { name: "Biology", code: "1BI0" }, { name: "Chemistry", code: "1CH0" }, { name: "Physics", code: "1PH0" }, { name: "Combined Science", code: "1SC0" },
        { name: "English Language", code: "1EN0" }, { name: "English Literature", code: "1ET0" }, { name: "Business", code: "1BS0" }, { name: "Geography A", code: "1GA0" }, { name: "History", code: "1HI0" } ] },
      { id: "alevel", name: "A Level", sessions: [["Jun", "May/June"]], subjects: [
        { name: "Mathematics", code: "9MA0" }, { name: "Further Mathematics", code: "9FM0" }, { name: "Biology A (Salters Nuffield)", code: "9BI0" }, { name: "Chemistry", code: "9CH0" }, { name: "Physics", code: "9PH0" },
        { name: "Economics A", code: "9EC0" }, { name: "Business", code: "9BS0" } ] },
    ],
    paperQuery: (lvl, s, y, sess) => `Edexcel ${lvl.name} ${s.name} ${s.code} ${sess[1]} ${y} question paper pdf`,
    markQuery: (lvl, s, y, sess) => `Edexcel ${lvl.name} ${s.name} ${s.code} ${sess[1]} ${y} mark scheme pdf`,
  },

  aqa: {
    board: "AQA",
    note: "Written papers: sit them on paper, then mark yourself against the mark scheme.",
    sessions: [["Jun", "June"], ["Nov", "November"]],
    years: YEARS,
    hubs: [["AQA past papers", "https://www.aqa.org.uk/find-past-papers-and-mark-schemes"], ["Physics and Maths Tutor", "https://www.physicsandmathstutor.com/past-papers/"], ["Save My Exams", "https://www.savemyexams.com/"]],
    levels: [
      { id: "gcse", name: "GCSE", sessions: [["Jun", "May/June"], ["Nov", "November resit"]], subjects: [
        { name: "Mathematics", code: "8300" }, { name: "Biology", code: "8461" }, { name: "Chemistry", code: "8462" }, { name: "Physics", code: "8463" }, { name: "Combined Science Trilogy", code: "8464" },
        { name: "English Language", code: "8700" }, { name: "English Literature", code: "8702" }, { name: "History", code: "8145" }, { name: "Geography", code: "8035" }, { name: "Computer Science", code: "8525" }, { name: "Business", code: "8132" } ] },
      { id: "alevel", name: "A Level", sessions: [["Jun", "May/June"]], subjects: [
        { name: "Mathematics", code: "7357" }, { name: "Further Mathematics", code: "7367" }, { name: "Biology", code: "7402" }, { name: "Chemistry", code: "7405" }, { name: "Physics", code: "7408" },
        { name: "Economics", code: "7136" }, { name: "Psychology", code: "7182" }, { name: "English Literature A", code: "7712" }, { name: "History", code: "7042" }, { name: "Computer Science", code: "7517" }, { name: "Business", code: "7132" } ] },
    ],
    paperQuery: (lvl, s, y, sess) => `AQA ${lvl.name} ${s.name} ${s.code} ${sess[1]} ${y} question paper pdf`,
    markQuery: (lvl, s, y, sess) => `AQA ${lvl.name} ${s.name} ${s.code} ${sess[1]} ${y} mark scheme pdf`,
  },

  ocr: {
    board: "OCR",
    note: "Written papers: sit them on paper, then mark yourself against the mark scheme.",
    sessions: [["Jun", "June"], ["Nov", "November"]],
    years: YEARS,
    hubs: [["OCR past paper finder", "https://www.ocr.org.uk/qualifications/past-paper-finder/"], ["Physics and Maths Tutor", "https://www.physicsandmathstutor.com/past-papers/"], ["Save My Exams", "https://www.savemyexams.com/"]],
    levels: [
      { id: "gcse", name: "GCSE", sessions: [["Jun", "May/June"], ["Nov", "November resit"]], subjects: [
        { name: "Mathematics", code: "J560" }, { name: "Biology A", code: "J247" }, { name: "Chemistry A", code: "J248" }, { name: "Physics A", code: "J249" }, { name: "Gateway Combined Science", code: "J250" },
        { name: "English Language", code: "J351" }, { name: "English Literature", code: "J352" }, { name: "History B", code: "J411" }, { name: "Geography A", code: "J383" }, { name: "Computer Science", code: "J277" } ] },
      { id: "alevel", name: "A Level", sessions: [["Jun", "May/June"]], subjects: [
        { name: "Mathematics A", code: "H240" }, { name: "Further Mathematics A", code: "H245" }, { name: "Biology A", code: "H020" }, { name: "Chemistry A", code: "H032" }, { name: "Physics A", code: "H156" },
        { name: "Computer Science", code: "H446" }, { name: "Economics", code: "H460" }, { name: "Psychology", code: "H567" } ] },
    ],
    paperQuery: (lvl, s, y, sess) => `OCR ${lvl.name} ${s.name} ${s.code} ${sess[1]} ${y} question paper pdf`,
    markQuery: (lvl, s, y, sess) => `OCR ${lvl.name} ${s.name} ${s.code} ${sess[1]} ${y} mark scheme pdf`,
  },

  // The admissions tests release numbered practice tests rather than yearly papers.
  sat: {
    board: "College Board",
    numbered: true,
    note: "Each one is a full length official test. Sit it in the Bluebook app, or download the PDF and sit it here against the clock.",
    hubs: [["College Board practice tests", "https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests"]],
    groups: [
      { name: "Digital SAT practice tests", count: 6, query: (n) => `Digital SAT Practice Test ${n} College Board bluebook` },
      { name: "Paper SAT practice tests", count: 10, query: (n) => `SAT Practice Test ${n} College Board pdf answers` },
    ],
  },
  psat: {
    board: "College Board",
    numbered: true,
    note: "The PSAT/NMSQT practice tests, in the same digital format as the SAT.",
    hubs: [["College Board PSAT practice", "https://satsuite.collegeboard.org/psat-nmsqt"]],
    groups: [{ name: "PSAT/NMSQT practice tests", count: 4, query: (n) => `PSAT NMSQT Practice Test ${n} College Board pdf` }],
  },
  act: {
    board: "ACT",
    numbered: true,
    note: "Released ACT tests, with the answer key and the score conversion table, free from act.org.",
    hubs: [["ACT test preparation", "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation.html"]],
    groups: [{ name: "Official ACT practice tests", count: 6, query: (n) => `official ACT practice test ${n} pdf answer key act.org` }],
  },
};

export { YEARS, search };
