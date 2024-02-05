// COME BACK PLEASE
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back Please 🥹";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

// AUTO RANDOM TITLE
let titleText = ["Website Midterm", "Suon Phanun", "BBU B-202 D3 T1"];
let counter = 0;

setInterval(function () {
  document.title = titleText[counter % titleText.length];
  counter++;
}, 2000);
