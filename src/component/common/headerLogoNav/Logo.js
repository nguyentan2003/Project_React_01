import React, { useState } from "react";

function Logo() {
    const [reload, setReload] = useState(0);
    return (
        <div className="cursor-pointer" onClick={() => setReload(reload + 1)}>
            <div className="relative flex  items-center gap-2 w-44">
                <div className=" flex justify-center items-center bg-orange-500 w-9 h-9 rounded-full">
                    <span className="block font-bold text-lg text-white ">
                        ST
                    </span>
                </div>
                <span className="text-2xl font-bold text-indigo-900">
                    Safe Tour
                </span>
                <div className="absolute bottom-2 right-3 z-10 inline-block w-1 h-1 rounded-full bg-orange-500"></div>
            </div>
        </div>
    );
}

export default Logo;
