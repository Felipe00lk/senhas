/* script.js */
const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");


lengthSlider.addEventListener("input", () => {
lengthValue.textContent = lengthSlider.value;
});


function generatePassword() {
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const syms = "!@#$%^&*()-_=+[]{}?";


let chars = "";
if (uppercase.checked) chars += upper;
if (lowercase.checked) chars += lower;
if (numbers.checked) chars += nums;
if (symbols.checked) chars += syms;


if (!chars) return "Selecione ao menos 1 opção";


let password = "";
for (let i = 0; i < lengthSlider.value; i++) {
password += chars[Math.floor(Math.random() * chars.length)];
}
return password;
}


generateBtn.addEventListener("click", () => {
passwordInput.value = generatePassword();
});


copyBtn.addEventListener("click", () => {
if (passwordInput.value) {
navigator.clipboard.writeText(passwordInput.value);
copyBtn.textContent = "✔";
setTimeout(() => (copyBtn.textContent = "📋"), 1000);
}
});
