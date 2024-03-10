import React, { useEffect, useState } from "react";
import SectionCard from "./SectionCard";
import Form from './Form';
import ConfirmOk from "./ConfirmOk";

function Main (){
  const originalData= {
    cardName:'' ,
    cardNumber:'',
    cardMM:'',
    cardYY:'',
    cardCVC:''
  }
  const [data, setData] = useState(originalData);
  const [formOk, setformOk] = useState(false);
  const [complete, setComplete] = useState(false);

useEffect(() => {
  if(complete){
    setData(originalData);
    setComplete(false);
    setformOk(false);
  }
}, [complete])



  
  
  return(
    <div className=" lg:h-screen lg:grid lg:grid-cols-[repeat(6,16%)] lg:items-center max-w-[1600px]">
		<SectionCard data={data}/>
    {
      !formOk 
      ? <Form data={data} setData={setData} setFormOk={setformOk}/>
      : <ConfirmOk setComplete={setComplete}/> 
    }
		
    </div>
)}

export default Main;