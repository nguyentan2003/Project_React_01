import React from "react";
import Btn from "../../../common/headerLogoNav/Btn";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import BestTourItem from "./BestTourItem";
const dataBestTour = [
    {
        id: 1,
        img: img1,
        price: "$150/day",
        name: "Cairns Travel",
        address: "Calrns QLD, Australia",
        timeStart: "Oct 28, 2021",
        longTime: "5 Days",
    },
    {
        id: 2,
        img: img2,
        price: "$110/day",
        name: "Orlando Travel",
        address: "Orlando, FL, USA",
        timeStart: "Jul 30,2021",
        longTime: "3 Days",
    },
    {
        id: 3,
        img: img3,
        price: "$136/day",
        name: "Malaysia ",
        address: "Malaisia",
        timeStart: "Jul 29, 2021",
        longTime: "10 Days",
    },
];
function BestTour() {
    return (
        <div className="mt-[60px] md:mt-[140px]">
            <div className="md:flex justify-between items-center mb-[50px] md:mb-[20px]">
                <div className="md:mb-[20px] mb-[40px]">
                    <h2
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        className=" mb-[15px]"
                    >
                        Our Best Tour
                    </h2>
                    <span className="desc md:inline-block md:w-[500px]">
                        Plan and book your perfect trip with expert advice,
                        travel tips, destination information and inspiration
                        from us.
                    </span>
                </div>
                <Btn content="See all tours" />
            </div>
            <BestTourItem data={dataBestTour} />
        </div>
    );
}

export default BestTour;
