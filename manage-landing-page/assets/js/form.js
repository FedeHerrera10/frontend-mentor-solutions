const form = document.querySelector('.form');
const email = document.querySelector('#email');
const error = document.querySelector('.error');

form.addEventListener('submit' , (e) => {
    e.preventDefault(); 
    if(email.value.trim() == ''){   
        error.style.display='block';
        return;
    }
    error.style.display='none';
    return;
})