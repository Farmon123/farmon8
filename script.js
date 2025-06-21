const words = [
  { toj: "китоб", eng: "book" },
  { toj: "мошин", eng: "car" },
  { toj: "мактаб", eng: "school" },
  { toj: "нони гарм", eng: "hot bread" },
  { toj: "хонаи ман", eng: "my house" }
];

let current = 0;

function showWord() {
  document.getElementById("word-box").innerText = words[current].toj;
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const user = document.getElementById("answer").value.trim().toLowerCase();
  const correct = words[current].eng.toLowerCase();
  if (user === correct) {
    document.getElementById("result").innerText = "✅ Дуруст!";
  } else {
    document.getElementById("result").innerText = ❌ Хато. Ҷавоби дуруст: ${words[current].eng};
  }

  current = (current + 1) % words.length;
  setTimeout(showWord, 2000);
}

window.onload = showWord;
