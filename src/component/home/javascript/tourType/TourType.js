import React from "react";
import icon1 from "./icon/icon1.svg";
import icon2 from "./icon/icon2.svg";
import icon3 from "./icon/icon3.svg";
import icon4 from "./icon/icon4.svg";
const dataTourType = [
    {
        id: 1,
        icon: icon1,
        titile: "City Tours",
        desc: "5 Tours- From  ",
        money: "550$",
    },
    {
        id: 2,
        icon: icon2,
        titile: "Beaches",
        desc: "10 Tours- From   ",
        money: "250$",
    },
    {
        id: 3,
        icon: icon3,
        titile: "Museum Tours",
        desc: "5 Tours- From    ",
        money: "399$",
    },
    {
        id: 4,
        icon: icon4,
        titile: "Cruises",
        desc: "8 Tours- From    ",
        money: "850$",
    },
];
function TourType() {
    return (
        <div className=" my-[80px] md:my-[140px]">
            <h2
                className="center"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
            >
                Tour Type
            </h2>
            <ul className="md:mt-[60px] mt-[40px] grid grid-cols-1 md:grid-cols-4 gap-[30px] md:gap-[30px]">
                {dataTourType.map((item) => (
                    <li
                        key={item.id}
                        className=" center flex-col py-[40px] border-[#ECECEC] border-[1px] rounded-[12px]
                         hover:bg-[#e6e5e5] cursor-pointer hover:opacity-90"
                    >
                        <img
                            src={item.icon}
                            className={`inline-block mb-[28px] `}
                        />
                        <h3
                            className={`mb-[18px] font-semibold text-[#2D3134] text-[25px]
                            ${item.id == 1 ? "mt-[-30px]" : ""}`}
                        >
                            {item.titile}
                        </h3>
                        <div>
                            <span className="desc">{item.desc}</span>
                            <span className="font-semibold text-[#FF7B29]">
                                {item.money}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TourType;
