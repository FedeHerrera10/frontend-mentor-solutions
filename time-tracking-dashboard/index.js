const elementsTime = document.querySelectorAll('.card__data-time');
const elementsPrevious = document.querySelectorAll('.card__data-elapsed');
const buttons = document.querySelectorAll('.btn-card');
const divButtons = document.querySelector('.card__out-list');

let arrInfo=[];

/* Reload Information */

const reloadInfo = (type) =>{

  arrInfo[0].forEach((element,index) => {
    elementsTime[index].textContent=`${element.timeframes[type].current}hr`;
    elementsPrevious[index].textContent=`Last Week - ${element.timeframes[type].previous}hr`;
  });
}

/*Get data from data.json*/
const fetchJSONData = async (URL) => {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    arrInfo.push(data);
    console.log(arrInfo);
    reloadInfo('daily');
  } catch(err) {
    console.log(err)
    console.log('Could not fetch JSON data from data.json file!')
  }
}

const removeActiveButtons = () => {
  [].forEach.call(buttons, function(el) {
      el.classList.remove('btn-active');
  });
}

/* AddEvents from buttons */

divButtons.addEventListener('click', e => {
  const target = e.target;
  if(target.classList.contains('btn-card')){
    removeActiveButtons();
    e.target.classList.add('btn-active');
    reloadInfo(e.target.textContent.toLowerCase());
  }
})


fetchJSONData('data.json');




