import React from "react";

function HeadTitle(props) {
    return (
        <div
            className={`${props.bg} ${
                props.height ? props.height : "h-[100vh]"
            }  center flex-col `}
        >
            <h1
                className="md:text-[130px] text-[80px] leading-[140px] text-[#FF7B29] mb-[20px]"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
            >
                {props.title}
            </h1>
            <p className="desc">{props.desc}</p>
        </div>
    );
}

export default HeadTitle;
