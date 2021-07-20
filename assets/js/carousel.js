document.addEventListener("DOMContentLoaded", () => {
  let slider = document.querySelector(".rail"),
    next = document.querySelector(".btn-right"),
    prev = document.querySelector(".btn-left");
  if (next && prev) {
    let slides = document.getElementsByClassName("slide"),
      idx = 1,
      slideWidth = 100,
      locked = false,
      firstSlide = slides[0].cloneNode(),
      lastSlide = slides[slides.length - 1].cloneNode();

    // set loop buffers
    slider.append(firstSlide);
    slider.insertBefore(lastSlide, slides[0]);

    function checkForLoop() {
      slider.classList.remove("sliding");
      if (idx <= 0) {
        slider.style.left = -1 * slideWidth * (slides.length - 2) + "%";
        idx = slides.length - 2;
      } else if (idx >= slides.length - 1) {
        slider.style.left = -1 * slideWidth + "%";
        idx = 1;
      }
      locked = false;
    }
    function moveSlide(dir) {
      slider.classList.add("sliding");
      if (!locked) {
        idx += dir * 1;
        slider.style.left = idx * slideWidth * -1 + "%";
        locked = true;
      }
    }

    next.addEventListener("click", () => {
      moveSlide(1);
    });
    prev.addEventListener("click", () => {
      moveSlide(-1);
    });

    slider.addEventListener("transitionend", checkForLoop);
  } else {
    slider.style.left = 0;
  }
});
