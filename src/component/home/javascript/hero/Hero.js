import React from "react";
import HeroRight from "./HeroRight";
import HeroBottom from "./HeroBottom";
import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
function Hero() {
    return (
        <div className="mt-[-65px] pt-[70px] ">
            <div className=" flex flex-col md:flex-row">
                <HeroLeft />

                <HeroCenter />

                <HeroRight />
            </div>
            <HeroBottom />
        </div>
    );
}

export default Hero;
