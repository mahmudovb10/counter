const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const title = document.querySelector("h1");

let counter = 0;

function stopCount() {
  title.textContent = counter;

  title.classList.remove("green", "yellow", "red");
  if (counter > 0) {
    title.classList.add("green");
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

stopCount();
