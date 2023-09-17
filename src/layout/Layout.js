import React, { useEffect } from "react";
import Logo from "../component/common/headerLogoNav/Logo";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/common/headerLogoNav/Navbar";
import Btn from "../component/common/headerLogoNav/Btn";
import { navbar } from "../component/common/headerLogoNav/dataNavBar";
import Footer from "../component/common/footer/Footer";
function Layout() {
    return (
        <div className=" ">
            <header className="  z-40 pb-3 pt-4  fixed top-[-4px] right-0 left-0  ">
                <div className="flex justify-between items-center md:max-w-[1170px] md:mx-auto px-[20px] ">
                    <Logo />
                    <Link to="/">
                        <Navbar data={navbar} />
                    </Link>
                    <Link to="/Contact">
                        <Btn
                            content="Contact Us"
                            bg="bg-[#31C3E0]"
                            rounded="rounded-[8px]"
                            onEnd="hidden md:inline-block"
                        />
                    </Link>
                    <div className=" md:hidden flex w-[30px] h-[30px] justify-center items-center cursor-pointer">
                        <i className="fa-solid fa-bars-staggered text-[25px]"></i>
                    </div>
                </div>
            </header>
            <main className="">
                <Outlet />
            </main>
            <footer className="mt-[140px] md:max-w-[1170px] md:mx-auto px-[20px]">
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
