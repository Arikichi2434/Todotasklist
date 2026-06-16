const statusMessage = document.querySelector("#statusMessage");
const successButton = document.querySelector("#successButton");
const resetButton = document.querySelector("#resetButton");

function showSuccess() {
  statusMessage.textContent = "成功状態になりました。";
  statusMessage.classList.add("success");
}

function resetStatus() {
  statusMessage.textContent = "まだ状態は変わっていません。";
  statusMessage.classList.remove("success");
}

successButton.addEventListener("click", showSuccess);
resetButton.addEventListener("click", resetStatus);
