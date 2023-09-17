import React from "react";

function BestTourItem(props) {
    const data = props.data;
    return (
        <div className={`grid md:grid-cols-3 grid-cols-1 gap-[30px] `}>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-[#f1f1f1] w-full overflow-hidden rounded-[15px] border-[1px] border-[#f1f1f1] border-solid"
                >
                    <div className="md:w-full">
                        <img src={item.img} className="w-full h-[300px]" />
                    </div>
                    <div className="p-[20px]">
                        <span className="block text-[#FF7B29] font-bold md:text-[2rem] text-[1.8rem] ">
                            {item.price}
                        </span>
                        <span className="text-[#1F1D63] md:text-[1.6rem] text-[1.4rem] font-[600] mb-[10px] inline-block">
                            {item.name}
                        </span>
                        <div>
                            <i className="fa-solid fa-location-dot bestTourItem"></i>
                            <span className="bestTourItem ml-[8px]">
                                {item.address}
                            </span>
                        </div>
                        <div className="flex gap-[30px] mt-[5px]">
                            <div>
                                <i className="fa-regular fa-calendar-plus bestTourItem"></i>
                                <span className="bestTourItem ml-[8px]">
                                    {item.timeStart}
                                </span>
                            </div>
                            <div>
                                <i className="fa-regular fa-clock bestTourItem"></i>
                                <span className="bestTourItem ml-[8px]">
                                    {item.longTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BestTourItem;
