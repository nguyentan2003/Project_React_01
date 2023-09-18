import React from "react";
import ItemDestination from "./ItemDestination";
import Btn from "../common/headerLogoNav/Btn";
import HeadTitle from "../common/headTitle/HeadTitle";
function Destinations() {
    return (
        <div>
            <div className="mb-[60px] md:mb-[100px]">
                <HeadTitle
                    title="Destination"
                    desc="Explore Tours By Destinations"
                    bg="#e7d8d8"
                />
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
