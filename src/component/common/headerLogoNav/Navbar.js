import React, { memo, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import clsx from "clsx";
import style from "./css/navbar.module.scss";
// import { navbar } from "./dataNavBar";
function Navbar(props) {
    const navbar = props.data;
    let bien;
    navbar.forEach((item) => {
        if (item.active == true) {
            bien = item.id;
        }
    });
    console.log(bien);
    const [active, setActive] = useState(bien);
    const handleActive = (id) => {
        navbar[active].active = false;
        navbar[id].active = true;
        setActive(id);
    };
    return (
        <nav className="hidden md:inline-block navbar">
            <ul className="flex gap-x-2">
                {navbar.map((item) => (
                    <li
                        key={item.id}
                        className={`py-2 
                        ${item.id === active ? clsx(style.active) : ""}`}
                    >
                        <Link
                            to={`/${item.name == "Home" ? "" : item.name}`}
                            className={`px-4 py-2  rounded text-desc font-[600]`}
                            onClick={() => handleActive(item.id)}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default memo(Navbar);
