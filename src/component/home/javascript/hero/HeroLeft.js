import React from "react";
import heroIconPlay from "../../icon/hero-iconplay.svg";
import Btn from "../../../common/headerLogoNav/Btn";
function HeroLeft() {
    return (
        <div className=" w-[100%] md:w-[40%] pl-[15px] md:pr-[30px] mb-[40px]">
            <h1
                data-aos="zoom-in-down"
                className="text-[62px] font-bold mb-[20px] pt-[30px] md:pt-[60px] w-full md:w-[450px] leading-[80px] "
            >
                Let's Make Your Best Trip Ever
            </h1>
            <span className="desc text-base w-[350px] inline-block ">
                Plan and book your perfect trip with expert advice, travel tips,
                destination information and inspiration from us.
            </span>
            <div className="flex items-center">
                <Btn content="Discover Now" rounded="rounded-[8px]" />
                <div className="pl-[30px] flex items-center">
                    <img src={heroIconPlay} className="w-[80px] h-[80px]" />
                    <span className="text-[#4D4F56] text-base font-semibold leading-[26px]">
                        Learn More
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HeroLeft;
