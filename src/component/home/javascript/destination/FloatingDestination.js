import React from "react";
import { dataDestination } from "./Destination";
function FloatingDestination(props) {
    const number = Number(props.idItem);
    return (
        <>
            <span className="absolute top-5 left-6 bg-white inline-block px-[10px] py-[5px] rounded-[15px] font-semibold text-[#FF7B29]">
                {dataDestination[number].numberItem}
            </span>
            <div className="absolute bottom-5 left-6 text-white  ">
                <span className=" font-bold text-[24px] mb-1 block">
                    {dataDestination[number].title}
                </span>
                <span className="font-medium ">
                    {dataDestination[number].desc}
                </span>
            </div>
        </>
    );
}

export default FloatingDestination;
