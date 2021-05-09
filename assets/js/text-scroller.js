const delay = 3000;
const items = ["web developer", "recent graduate", "coding enthusiast"];
const list = document.querySelector(".noun-list");
var index = 0;
function onEnd() {
  list.classList.remove("slide-up");
  let spans = list.querySelectorAll("span");
  index = (index + 1) % items.length;
  spans[0].innerHTML = items[index];
  spans[1].innerHTML = items[(index + 1) % items.length];
  setTimeout(() => {
    list.classList.add("slide-up");
  }, delay);
}
document.addEventListener("DOMContentLoaded", () => {
  list.style.width = "270px";
  setTimeout(() => {
    list.addEventListener("transitionend", () => {
      onEnd();
    });
    list.classList.add("slide-up");
  }, delay * 0.5);
});
