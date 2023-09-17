import React, { useRef } from "react";
import "./css/userSay.css";
import img from "./img/img.jpg";
import icon1 from "./icon/icon1.jpg";
import icon2 from "./icon/icon2.jpg";
import icon3 from "./icon/icon3.jpg";
import icon4 from "./icon/icon4.jpg";
import icon5 from "./icon/icon5.jpg";
import Stars from "./Stars";
import { nextUseSay, backUseSay } from "../../../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
const dataUserSay = [
    {
        id: 1,
        content:
            "“Adding live social proof was the #1 driver of increased revenue in all my experiments while at Airkey.” and thebran must survive atleast 1 year.",
        avatar: icon1,
        name: "Raul van Sutoyo",
        desc: "UI Designer",
        stars: 3,
    },
    {
        id: 2,
        content:
            "Hello Tấn  social proof was the #1 driver of increased revenue in all my experiments while at ",
        avatar: icon2,
        name: "Nguyễn Trọng Tấn",
        desc: "Lập trình viên vip pro ",
        stars: 5,
    },
    {
        id: 3,
        content:
            "Hello social proof was the #1 driver of increased revenue in all my experiments while at",
        avatar: icon3,
        name: "Phạm Hồng Ngát",
        desc: "Lập trình viên vip pro",
        stars: 4,
    },
    {
        id: 4,
        content:
            "Hello Phú social proof was the #1 driver of increased revenue in all my experiments while at",
        avatar: icon4,
        name: "Lê Xuân Phú",
        desc: "Lập trình viên vip pro",
        stars: 5,
    },
    {
        id: 5,
        content:
            "Hello social proof was the #1 driver of increased revenue in all my experiments while at",
        avatar: icon5,
        name: "Vũ Quang Đạo",
        desc: "Lập trình viên vip pro",
        stars: 4,
    },
];

function UserSay() {
    const dispath = useDispatch();
    const handleReadMore = () => {
        dispath(nextUseSay(1));
    };
    const handleBack = () => {
        dispath(backUseSay(1));
    };
    const valueUserSay = useSelector(
        (state) => state.reducerAction.useSayValue
    );
    const transform = `translateX(calc(${valueUserSay} * (-100%)))`;
    return (
        <div className="mt-[60px] md:-[mt-140px] md:center md:gap-[40px] md:mb-[0px] mb-[50px] pb-[50px]">
            <div className="md:w-[calc(40%-20px)] w-full md:h-[570px] h-[310px]">
                <img src={img} className="w-full h-full rounded-[20px]" />
            </div>
            <div className="md:w-[calc(60%-20px)] w-full relative">
                <h2
                    className="md:mb-[22px] mb-3"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                >
                    What our user say
                </h2>
                <div className="flex overflow-hidden">
                    {dataUserSay.map((item) => (
                        <div
                            style={{ transform }}
                            key={item.id}
                            className="w-full flex-shrink-0 "
                        >
                            <p className="md:mb-[60px] mb-[30px] font-semibold italic text-[18px] desc">
                                {`${item.content} ${item.name}`}
                            </p>
                            <div className="flex items-center justify-start gap-[20px]">
                                <div>
                                    <img
                                        src={item.avatar}
                                        className="w-[70px] h-[70px] rounded-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#000]">
                                        {item.name}
                                    </h3>
                                    <span className="desc text-[#747474] mb-3">
                                        {item.desc}
                                    </span>
                                    <Stars soLuong={item.stars} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="absolute md:bottom-0 bottom-[50px] right-[60px] md:right-[200px] cursor-pointer bg-[#f5e6e6] hover:bg-blue-500 py-2 px-4 
                rounded-xl text-[orange] hover:text-white center"
                    onClick={handleBack}
                >
                    <i className="fa-solid fa-chevron-right rotate-[180deg]"></i>
                    <span className="ml-3">Read Back</span>
                </div>
                <div
                    className="absolute bottom-0 right-0  md:right-5 cursor-pointer bg-[#f5e6e6] hover:bg-blue-500 py-2 px-4 
                rounded-xl text-[orange] hover:text-white center"
                    onClick={handleReadMore}
                >
                    <span className="mr-3">Read More</span>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    );
}

export default UserSay;
