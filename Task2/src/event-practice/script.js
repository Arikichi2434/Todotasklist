const memoInput = document.querySelector("#memoInput");
const previewText = document.querySelector("#previewText");

function showInputText() {
  previewText.textContent = memoInput.value;
}

memoInput.addEventListener("input", showInputText);
