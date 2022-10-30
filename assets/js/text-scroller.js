const delay = 3000;
let index = 0;

function onEnd(elem, items) {
  elem.classList.remove("slide-up");
  let spans = elem.querySelectorAll("span");
  index = (index + 1) % items.length;
  spans[0].innerHTML = items[index];
  spans[1].innerHTML = items[(index + 1) % items.length];
  setTimeout(() => {
    elem.classList.add("slide-up");
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  const items = ["a React developer", "a skill collector", "a coding enthusiast"];
  const list = document.querySelector(".hero-noun-list");
  list.style.width = "280px";
  setTimeout(() => {
    list.addEventListener("transitionend", (e) => {
      onEnd(e.target, items);
    });
    list.classList.add("slide-up");
  }, delay * 0.5);
});
