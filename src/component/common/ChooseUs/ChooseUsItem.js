import React from "react";

function ChooseUsItem(props) {
    const data = props.data;
    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className="flex items-center  mb-[40px]">
                    <div className=" w-[55px] h-[55px] center flex-shrink-0">
                        <img
                            src={item.icon}
                            className=" inline-block text-[30px]  w-[50px] h-[50px]"
                        />
                    </div>
                    <div className="content">
                        <h4 className="mb-2 text-[20px] text-tim font-semibold">
                            {item.title}
                        </h4>
                        <span className="desc ">{item.desc}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChooseUsItem;
