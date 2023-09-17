import heroImg from "./img/imgHero.png";
import React from "react";
import style from "../../css/heroCenter.module.scss";
import clsx from "clsx";
function HeroCenter() {
    return (
        <div className="ml-[100px] md:ml-[50px] relative mr-[40px]">
            <div className={`${clsx(style.floating)}`}>
                <svg
                    className="w-[90px] mb-[15px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="93"
                    height="92"
                    viewBox="0 0 93 92"
                    fill="none"
                >
                    <circle cx="46.5287" cy="45.8768" r="45.806" fill="white" />
                    <path
                        d="M80.5003 76.6033C75.2224 82.4386 68.5304 86.8161 61.0692 89.3137C53.608 91.8113 45.6293 92.345 37.902 90.8631C30.1746 89.3813 22.9593 85.934 16.9513 80.8535C10.9434 75.773 6.34536 69.2306 3.60047 61.8568C0.855579 54.483 0.0563556 46.5265 1.27983 38.7541C2.5033 30.9817 5.70821 23.6555 10.5857 17.4815C15.4632 11.3076 21.8487 6.4941 29.1269 3.505C36.4052 0.515899 44.3306 -0.548036 52.1395 0.415737L50.7368 11.781C44.8801 11.0582 38.936 11.8561 33.4774 14.0979C28.0187 16.3398 23.2295 19.9499 19.5714 24.5803C15.9133 29.2108 13.5096 34.7055 12.592 40.5348C11.6744 46.3641 12.2738 52.3315 14.3325 57.8618C16.3912 63.3922 19.8397 68.299 24.3457 72.1094C28.8516 75.9197 34.2631 78.5052 40.0586 79.6166C45.8541 80.7279 51.8382 80.3277 57.4341 78.4545C63.0299 76.5813 68.049 73.2982 72.0074 68.9217L80.5003 76.6033Z"
                        fill="#F3F3F3"
                    />
                    <path
                        d="M46.5287 5.79655C46.5287 2.63431 49.1021 0.0339127 52.2397 0.428175C59.5916 1.352 66.64 4.05011 72.761 8.32612C80.4532 13.6998 86.3095 21.3061 89.538 30.1165C92.7665 38.9268 93.2113 48.5161 90.8124 57.5876C88.9035 64.8061 85.2672 71.4195 80.2528 76.8748C78.1129 79.203 74.4685 78.881 72.4253 76.4675C70.3821 74.0539 70.7271 70.4669 72.7682 68.0516C76.0417 64.178 78.4328 59.6085 79.7415 54.6599C81.5406 47.8563 81.207 40.6643 78.7857 34.0565C76.3643 27.4488 71.9721 21.744 66.2029 17.7138C62.0067 14.7824 57.2293 12.8397 52.2281 11.9983C49.1096 11.4737 46.5287 8.9588 46.5287 5.79655Z"
                        fill="#D3ED68"
                    />
                </svg>
                <div className="absolute flex flex-col text-center top-[35px]">
                    <span className="text-[18px] font-[800]">36</span>
                    <span className="text-[10px] text-[#999] font-[500]">
                        hello Tấn
                    </span>
                </div>
                <span className="inline-block mb-[5px] text-[ #0D1E3F] text-[2.1rem] font-bold ">
                    224
                </span>
                <span className="text-[#AEB4CF] text-[12px] font-[500]">
                    Total trip (month)
                </span>
            </div>
            <img
                src={heroImg}
                alt=" Plan and book your perfect trip with expert advice, travel
    tips, destination information and inspiration from us."
                className="w-[380px] h-[510px] object-cover rounded-[10px]"
            />
            {/* line-bottom */}
            <div className=""></div>
        </div>
    );
}

export default HeroCenter;
