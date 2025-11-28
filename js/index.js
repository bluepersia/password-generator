const allChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function generatePassword(config) {
  let result = "";

  let chars = allChars;
  if (!config.numbers) {
    chars = chars.filter((char) => !numbers.includes(char));
  }
  if (!config.symbols) {
    chars = chars.filter((char) => !symbols.includes(char));
  }

  for (let i = 0; i < config.length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

function init(passwordGenerator) {
  const formEl = passwordGenerator.querySelector("[data-form]");
  const password1El = passwordGenerator.querySelector("[data-password-1]");
  const password2El = passwordGenerator.querySelector("[data-password-2]");

  const lengthEl = formEl.querySelector("[data-length]");
  const numbersEl = formEl.querySelector("[data-numbers]");
  const symbolsEl = formEl.querySelector("[data-symbols]");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const config = {
      length: Number(lengthEl.value),
      numbers: numbersEl.checked,
      symbols: symbolsEl.checked,
    };

    const password1 = generatePassword(config);
    const password2 = generatePassword(config);

    password1El.textContent = password1;
    password2El.textContent = password2;
  });
}

init(document.querySelector("[data-password-generator]"));
