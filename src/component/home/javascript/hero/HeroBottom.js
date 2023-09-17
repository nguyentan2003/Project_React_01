import React from "react";
import style from "../../css/heroBottom.module.scss";
import clsx from "clsx";
const base = [
    {
        id: 0,
        title: "Location",
        desc: "Bali, Indonesia",
        icon: "fa-solid fa-check",
    },
    {
        id: 1,
        title: "City",
        desc: "Prambanan",
        icon: "fa-solid fa-check",
    },
    {
        id: 2,
        title: "Guest",
        desc: "8 Persons",
        icon: `fa-solid fa-check`,
    },
];
function HeroBottom() {
    return (
        <div
            className={`${clsx(
                style.heroBottom
            )} md:ml-[250px] md:w-[650px]  flex md:flex-row flex-col py-[20px] md:py-0 center`}
        >
            <ul className=" flex justify-start md:center md:flex-row flex-col">
                {base.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-start items-start flex-col px-[20px] md:px-[30px] py-[20px]"
                    >
                        <h4 className="text-[#0A192D] font-[700] leading-[16px] mb-[16px] md:text-base text-[22px]">
                            {item.title}
                        </h4>
                        <div className="center">
                            <span className="text-[#697280] mr-[8px] md:text-[14px] text-[18px] font-[500]">
                                {item.desc}
                            </span>
                            <div>
                                <i className={`${item.icon} text-[8px]`}></i>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <a
                href="#!"
                className="center px-8 py-4 md:px-[14px] md:py-[10px] bg-[#132742] rounded-[10px] md:rounded-[8px] btn-transition"
            >
                <i className="fa-solid fa-magnifying-glass text-white mr-[10px] font-[600] text-[18px]"></i>
                <span className="text-white font-[600] text-[18px]">
                    Search
                </span>
            </a>
        </div>
    );
}

export default HeroBottom;
