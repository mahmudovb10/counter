const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const title = document.querySelector("h2");
const reset = document.getElementById("reset");

let counter = 0;

function stopCount() {
  title.textContent = counter;

  title.classList.remove("green", "yellow", "red");
  if (counter > 0) {
    title.classList.add("gren");
  } else if (counter < 0) {
    title.classList.add("red");
  } else {
    title.classList.add("yellow");
  }

  plus.disabled = counter >= 15;
  minus.disabled = counter <= -15;
}

plus.addEventListener("click", () => {
  counter++;
  stopCount();
});
minus.addEventListener("click", () => {
  counter--;
  stopCount();
});
reset.addEventListener("click", () => {
  counter = 0;
  stopCount();
});
stopCount(s);
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const title = document.querySelector("h2");
const reset = document.getElementById("reset");

let counter = 0;

function stopCount() {
  title.textContent = counter;

  title.classList.remove("green", "yellow", "red");
  if (counter > 0) {
    title.classList.add("gren");
  } else if (counter < 0) {
    title.classList.add("red");
  } else {
    title.classList.add("yellow");
  }

  plus.disabled = counter >= 15;
  minus.disabled = counter <= -15;
}

plus.addEventListener("click", () => {
  counter++;
  stopCount();
});
minus.addEventListener("click", () => {
  counter--;
  stopCount();
});
reset.addEventListener("click", () => {
  counter = 0;
  stopCount();
});
stopCount(s);
