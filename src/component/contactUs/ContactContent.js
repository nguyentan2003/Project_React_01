import React from "react";
import Btn from "../common/headerLogoNav/Btn";
const icon1 = <i class="fa-regular fa-envelope"></i>;
const icon2 = <i class="fa-solid fa-phone"></i>;
const icon3 = <i class="fa-solid fa-location-dot"></i>;
const dataInformation = [
    {
        id: 1,
        icon: icon1,
        info: "2369 Robinson Lane Jackson, OH 45640",
    },
    {
        id: 2,
        icon: icon2,
        info: "(+88) 017 000 00000",
    },
    {
        id: 3,
        icon: icon3,
        info: "Info@example.com",
    },
];

const dataInput = ["Name", "Email", "Subject", "Message"];
function ContactContent() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[40px]">
            <div className="flex items-start justify-center flex-col pl-[50px] rounded-2xl gap-[20px] md:gap-[30px] bg-[#ECECEC]">
                {dataInformation.map((item) => (
                    <div
                        key={item.id}
                        className="flex gap-[20px] text-desc font-semibold"
                    >
                        <div>{item.icon}</div>
                        <span>{item.info}</span>
                    </div>
                ))}
            </div>
            <div className="md:px-[100px] md:py-[50px] flex flex-col gap-[15px] md:gap-[20px]">
                {dataInput.map((item, index) => (
                    <input
                        key={index}
                        placeholder={item}
                        className="md:p-[20px] p-[15px] outline-none rounded-lg border-[1px] text-desc font-semibold"
                    />
                ))}
                <Btn content="Subscribe" />
            </div>
        </div>
    );
}

export default ContactContent;
