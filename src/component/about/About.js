import React from "react";
import HeaderAbout from "./headerAbout/HeaderAbout";
import OperaterAbout from "./operaterAbout/OperaterAbout";
import ChooseUs from "../common/ChooseUs/ChooseUs";
import GuidesAbout from "./guidesAbout/GuidesAbout";

function About() {
    return (
        <div>
            <HeaderAbout />
            <main className="md:max-w-[1170px] md:mx-auto px-[20px]">
                <div className="mt-[60px] md:mt-[140px] operater">
                    <OperaterAbout />
                </div>
                <div className="mb-[60px] md:mb-[140px]">
                    <ChooseUs />
                </div>
                <div>
                    <GuidesAbout />
                </div>
            </main>
        </div>
    );
}

export default About;
