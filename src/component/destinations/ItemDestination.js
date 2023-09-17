import React from "react";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img15 from "./img/img15.jpg";
import img3 from "./img/img3.jfif";
import img4 from "./img/img4.jfif";
import img5 from "./img/img5.jfif";
import img6 from "./img/img6.jfif";
import img7 from "./img/img7.jfif";
import img8 from "./img/img8.jfif";
import img9 from "./img/img9.jfif";
import img10 from "./img/img10.jfif";
import img11 from "./img/img11.jfif";
import img12 from "./img/img12.jfif";
import img13 from "./img/img13.jfif";
import img14 from "./img/img14.jfif";
import img16 from "./img/img16.jfif";
const dataDestinationItems = [
    {
        id: 1,
        img: img1,
        address: "Switzerland",
    },
    {
        id: 2,
        img: img2,
        address: "Maldives",
    },
    {
        id: 3,
        img: img3,
        address: "Indonesia",
    },
    {
        id: 4,
        img: img4,
        address: "Bangladesh",
    },
    {
        id: 5,
        img: img5,
        address: "Thailand",
    },
    {
        id: 6,
        img: img6,
        address: "Turkey",
    },
    {
        id: 7,
        img: img7,
        address: "Agentina",
    },
    {
        id: 8,
        img: img8,
        address: "Brazil",
    },
    {
        id: 9,
        img: img9,
        address: "Morocco",
    },
    {
        id: 10,
        img: img10,
        address: "Dubai",
    },
    {
        id: 11,
        img: img11,
        address: "Ecuador",
    },
    {
        id: 12,
        img: img12,
        address: "Colombia",
    },
    {
        id: 13,
        img: img13,
        address: "Việt Nam",
    },
    {
        id: 14,
        img: img14,
        address: "India",
    },
    {
        id: 15,
        img: img15,
        address: "American",
    },
    {
        id: 16,
        img: img16,
        address: "Canada",
    },
];
function ItemDestination() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] md:-gap[30px]">
            {dataDestinationItems.map((item) => (
                <div>
                    <div className="w-full h-[200px] mb-[20px]">
                        <img
                            src={item.img}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-bold text-[20px] text-[#2D3134]">
                        {item.address}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default ItemDestination;
