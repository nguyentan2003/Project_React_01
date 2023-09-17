import React from "react";
import HeaderDestination from "./HeaderDestination";
import ItemDestination from "./ItemDestination";
import Btn from "../common/headerLogoNav/Btn";
function Destinations() {
    return (
        <div>
            <div className="mb-[60px] md:mb-[140px]">
                <HeaderDestination />
            </div>
            <div className="md:max-w-[1170px] md:mx-auto px-[20px] mb-[60px] md:mb-[100px]">
                <ItemDestination />
            </div>
            <div className="center ">
                <Btn content="See More" />
            </div>
        </div>
    );
}

export default Destinations;
