import React from "react";
import ChooseUsItem from "./ChooseUsItem";
import img1 from "./icon/chooseUs-1.svg";
import img2 from "./icon/chooseUs-2.svg";
import img3 from "./icon/chooseUs-3.svg";
import imgChoose from "./img/imgChoose.webp";
const data = [
    {
        id: 1,
        icon: img1,
        title: "We make all the process easy",
        desc: "A galley of type and scrambled it ",
    },
    {
        id: 2,
        icon: img2,
        title: "Private & Customized Tours",
        desc: "It to make a type when an unknown printer took",
    },
    {
        id: 3,
        icon: img3,
        title: "Immigration & Passport Help",
        desc: "A galley of type and scrambled it to make a type when an unknown printer took",
    },
];
function ChooseUs() {
    return (
        <div className="md:flex mt-[60px] md:mt-[140px] md:items-center px-[20px]">
            <div className=" hidden md:block h-[500px] w-[50%]  pr-[130px]">
                <img
                    src={imgChoose}
                    className="rounded-[50px] w-full h-full object-cover"
                />
            </div>
            <div className="content">
                <h2
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className="mb-[15px] "
                >
                    Why Choose Us?
                </h2>
                <span className="desc text-[18px] inline-block  mb-[30px] md:mb-[50px] font-medium">
                    We make all the process easy. Dummy text ever since the is,
                    when an unknown printer took.
                </span>
                <ChooseUsItem data={data} />
            </div>
        </div>
    );
}

export default ChooseUs;
