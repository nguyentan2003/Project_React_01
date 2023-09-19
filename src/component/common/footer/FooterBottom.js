import React, { useEffect } from "react";
import Logo from "../headerLogoNav/Logo";
import style from "./css/footerBottom.module.scss";
import clsx from "clsx";
import Navbar from "../headerLogoNav/Navbar";
import { navbar } from "../headerLogoNav/dataNavBar";
import { navbarBottom } from "../headerLogoNav/dataNavBar";
const data = [
    {
        id: 1,
        icon: "fa-brands fa-facebook",
    },
    {
        id: 2,
        icon: "fa-brands fa-square-instagram",
    },
    {
        id: 3,
        icon: "fa-brands fa-twitter",
    },
];
function FooterBottom() {
    return (
        <div className="flex justify-between">
            <Logo />
            <div className="flex gap-3 justify-items-center">
                {data.map((item) => (
                    <a
                        href="#!"
                        key={item.id}
                        className={`${clsx(style.icon)} center`}
                    >
                        <i className={`${item.icon} text-[#999] `}></i>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default FooterBottom;
