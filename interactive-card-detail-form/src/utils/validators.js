function validateCardName(value){
    var error="";
    value || ''
    error=(/^[a-zA-Z\s]*$/.test(value) == false) ? "Invalid Name"  : "";  
    return error;
}

function validateNumber(value){
    return Number(value);
}

function validateCardNumber(value){
    
    return (!validateNumber(value)) ? "Wront format, Number only": "";
}

function validateYYandMM(valueYY,valueMM){
    return (valueYY ==''|| valueMM == '') ? "Can't no be blank": "";
}

function editCardNumber(num){
    let sp = Array.from(num).reduce((acc,t,i) => {
        if(i>0 && i%4==0) acc+=" "; 
        acc+=t;
        return acc;
     });
     return sp;
}



export  {
    validateCardName,
    validateCardNumber,
    validateYYandMM,
    editCardNumber
}



