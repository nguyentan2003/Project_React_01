import React from "react";
import "./css/destination.css";
import icon1 from "./img/img1.jpg";
import icon2 from "./img/img2.jpg";
import icon3 from "./img/img3.jpg";
import icon4 from "./img/img4.jpg";
import icon5 from "./img/img5.jpg";
import icon6 from "./img/img6.jpg";
import imgItem1 from "./img/imgItem1.jpg";
import imgItem2 from "./img/imgItem2.jpg";
import imgItem3 from "./img/imgItem3.jpg";
import imgItem4 from "./img/imgItem4.jpg";
import imgItem5 from "./img/imgItem5.jpg";
import imgItem6 from "./img/imgItem6.jpg";
import Btn from "../../../common/headerLogoNav/Btn";
import FloatingDestination from "./FloatingDestination";
export const dataDestination = [
    {
        id: 0,
        title: "Vientam",
        numberItem: "1.5",
        desc: "Sầm Sơn",
        img: icon1,
    },
    {
        id: 1,
        title: "Vientam",
        numberItem: "2.5",
        desc: "Tam Đảo",
        img: icon2,
    },
    {
        id: 2,
        title: "Vientam",
        numberItem: "3.5",
        desc: "Hải Phòng",
        img: icon3,
    },
    {
        id: 3,
        title: "Vientam",
        numberItem: "4.5",
        desc: "Phú Quốc",
        img: icon4,
    },
    {
        id: 4,
        title: "Vientam",
        numberItem: "5.5",
        desc: "Nha Trang",
        img: icon5,
    },
    {
        id: 5,
        title: "Vientam",
        numberItem: "6.5",
        desc: "Bà Rịa Vũng Tàu",
        img: icon6,
    },
];
function Destination() {
    return (
        <div className="mt-[60px] md:mt-[140px] destination">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[20px] md:gap-[30px] mb-[40px]">
                <div className="">
                    <h2
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        className="mb-[10px] md:mb-[16px]"
                    >
                        Top Destination
                    </h2>
                    <span className="desc">
                        Sost Brilliant reasons Entrada should be your
                        one-stop-shop!
                    </span>
                </div>
                <Btn content="See all destination" />
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] md:h-[530px]">
                {/* left */}
                <div className="md:w-[calc(55%-15px)] w-full flex gap-[20px] md:gap-[30px] h-[260px] md:h-full">
                    <div className="md:w-[calc(45%-15px)] w-[calc(45%-10px)] h-full flex flex-col gap-[20px] md:gap-[30px]">
                        <div className="relative md:h-[calc(50%-15px)] h-[calc(50%-10px)] w-full ">
                            <img className="" src={imgItem1} />
                            <FloatingDestination
                                idItem={dataDestination[0].id}
                            />
                        </div>
                        <div className="relative md:h-[calc(50%-15px)] h-[calc(50%-10px)] w-full">
                            <img className="" src={imgItem2} />
                            <FloatingDestination
                                idItem={dataDestination[1].id}
                            />
                        </div>
                    </div>
                    <div className="relative h-full md:w-[calc(55%-15px)] w-[calc(55%-10px)]">
                        <img className="" src={imgItem3} />
                        <FloatingDestination idItem={dataDestination[2].id} />
                    </div>
                </div>
                {/* right */}
                <div className="md:md:w-[calc(45%-15px)] w-full h-[260px] md:h-full flex flex-col gap-[20px] md:gap-[30px]">
                    <div className="relative w-full md:h-[calc(45%-15px)] h-[calc(50%-10px)]">
                        <img className="" src={imgItem4} />
                        <FloatingDestination idItem={dataDestination[3].id} />
                    </div>
                    <div className="md:h-[calc(55%-15px)] h-[calc(50%-10px)] w-full flex flex-row gap-[20px] md:gap-[30px]">
                        <div className="relative md:w-[calc(45%-15px)] w-[calc(45%-10px)] h-full">
                            <img className="" src={imgItem5} />
                            <FloatingDestination
                                idItem={dataDestination[4].id}
                            />
                        </div>
                        <div className="relative md:w-[calc(55%-15px)] w-[calc(55%-10px)] h-full">
                            <img className="" src={imgItem6} />
                            <FloatingDestination
                                idItem={dataDestination[5].id}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
