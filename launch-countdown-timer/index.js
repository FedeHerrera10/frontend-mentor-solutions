
let countDownDate = new Date("Apr 12, 2022 15:37:25").getTime();
const daysElement = document.querySelector('#day');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');






let x = setInterval(function() {


let now = new Date().getTime();



  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;




  if (distance < 0) {
    clearInterval(x);
    daysElement.textContent = '0';
    hoursElement.textContent = '0';
    minutesElement.textContent = '0';
    secondsElement.textContent = '0';
  }
}, 1000);
