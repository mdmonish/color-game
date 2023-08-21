//random array
var initial = 6;
var color = generatingArray(6);
var selected = pickRandom();

var h1 = document.querySelector("h1");
var newColor = document.getElementById("newColor");
var select = document.querySelectorAll(".square");
var popMsg = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var modeB = document.querySelectorAll(".mode");

newColor.textContent = selected;

for (var i = 0; i < modeB.length; i++) {
  modeB[i].addEventListener("click", function () {
    modeB[0].classList.remove("selected");
    modeB[1].classList.remove("selected");
    this.classList.add("selected");
    if (this.textContent === "Easy") initial = 3;
    else initial = 6;
    reset();
  });
}
function reset() {
  color = generatingArray(initial);
  selected = pickRandom();
  resetBtn.textContent = "NEW GAME";
  newColor.textContent = selected;
  popMsg.textContent = "";
  for (var i = 0; i < select.length; i++) {
    if (color[i]) {
      select[i].style.display = "block";
      select[i].style.background = color[i];
    } else {
      select[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}
resetBtn.addEventListener("click", function () {
  reset();
});
for (var i = 0; i < select.length; i++) {
  select[i].style.background = color[i];
  select[i].addEventListener("click", function () {
    var clicked = this.style.background;
    if (clicked === selected) {
      popMsg.textContent = "Correct!";
      resetBtn.textContent = "PLAY AGAIN?";
      h1.style.background = selected;
      changeColors(clicked);
    } else {
      this.style.background = "black";
      popMsg.textContent = "Try Again!";
    }
  });
}
function changeColors(colorss) {
  for (var i = 0; i < select.length; i++) select[i].style.background = colorss;
}
function pickRandom() {
  var rnd = Math.floor(Math.random() * color.length);
  return color[rnd];
}
//generating random array
function generatingArray(value) {
  var arr = [];
  for (var i = 0; i < value; i++) arr.push(colorCode());
  return arr;
}
function colorCode() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
