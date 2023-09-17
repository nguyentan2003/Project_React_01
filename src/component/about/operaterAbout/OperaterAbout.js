import React from "react";
import imgOperater from "./img/imgOperater.jpg";
const dataOperaterAbout = {
    question: "Who we are",
    title: "We are best tourist operator",
    desc: "We are a small family owned, award-winning operation that specializes in providing highly personalized service to our discerning clientele. Our goal is to exceed your expectations and make your trip an unforgettable experience.",
    img: imgOperater,
};
function OperaterAbout() {
    return (
        <div className="md:center flex  flex-col md:flex-row md:gap-[60px] gap-[30px]">
            <div className="main-content  md:w-[calc(50%-30px)]">
                <span className="text-2xl font-bold text-[#FF7B29]  w-full">
                    {dataOperaterAbout.question}
                </span>
                <h1
                    className="mt-[15px] md:mb-5 mb-4 md:leading-[70px] md:text-[3.3rem] w-full"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                >
                    {dataOperaterAbout.title}
                </h1>
                <p className="desc font-semibold italic">
                    {dataOperaterAbout.desc}
                </p>
            </div>
            <div className="img-operater   md:h-[400px] h-[340px] md:w-[calc(50%-30px)">
                <img
                    src={dataOperaterAbout.img}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}

export default OperaterAbout;
