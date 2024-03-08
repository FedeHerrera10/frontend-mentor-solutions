import React from "react";

function CardFront({cardName,cardNumber,cardMM,cardYY}) {
    let  cardNumberEdit = cardNumber && cardNumber.match(/.{1,4}/g).join(" ") ;
    return(
<div className="absolute -bottom-[34px] left-3 sm:-bottom-[70px] lg:relative lg:bottom-0  ">
    <div className="bg-[url('../../images/bg-card-front.png')] bg-no-repeat bg-center bg-cover
                h-[158px] w-[286px]
                sm:h-44 sm:w-80 
                lg:left-0
                lg:translate-x-[100px]
                lg:w-[354px] lg:rounded-md 
                xl:h-[200px] xl:w-[380px]
                "> 
        <div className="p-3 grid grid-rows-[70px,36px,auto] sm:grid-rows-[70px,50px,auto] h-full font-medium text-white ">
            <img src="../../images/card-logo.svg" className="h-8" alt="card-logo"/>
            <p className="text-md sm:text-lg xl:text-xl ">{cardNumberEdit || "0000 0000 0000 000"}</p>
            <div className="flex justify-between text-sm sm:text-md ">
                <p className="uppercase tracking-widest">{cardName || "Jane Applased"}</p>
                <p className="">{cardMM || "00"} / {cardYY || "00"}</p>
            </div>
        </div>
    </div>
</div>
)}

export default CardFront;