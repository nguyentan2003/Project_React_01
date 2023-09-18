import React from "react";
import OperaterAbout from "./operaterAbout/OperaterAbout";
import ChooseUs from "../common/ChooseUs/ChooseUs";
import GuidesAbout from "./guidesAbout/GuidesAbout";
import HeadTitle from "../common/headTitle/HeadTitle";

function About() {
    return (
        <div>
            <HeadTitle
                title="About Us"
                desc="Find Out More Information"
                bg="bg-[#f1f1f1]"
            />
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
