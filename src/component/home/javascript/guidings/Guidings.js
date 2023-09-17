import React from "react";
import "./css/guiding.scss";
import GuidingsItem from "./GuidingsItem";
function Guidings() {
    return (
        <div className="md:mt-[140px] mt-60px">
            <div className="md:mb-[60px] mb-30px">
                <h2
                    className="md:mb-5 mb-5 text-center "
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                >
                    Articles & Travel Guidings
                </h2>
                <p className=" desc text-center mx-auto  md:w-[730px] w-100% md:mb-[60px]">
                    Travel has helped us to understand the meaning of life and
                    it has helped us become better people. Each time we travel,
                    we see the world with new eyes.
                </p>
                <div className={`decor`}></div>
            </div>
            <GuidingsItem />
        </div>
    );
}

export default Guidings;
