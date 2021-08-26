// MOBILE AND MEDIUM SCREEN SLIDER

let cards = document.getElementsByClassName("slider");
let dots = document.getElementsByClassName("round-slider");

cards = Array.from(cards);
dots = Array.from(dots);


function removeClass(array, className, elementIndex) {

  array.forEach((element, currentIndex, array) => {
    if (elementIndex != currentIndex) {
      element.classList.remove(className);
    }
  });

}

function slideCard(elementIndex) {

  removeClass(cards, "slider--default", elementIndex);
console.log(elementIndex)
  for (let i = 0; i < elementIndex; i++) {

    if (cards[i].classList.contains("slider--next")) {
      cards[i].classList.remove("slider--next");
      cards[i].classList.add("slider--prev");
    }

  }

  for (let i = elementIndex; i < cards.length; i++) {
    if (cards[i].classList.contains("slider--prev")) {
      cards[i].classList.remove("slider--prev");
      cards[i].classList.add("slider--next");
    }
  }

  cards[elementIndex].classList.add("slider--default");
}

function markDot(elementIndex) {
  if (dots[elementIndex].classList.contains("round-slider__active") == false) {
    dots[elementIndex].classList.add("round-slider__active");
    removeClass(dots, "round-slider__active", elementIndex);
  }
}

dots.forEach((element, elementIndex, array) => {
  element.addEventListener("click", () => {
    slideCard(elementIndex);
    markDot(elementIndex);
  })
});


// LARGE SCREEN SLIDER

let slider = document.querySelector(".container-slider")
console.log(slider)
window.addEventListener("load", () => {
  slider.scrollLeft = 122;
})


/* https://htmldom.dev/drag-to-scroll */

let position = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
  slider.classList.add("cursor");

  pos = {
    left: slider.scrollLeft,
    top: slider.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Scroll the element
  slider.scrollTop = pos.top - dy;
  slider.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  slider.classList.remove("cursor");
  slider.style.removeProperty('user-select');

  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
};

// Attach the handler
slider.addEventListener('mousedown', mouseDownHandler);