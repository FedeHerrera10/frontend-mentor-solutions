import React from "react"
import CardBack from './CardBack';
import CardFront from './CardFront';

function SectionCard ({data}) {
    const {cardName,cardNumber,cardMM,cardYY,cardCVC} = data;
    return(
    <section className=" h-[249px] bg-[url('../../images/bg-main-mobile.png')] 
    bg-no-repeat bg-center bg-cover relative 
    lg:bg-[url('../../images/bg-main-desktop.png')] lg:h-full lg:col-span-2  

    ">
<div className="max-w-[375px] h-full relative mx-auto lg:flex lg:justify-center lg:flex-col-reverse  
 
">
    <CardBack cardCVC={cardCVC}/>
    <CardFront cardName={cardName} cardNumber={cardNumber} cardMM={cardMM} cardYY={cardYY}/>
    
</div>
</section>
)}

export default SectionCard;
