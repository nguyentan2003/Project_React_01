import React from "react";
import FooterBottom from "./FooterBottom";

const dataFooter = [
    {
        id: 1,
        title: "Resources",
        content: ["Download", "Help Center", "Guide Book", "App Directory"],
    },
    {
        id: 2,
        title: "Travellers",
        content: [
            "Why Travellers",
            "Enterprice",
            "Customer Stories",
            " Instagram post",
        ],
    },
    {
        id: 3,
        title: "Company",
        content: ["Travelling", "About Locato", "Success", "Information"],
    },
    {
        id: 4,
        title: "Get in Touch",
        desc: "Feel free to get in touch with us vai email",
        email: "tan19052003@gmail.com",
    },
];
function Footer() {
    return (
        <div className="mb-[50px]">
            <div className=" grid md:grid-cols-4 grid-cols-2 mb-[50px]">
                {dataFooter.map((item) => (
                    <div key={item.id}>
                        <h3 className="text-[#020000] font-[600] text-[18px] mb-[10px]">
                            {item.title}
                        </h3>
                        <ul className="py-[10px]">
                            {item.content &&
                                item.content.map((child, index) => (
                                    <li key={index} className="hover:underline">
                                        {" "}
                                        <a
                                            href="#!"
                                            className="desc text-[13px] font-[600] leading-[38px] hover:text-[#222] cursor-pointer"
                                        >
                                            {child}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                        {item.desc && (
                            <span className="desc text-[13px] font-[600] leading-[25px] mb-[30px] inline-block md:w-[200px]">
                                {item.desc}
                            </span>
                        )}
                        {item.email && (
                            <span className=" font-[600] text-[16px] inline-block text-[#31C3E0] cursor-pointer">
                                {item.email}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <FooterBottom />
        </div>
    );
}

export default Footer;
