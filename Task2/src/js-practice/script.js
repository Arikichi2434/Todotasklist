const message = document.querySelector("#message");
const changeButton = document.querySelector("#changeButton");

function changeMessage() {
  message.textContent = "ボタンが押されました。";
}

changeButton.addEventListener("click", changeMessage);
