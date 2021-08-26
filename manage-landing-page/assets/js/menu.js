const btnMenu = document.querySelector('.menu__button');
const btnClose   = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const menu = document.querySelector('.menu__list');

btnMenu.addEventListener('click', ()=>{
    modal.classList.add('modal--open');
    menu.classList.add('menu__list--active');
    btnMenu.style.visibility='hidden';
    btnClose.classList.add('btn-close--active');
})

btnClose.addEventListener('click', () => {
    modal.classList.remove('modal--open');
    menu.classList.remove('menu__list--active');
    btnClose.classList.remove('btn-close--active');
    btnMenu.style.visibility='visible';

})