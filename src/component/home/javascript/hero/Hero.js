import React from "react";
import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import SearchBar from "../../../common/searchBar/SearchBar";
function Hero() {
    return (
        <div className="mt-[-65px] pt-[70px] ">
            <div className=" flex flex-col md:flex-row">
                <HeroLeft />

                <HeroCenter />

                <HeroRight />
            </div>
            <div className="center mt-[60px]">
                <SearchBar />
            </div>
        </div>
    );
}

export default Hero;
