const countText = document.querySelector("#countText");
const increaseButton = document.querySelector("#increaseButton");

let count = 0;

function showCount() {
  countText.textContent = count;
}

function increaseCount() {
  count = count + 1;
  showCount();
}

increaseButton.addEventListener("click", increaseCount);
