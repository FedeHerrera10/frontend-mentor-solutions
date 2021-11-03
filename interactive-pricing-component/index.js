const btnSwitch = document.querySelector('#btn-switch');
const spanSwitch = document.querySelector('#span-switch');
const view = document.querySelector('.pricing__views-number');
const price = document.querySelector('.pricing__permonth-number');
const slider = document.querySelector('.pricing-range');

let active = false;
let views = 100;
let pricePerMount = 16;

view.textContent=`${views}K Pageviews`;
price.innerHTML=`$${pricePerMount.toFixed(2)}<span>/month</span>`




btnSwitch.addEventListener('click', ()=> {

  active=!active;
  if(active){
    spanSwitch.style.transform='translateX(10px)';
    btnSwitch.style.backgroundColor='#10d5c2';
  }else{
    spanSwitch.style.transform='translateX(-10px)';
    btnSwitch.style.backgroundColor='#cdd7ee';
  }

})


// Making slider work
function setBar(value) {

  slider.style.setProperty("--value", value);
}

setBar(50);
slider.style.setProperty("--value", 50);

function printingPrice(amount) {
  if (active) {
    price.innerHTML=`$${amount - amount * 0.25}<span>/month</span>`
  } else {
    price.innerHTML = `$${amount}<span>/month</span>`;
  }
}

function printPageViews(view) {
  view.textContent = `${view}k pagesview`;
}

slider.oninput = function () {

if (Number(this.value) === 20) {
    printPageViews(10);
    printingPrice(8);
    setBar(0);
  } else if (Number(this.value) === 40) {
    printPageViews(50);
    printingPrice(12);
    setBar(30);
  } else if (Number(this.value) === 60) {
    printPageViews(100);
    printingPrice(16);
    setBar(50);
  } else if (Number(this.value) === 80) {
    printPageViews(500);
    printingPrice(24);
    setBar(70);
  } else if (Number(this.value) === 100) {
    view.textContent = "1M pagesviews";
    printingPrice(36);
    setBar(100);
  }
};

// Refreshing page on button click
function refreshPage() {
  window.location.reload();
}

// Event handler
btnSwitch.addEventListener("click", ()=>{
  slider.oninput();
});
slider.addEventListener("click", function () {
  slider.oninput();
});