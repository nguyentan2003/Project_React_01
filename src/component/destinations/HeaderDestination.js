import React from "react";

function HeaderDestination() {
    return (
        <div className="bg-[#f1f1f1] h-[100vh] center flex-col">
            <h1
                className="mb-[20px] text-[#FF7B29] text-[130px] leading-[100px]"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
            >
                Destinations
            </h1>
            <span className="desc">Explore Tours By Destinations</span>
        </div>
    );
}

export default HeaderDestination;
