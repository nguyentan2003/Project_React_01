import React from "react";

function Item(props) {
    return (
        <div className="center md:gap-[30px] gap-5 cursor-pointer border-[2px] border-[#f1f1f1] border-solid rounded-lg">
            <div className="md:w-[220px] w-[110px] md:h-[220px] h-[110px] flex-shrink-0">
                <img src={props.data.img} className="w-full h-full" />
            </div>
            <div className="md:flex md:flex-col md:justify-between">
                <div>
                    <h3 className="title md:mb-[12px]">{props.data.title}</h3>
                    <span className="desc">{props.data.desc}</span>
                </div>
                <span className="time mb-[30px]">{props.data.time}</span>
            </div>
        </div>
    );
}

export default Item;
