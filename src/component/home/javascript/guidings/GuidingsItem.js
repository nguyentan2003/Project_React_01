import React, { useState } from "react";
import "./css/guidingItem.scss";
import img1 from "./img/guidingItem1.jpg";
import img2 from "./img/guidingItem2.jpg";
import img3 from "./img/guidingItem3.jpg";
import img4 from "./img/guidingItem4.jpg";
import Item from "./Item";
const data = [
    {
        id: 1,
        img: img1,
        title: "The real voyage does not consist in seeking new",
        desc: "Excited him now natural saw passage offices you minuter. At by asked being court hopes.",
        time: "Jun 1, 2021",
    },
    {
        id: 2,
        img: img2,
        title: "Mountains is always right destination.",
        desc: "Farther so friends am to detract forbade",
        time: "Jun 2, 2022",
    },
    {
        id: 3,
        img: img3,
        title: "Here Our's Life is either a daring adventure.",
        desc: "One of the programs is Save Our I have personally.",
        time: "Jun 3, 2023",
    },
    {
        id: 4,
        img: img4,
        title: "Here Our's Life is either a daring adventure.",
        desc: "life is either a daring adventure or it's nothing",
        time: "Jun 4, 2024",
    },
];
function GuidingsItem() {
    const [item1, setItem1] = useState(1);
    const [item2, setItem2] = useState(2);
    const [item3, setItem3] = useState(3);
    const [item4, setItem4] = useState(4);
    return (
        <div className="md:flex md:gap-[60px] mt-[60px]">
            <div className="md:grow cursor-pointer  mb-[30px] ">
                <div className="w-full md:h-[500px] h-[300px] md:mb-10 mb-4">
                    <img src={data[item1 - 1].img} className="img" />
                </div>
                <div className="md:flex md:justify-between">
                    <div className="">
                        <h3 className="md:mb-3 title">
                            {data[item1 - 1].title}
                        </h3>
                        <p className="desc">{data[item1 - 1].desc}</p>
                    </div>
                    <span className="time pl-5">{data[item1 - 1].time}</span>
                </div>
            </div>
            <div className="md:grow grid grid-cols-1 gap-[30px]">
                <Item data={data[item2 - 1]} />
                <Item data={data[item3 - 1]} />
                <Item data={data[item4 - 1]} />
            </div>
        </div>
    );
}

export default GuidingsItem;
