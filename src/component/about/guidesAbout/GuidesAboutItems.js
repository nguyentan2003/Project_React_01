import React from "react";
import imgItem1 from "./img/imgItem1.jpg";
import imgItem2 from "./img/imgItem2.jpg";
import imgItem3 from "./img/imgItem3.jpg";
const dataGuidesAboutItems = [
    {
        id: 1,
        img: imgItem1,
        name: "Hasan Ahmed",
        position: "Adventure master",
    },
    {
        id: 2,
        img: imgItem2,
        name: "Mosqur Alam",
        position: "Adventure master",
    },
    {
        id: 3,
        img: imgItem3,
        name: "Foysal Khan",
        position: "Adventure master",
    },
];
function GuidesAboutItems() {
    return (
        <div className="grid md:grid-cols-3  grid-cols-1  gap-[20px] md:gap-[30px]">
            {dataGuidesAboutItems.map((item) => (
                <div key={item.id} className="">
                    <div className="mb-5 w-full h-[350px] object-cover">
                        <img src={item.img} className="w-full h-full" />
                    </div>
                    <div className="mb-1 center justify-between">
                        <h3 className=" text-lg font-bold">{item.name}</h3>
                        <div className="text-[16px] gap-2 flex text-[#999]">
                            <i className="fa-brands fa-facebook-f cursor-pointer"></i>
                            <i className="fa-brands fa-twitter cursor-pointer"></i>
                            <i className="fa-brands fa-instagram cursor-pointer"></i>
                        </div>
                    </div>
                    <p className="desc text-sm">{item.position}</p>
                </div>
            ))}
        </div>
    );
}

export default GuidesAboutItems;
