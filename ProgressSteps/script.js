const progreess = document.getElementById("progress");

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const percentage = document.querySelector(".percentage");

let currentActive = 1;
let progressStep = 100 / (circles.length - 1);
let progressValue = 0;
btnNext.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
  }
  setActive();
});

btnPrev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  }
  setActive();
});

function setActive() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  if (currentActive > 1) {
    btnPrev.disabled = false;
    percentage.style = "color: var(--line-border-fill)";
  } else {
    btnPrev.disabled = true;
    percentage.style = "color: var(--line-border-empty)";
  }
  if (currentActive >= circles.length) {
    btnNext.disabled = true;
    percentage.style = "font-weight: bold";
  } else {
    btnNext.disabled = false;
    percentage.style = "font-weight: normal";
  }
  progressValue = (currentActive - 1) * progressStep;
  progreess.style.width = progressValue + "%";

  percentage.textContent = progressValue.toPrecision(3) + "%";
}
