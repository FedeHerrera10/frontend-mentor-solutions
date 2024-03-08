import React,{useState} from 'react'
import {validateCardName,validateYYandMM,validateCardNumber} from '../utils/validators.js'


function htmlForm({data,setData,setFormOk}) {
    let classStyleInput = "border-light_grayish_violet border rounded-md p-1 focus:outline-none focus:border focus:border-violet-600 text-sm";
    const classStyleLabel ="font-medium text-very_dark_violet mb-1 text-[12px] uppercase";
    
    

    const [errors, setErrors] = useState({
        errorName:'' ,
        errorNumber:'',
        errorYM:'',
        errorCVC:''
    })

    

    function handleChange(e) {
        var value = e.target.value;
    
        if(value !== undefined){
            setData({
                ...data ,[e.target.name]:e.target.value
            })
        }
    }


    function handleSubmit(e){
        e.preventDefault()
        validateData();
    }


    function validateData(){
        let er = {};
        var errorName=validateCardName(data.cardName);
        var errorNumber = validateCardNumber(data.cardNumber || '');
        var errorYM = validateYYandMM(data.cardMM,data.cardYY);
        var errorCVC = (!data.cardCVC || data.cardCVC.length ==0) ? "can't not blank" :"";
        er={errorName,errorNumber,errorYM,errorCVC}
        setErrors(er)
        console.log(er);

        if(Object.values(er).every(valor => typeof valor === 'string' && valor.trim() === '')){{
            setFormOk(true);
        }}
    }

    

  return (
    <form className="mt-12 w-4/5 mx-auto mb-1 max-w-[400px] 
        sm:mt-28 lg:mt-0 lg:col-span-4" 
        onSubmit={handleSubmit}
    >
    
        
<div className="flex flex-col mb-4">
    
    <label htmlFor="cardName" className={classStyleLabel}>Card Holdername</label>
    <input type="text" name="cardName" id="cardName" className={!errors.errorName ?classStyleInput :classStyleInput+" border-red-500"} 
    placeholder="e.g Jane Applased" 
    maxLength={23}
    onChange={handleChange}
    value={data.cardName}
    />
    {<small className= {!errors.errorName ? 'text-red-500 invisible' : 'text-red-500 visible'}>{errors.errorName || 'Error'}</small>}
</div>

<div className="flex flex-col mb-4"> 
    <label htmlFor="" className={classStyleLabel}>Card Number</label>
    <input type="number" name="cardNumber" id="" className={!errors.errorNumber ?classStyleInput :classStyleInput+" border-red-500"} 
     placeholder="e.g 1234 45678 9123 0000"
     
    onChange={handleChange}
    value={data.cardNumber}
    />
    {<small className= {!errors.errorNumber ? 'text-red-500 invisible' : 'text-red-500 visible'}>{errors.errorNumber || 'Error'}</small>}
</div>
<div className="flex ">
    
    <div className="flex flex-col">
        <label htmlFor="" className={classStyleLabel}>Exp. Date (MM/YY) </label>
       <div className="grid grid-cols-2 gap-1 ">
         <input type="number" name="cardYY" id="" 
         className={!errors.errorYM ?classStyleInput :classStyleInput+" border-red-500"} 
         maxLength={2} placeholder="MM" 
         onChange={handleChange}
         value={data.cardYY}
         /> 
        <input type="number" name="cardMM" id="" 
        className={!errors.errorYM ?classStyleInput :classStyleInput+" border-red-500"} 
        maxLength={2}
        placeholder="e.g YY" 
        onChange={handleChange}
        value={data.cardMM}
        />
        
        {<small className= {!errors.errorYM ? 'text-red-500 invisible' : 'text-red-500 visible col-span-2'}>{errors.errorYM || 'Error'}</small>}
       </div>
    </div>
    
    <div className="flex flex-col ml-1 ">
        <label htmlFor="" className={classStyleLabel} >cvc</label>
        <input type="number" name="cardCVC" id="" 
        className={!errors.errorCVC ?classStyleInput :classStyleInput+" border-red-500"} 
        maxLength={3}
        placeholder="e.g 123" 
        onChange={handleChange}
        value={data.cardCVC}
        />
       {<small className= {!errors.errorCVC ? 'text-red-500 hidden' : 'text-red-500 visible'}>{errors.errorCVC || 'Error'}</small>}
    </div>
</div>

 <input type="submit" value="Confirm" className="p-2 w-full bg-very_dark_violet  rounded-md mt-5 text-slate-100
 hover:bg-violet-700 hover:transition-all cursor-pointer
 " />   

    </form>
  )
}

export default htmlForm;


