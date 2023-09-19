import React from "react";
import imgBlogLef from "./img/blog-left.jfif";
import img1 from "./img/blog-right1.jfif";
import img2 from "./img/blog-right2.jfif";
import img3 from "./img/blog-right3.jpg";
import Btn from "../common/headerLogoNav/Btn";
const dataGeneralBlog = [
    {
        id: 1,
        img: img1,
        title: "7 Tips For Nomads On A Budget Trips",
    },
    {
        id: 2,
        img: img2,
        title: "Luxury travel: the most remote resorts in Philippines",
    },
    {
        id: 3,
        img: img3,
        title: "Top travel destinations the experts say",
    },
];
function GeneralBlog() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            <div>
                <div className="mb-[24px]">
                    <img src={imgBlogLef} className="w-full h-[300px]" />
                </div>
                <h2 className="leading-[70px]">
                    Exploring Argentina and Chile by Bus
                </h2>
            </div>
            <div className="hidden md:block rounded-[10px] bg-[#ECECEC] p-[30px]">
                <div className="mb-[40px] flex gap-[30px]">
                    <input
                        placeholder="Search Blog "
                        className="rounded-[10px] placeholder:text-center outline-none px-[20px] text-[#999] text-[14px]"
                    />
                    <Btn content="Search" />
                </div>
                <div>
                    <h3 className="text-tim font-bold text-[30px] mb-[30px]">
                        Recent Blog
                    </h3>
                    <div className="grid grid-cols-1 gap-[20px]">
                        {dataGeneralBlog.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-[20px]"
                            >
                                <div className="flex-shrink-0">
                                    <img
                                        className="w-[100px] h-[100px] object-cover"
                                        src={item.img}
                                    />
                                </div>
                                <p className="font-semibold text-[20px]">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralBlog;
