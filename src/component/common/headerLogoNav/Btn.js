import React from "react";

function Btn(props) {
    return (
        <div>
            <a
                href="#!"
                className={`inline-block px-4 py-3  font-semibold   
                   rounded-[8px] ${props.bg || " bg-[#FF7B29]"} 
                   ${props.rounded || "rounded-2"}
                     ${props.onEnd}
                ${props.border} 
                ${props.hover || " btn-transition "}
                ${props.textColor || "text-white"}
                    `}
            >
                {props.content}
            </a>
        </div>
    );
}

export default Btn;
