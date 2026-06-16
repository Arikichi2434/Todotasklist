const loadButton = document.querySelector("#loadButton");
const statusText = document.querySelector("#statusText");
const lessonList = document.querySelector("#lessonList");

function showLessons(lessons) {
  lessonList.innerHTML = "";

  lessons.forEach(function(lesson) {
    lessonList.innerHTML = lessonList.innerHTML + "<li>" + lesson.title + "</li>";
  });
}

function loadLessons() {
  statusText.textContent = "データを取得中です。";

  fetch("data.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      statusText.textContent = "データを取得しました。";
      showLessons(data.lessons);
    });
}

loadButton.addEventListener("click", loadLessons);
