import React from "react";

function CardBack({cardCVC}) {
    return(
<div className="absolute top-8 right-4 text-medium font-medium text-white  sm:text-lg
                lg:top-0 lg:relative lg:right-0 ">
    <div className="bg-[url('../../images/bg-card-back.png')] bg-no-repeat bg-center bg-cover
                h-[158px] w-[286px] relative sm:h-44 sm:w-80  lg:w-[354px] lg:rounded-md 
                lg:translate-x-[150px]
                lg:mt-8
                xl:h-[200px] xl:w-[380px]
                ">
    <p className="absolute top-[3.9rem] right-9 sm:right-10 sm:top-[4.5rem] xl:top-[5rem]">{cardCVC || "000"}</p>
    </div>
</div>
)}

export default CardBack;