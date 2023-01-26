// ###########################################
// ########## data soal dan jawaban ##########
// ###########################################

const dbQuiz = [
  {
    question: "Warisan budaya Indonesia yang sangat beragam perlu kita...",
    answer: ["asingkan", "hilangkan", "berikan", "lestarikan"],
  },
  {
    question: "Yang termasuk alat musik tradisional adalah...",
    answer: ["gitar", "piano", "kecapi", "drum"],
  },
  {
    question: "Cara menghargai keragaman agama yang ada adalah dengan cara...",
    answer: [
      "pura pura tidak tahu",
      "mengikuti tempat ibadah agama orang lain",
      "mengotori tempat ibadah orang lain",
      "tidak gaduh jika ada orang lain yang beribadah",
    ],
  },
  {
    question:
      "Berikut ini yang bukan merupakan hal-hal yang dapat memupuk kerja sama adalah..",
    answer: [
      "peran dan tanggung jawab yang jelas",
      "ingin berbagi ide dan pikiran",
      "berburuk sangka kepada orang lain",
      "keinginan untuk mencapai tujuan",
    ],
  },
  {
    question: "Berikut ini yang termasuk bagian tengah telinga kecuali..",
    answer: ["rumah siput", "gendang telinga", "eustatius", "tulang sanggurdi"],
  },
];
const dbAnswer = [3, 2, 3, 3, 0];

// #######################################
// ########## Sistem Pertanyaan ##########
// #######################################

// started quizz
let tanya = confirm("apakah kamu mau main ?");
if (tanya) {
  document.getElementById("quizz").style.display = "grid";
}

let currentQ = 0;
let dbAnswerPlayer = [];
let totalScore = 0;

// meload question dan jawaban ketika pertama kali dibuka
document.addEventListener("DOMContentLoaded", (event) => {
  questionLoad();
});

// function load question & answer
function questionLoad() {
  document.getElementById("pertanyaan").innerText = dbQuiz[currentQ].question; // load pertanyaan
  const labels = document.querySelectorAll("label");
  for (let i = 0; i < labels.length; i++) {
    labels[i].innerText = dbQuiz[currentQ].answer[i];
  }
}

// function membuat pertanyaan dinamis
function nextQuestion() {
  const answer = document.querySelector("input:checked");
  if (answer == null) {
    // mengecek apakah jawaban sudah dipilih atau belum
    alert(
      "kamu belum memilih jawaban, silahkan pilih jawaban kamu sebelum melanjutkan!!!"
    );
    return;
  }

  if (currentQ < dbQuiz.length - 1) {
    currentQ++;
    saveAnswer();
    questionLoad();
    resetChecked();
  } else if (currentQ === dbQuiz.length - 1) {
    // menyimpan jawaban terakhir
    document.querySelector("button").innerText = "KIRIM";
    currentQ++;
    saveAnswer();
  } else {
    bandingAnswer();
  }
}

// save answer
function saveAnswer() {
  const answer = document.querySelector("input[name='choose']:checked");
  dbAnswerPlayer.push(parseInt(answer.getAttribute("data-id")));
}

// reset pilihan player
function resetChecked() {
  const answerChecked = document.querySelector("input[name='choose']:checked");
  if ((answerChecked.checked = true)) {
    answerChecked.checked = false;
  }
}

// banding Answer
function bandingAnswer() {
  if (dbAnswer.length === dbAnswerPlayer.length) {
    for (let i = 0; i < dbAnswerPlayer.length; i++) {
      if (dbAnswerPlayer[i] === dbAnswer[i]) {
        totalScore += 100;
      }
    }
  }
  document.getElementById(
    "score"
  ).innerText = `jumplah score kamu adalah ${totalScore}`;
  document.getElementById("quizz").style.display = "none";
  document.getElementById("selesai").style.display = "block";
}
