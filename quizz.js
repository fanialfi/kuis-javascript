// ###################################
// ########## STRUKTUR DATA ##########
// ###################################
const dbQuestion = [
  {
    question: "Apa Itu SK ?",
    answer: ["sok tau", "salah kata", "sate kambing", "sekolah koding"],
  },
  {
    question: "Sop di Balik ?",
    answer: ["pos", "ops", "tumpah", "spo"],
  },
  {
    question: "Programmer Itu ?",
    answer: ["keren", "lemah", "males", "jadul"],
  },
];
const dbAnswer = [3, 2, 0];

// ###################################
// ########## STARTING QUIZ ##########
// ###################################
const start = document.querySelector(".start");
const homepage = document.querySelector(".homepage");
const end = document.querySelector(".end");

function starttingQuiz() {
  start.style.display = "none";
  homepage.style.display = "flex";
}

// ###############################################
// ########## SISTEM PERTANYAAN DINAMIS ##########
// ###############################################

let currentQ = 0;
let userAnswer = [];
let score = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  setupQuestion();
});
function setupQuestion() {
  if (currentQ < dbQuestion.length) {
    document.getElementById("soal").innerText = dbQuestion[currentQ].question;
    const labels = document.querySelectorAll("label");

    for (let i = 0; i < labels.length; i++) {
      labels[i].innerText = dbQuestion[currentQ].answer[i];
    }
  }
}
function questionNext() {
  currentQ++;
  saveAnswer();

  if (currentQ > dbQuestion.length - 1) {
    quizSelesai();
  }

  resetState();
  setupQuestion();
  return;
}
function resetState() {
  let answerChecked = document.querySelector("input:checked");
  if (answerChecked) {
    answerChecked.checked = false;
  }
}
function saveAnswer() {
  const inputChecked = document.querySelector("input:checked");
  if (inputChecked != null) {
    userAnswer.push(parseInt(inputChecked.getAttribute("data-id")));
  } else if (inputChecked == null) {
    userAnswer.push(99);
  }
}

function quizSelesai() {
  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] == dbAnswer[i]) {
      score += 100;
    }
  }

  end.style.display = "block";
  homepage.style.display = "none";
  const h6 = end.querySelector(".total-score");
  h6.innerText = `score kamu adalah ${score}`;
}

function lagi() {
  score = 0;
  start.style.display = "none";
  homepage.style.display = "flex";
  end.style.display = "none";
  setupQuestion();
  currentQ = 0;
  userAnswer = [];
}
