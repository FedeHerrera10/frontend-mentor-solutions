import React from "react";

function ConfirmOk ({setComplete}) {
    return (
        <div className="flex flex-col mt-14 justify-items-center items-center sm:mt-24 lg:mt-0 lg:col-span-4 lg:translate-x-[40px]">
            <img src="../../images/icon-complete.svg" alt="complete-logo" width={80} height={80}/>
            <p className="text-4xl uppercase mt-11 mb-6">Thank you!</p>
            <p className="opacity-50">We've added your card details</p>
            <button className="mt-11 p-2 w-4/5 bg-very_dark_violet  rounded-md  text-slate-100
            hover:bg-violet-700 hover:transition-all cursor-pointer max-w-[380px]"
            onClick={()=>setComplete(true)}
            >Continue</button>
        </div>
    )
}

export default ConfirmOk;