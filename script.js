const dictionary = [
  { toj: "китоб", eng: "book" },
  { toj: "мошин", eng: "car" },
  { toj: "мактаб", eng: "school" },
  { toj: "нони гарм", eng: "hot bread" },
  { toj: "хонаи ман", eng: "my house" }
];

let currentIndex = 0;

const wordElement = document.getElementById("word");
const inputElement = document.getElementById("translation");
const feedbackElement = document.getElementById("feedback");
const submitBtn = document.getElementById("submit-btn");

function showWord() {
  wordElement.textContent = dictionary[currentIndex].toj;
  inputElement.value = "";
  feedbackElement.textContent = "";
  inputElement.focus();
}

function checkTranslation() {
  const userAnswer = inputElement.value.trim().toLowerCase();
  const correctAnswer = dictionary[currentIndex].eng.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "✅ Ҷавоби дуруст!";
    feedbackElement.style.color = "#4caf50";
  } else {
    feedbackElement.textContent = ❌ Ҷавоби хато. Ҷавоби дуруст: "${dictionary[currentIndex].eng}";
    feedbackElement.style.color = "#f44336";
  }

  currentIndex = (currentIndex + 1) % dictionary.length;

  setTimeout(showWord, 2500);
}

submitBtn.addEventListener("click", checkTranslation);

inputElement.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkTranslation();
  }
});

window.onload = showWord;
