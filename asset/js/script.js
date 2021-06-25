// create array to hold words
// create random method to hide letters
//create method to check for correct answer
// creat timer
// win lose method
var counter = document.querySelector("#counter");
var startButton = document.querySelector("#start");
var resetButton = document.querySelector("#reset");

var count = localStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});