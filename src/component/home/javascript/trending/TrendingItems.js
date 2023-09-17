import React from "react";
import Btn from "../../../common/headerLogoNav/Btn";
import clsx from "clsx";
import style from "./css/trendingItem.module.scss";
function TrendingItems(props) {
    const data = props.data;
    const value = props.value.toString();
    const valueMobile = props.valueMobile.toString();

    if (Number(value) == data.length - 3) alert("hết rồi cu");
    const transform = `translateX(calc(${value} * (-100% - 30px )))`;
    // translate-x-[calc(2*(-100%-30px))]

    return (
        <div className={`flex  flex-nowrap gap-[30px] overflow-hidden `}>
            {data.map((item) => (
                <div
                    key={item.id}
                    className={`${clsx(style.trendingItem)}  `}
                    style={{ transform }}
                >
                    <div className=" p-[15px] rounded-[15px]">
                        <img
                            src={item.img}
                            className="rounded-[16px] h-[175px] md:h-[190px] w-[100%] object-cover "
                        />
                    </div>
                    <div className="pt-5 pb-8 px-6 ">
                        <h3 className="mb-2 text-tim text-[25px] font-semibold">
                            {item.title}
                        </h3>
                        <span className="text-[#8A8A8A] text-[14px] font-medium">{`${item.place}  |  ${item.activity}`}</span>

                        <div className="flex justify-between items-center mb-[30px]">
                            <span className="text-tim font-bold text-[25px]">
                                {item.money}
                            </span>
                            <Btn
                                content="Book Now"
                                bg="bg-[#f1f1f1]"
                                border="border-[#31C3E0] border-[2px] border-solid"
                                textColor="text-[#31C3E0]"
                                hover="hover:bg-[#31C3E0] hover:border-[#fff] hover:text-[#fff] btn-transition-background"
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#f1f1f1] rounded-lg p-2 center cursor-pointer">
                                <div className="center bg-orange-500 w-6 h-6 rounded-full ">
                                    <span className="block font-bold text-sm text-white">
                                        ST
                                    </span>
                                </div>
                            </div>
                            <span className=" ml-[30px] text-[#737979] font-medium  ">
                                Safe Tour Agency {item.id}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TrendingItems;
