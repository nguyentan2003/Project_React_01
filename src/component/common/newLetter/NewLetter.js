import React from "react";

function NewLetter() {
    return (
        <div className=" hidden mt-[140px] center py-[70px] bg-[#E8C400] md:center flex-col rounded-3xl">
            <h2 className="text-white mb-1">Subscribe our newsletter</h2>
            <p className="text-white font-medium mb-10 max-w-[425px] text-center">
                Reciev latest news, update, and many other things every week.{" "}
            </p>
            <div className="relative">
                <input
                    className="p-5 w-[450px] h-[60px] placeholder-[#B3B4B5]  rounded-lg outline-none text-[#999]"
                    placeholder="Enter Your email address"
                />
                <div
                    className="absolute right-[8px] top-[50%] translate-y-[-50%] cursor-pointer p-[15px]
                                rounded-md bg-[#F66F4D] center hover:bg-blue-500 "
                >
                    <i className="fa-solid fa-paper-plane text-white"></i>
                </div>
            </div>
        </div>
    );
}

export default NewLetter;
