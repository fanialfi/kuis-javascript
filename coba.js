// ################################
// ########## BASIC DATA ##########
// ################################

const dbQuest = [
  {
    question: "apa itu SK?",
    answer: ["surat kerja", "sekolah koding", "suka kamu", "sok kenal"],
  },
  {
    question: "sop di balik ?",
    answer: ["pos", "ops", "spo", "tumpah"],
  },
  {
    question: "programmer itu?",
    answer: ["tangguh", "cengeng", "lemah", "malas"],
  },
];

let nextDb = 0;
const dbAnswer = [1, 3, 0];
let simpanJawaban = [];
let totalScore = 0;
document.addEventListener("DOMContentLoaded", () => {
  setupQuestion();
});

function setupQuestion() {
  document.getElementById("pertanyaan").innerText = dbQuest[nextDb].question;

  const labels = document.querySelectorAll("label");
  for (let i = 0; i < labels.length; i++) {
    labels[i].innerText = dbQuest[nextDb].answer[i];
  }
}

function nextSoal() {
  const input = document.querySelector("input:checked");
  if (input == null) alert("masukkan jawaban kamu");
  saveAnswer();

  if (nextDb < dbQuest.length - 1) {
    nextDb++;
  } else if (nextDb == dbQuest.length - 1) {
    stopQuiz();
  }

  resetState();
  setupQuestion();
}
function stopQuiz() {
  checkScore();
  alert(`selesai score kamu adalah ${totalScore}`);
}

function saveAnswer() {
  const answer = document.querySelector("input:checked");
  simpanJawaban.push(parseInt(answer.getAttribute("data-id")));
}

function resetState() {
  const input = document.querySelector("input:checked");
  if (input != null) {
    input.checked = false;
  }
}

function checkScore() {
  for (let i = 0; i < simpanJawaban.length; i++) {
    if (simpanJawaban[i] === dbAnswer[i]) {
      totalScore += 100;
    }
  }
}
