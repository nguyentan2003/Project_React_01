import React from "react";
import heroIcon1 from "../../icon/hero-icon1.svg";
import heroIcon2 from "../../icon/hero-icon2.svg";
import heroIcon3 from "../../icon/hero-icon3.svg";

const dataHeroRight = [
    {
        id: 1,
        icon: heroIcon1,
        number: "12",
        string: "Years Experiences",
    },
    {
        id: 2,
        icon: heroIcon2,
        number: "29",
        string: "Awards Gained",
    },
    {
        id: 3,
        icon: heroIcon3,
        number: "725+",
        string: "Property Build",
    },
];
function HeroRight() {
    return (
        <div>
            <ul className="hidden md:flex flex-col gap-y-[30px] justify-center items-start h-[500px]">
                {dataHeroRight.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                        <img
                            src={item.icon}
                            className=" inline-block p-0 w-[60px] h-[60px]"
                        />
                        <div className="flex flex-col">
                            <span className="text-[30px] text-[#0A192D] font-[800] leading-[40px]">
                                {item.number}
                            </span>
                            <span className="text-[14px] text-[#777F8B] font-[400] leading-[20px]">
                                {item.string}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeroRight;
