import React from "react";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jfif";
import img4 from "./img/img4.jfif";
import img5 from "./img/img5.jfif";
import img6 from "./img/img6.jfif";
const dataPageItem = [
    {
        id: 1,
        img: img1,
        address: "Indonesia",
        day: "9 days",
        money: "$6,500",
    },
    {
        id: 2,
        img: img2,
        address: "Thiland",
        day: "9 days",
        money: "$6,500",
    },
    {
        id: 3,
        img: img3,
        address: "Dubai",
        day: "9 days",
        money: "$6,500",
    },
    {
        id: 4,
        img: img4,
        address: "Maldives",
        day: "9 days",
        money: "$6,500",
    },
    {
        id: 5,
        img: img5,
        address: "Dubai",
        day: "9 days",
        money: "$6,500",
    },
    {
        id: 6,
        img: img6,
        address: "Bangladesh",
        day: "9 days",
        money: "$6,500",
    },
];
function PagesItem() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[20px]">
            {dataPageItem.map((item) => (
                <div key={item.id}>
                    <div className="w-full h-[300px] md:h-[350px]">
                        <img
                            src={item.img}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-[30px] flex items-center justify-between">
                        <h2>{item.address}</h2>
                        <div className="flex flex-col">
                            <span className="text-[16px] text-desc">
                                {item.day}
                            </span>
                            <span className="text-[24px] font-semibold text-[#2D3134]">
                                {item.money}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PagesItem;
