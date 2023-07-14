"use strict";
const divElement = document.querySelector('#graphic');


let data = [];

const  getData = async () => {
    const result = await fetch('../data.json');
    data = await result.json();    
    populateDiv();
}

const populateDiv = ()=>{

    data.map(d => {
        const r = (d.amount * 150) / 52.36 
        const element = document.getElementById(`${d.day}`)
        element.style.height=`${r}px`
        element.style.transitionDuration = `${2}s`;
        if(r !==150){
            element.style.backgroundColor='#ec755d'    
        }else{
            element.style.backgroundColor='#76b5b6'
        }
        element.dataset.amount = `$${d.amount}`;
        
    })

}



 getData();

