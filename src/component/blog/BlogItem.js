import React from "react";
import img1 from "./img/imgItem1.webp";
import img2 from "./img/imgItem2.webp";
import img3 from "./img/imgItem3.jfif";
import img4 from "./img/imgItem4.jfif";
import img5 from "./img/imgItem5.jfif";
import img6 from "./img/imgItem6.jfif";
const dataBlogItem = [
    {
        id: 1,
        img: img1,
        title: "On the Shores of a Pink Lake in Australia",
        information:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil...",
        link: "#!",
    },
    {
        id: 2,
        img: img2,
        title: "On the Shores of a Pink Lake in Australia",
        information:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil...",
        link: "#!",
    },
    {
        id: 3,
        img: img3,
        title: "On the Shores of a Pink Lake in Australia",
        information:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil...",
        link: "#!",
    },
    {
        id: 4,
        img: img4,
        title: "On the Shores of a Pink Lake in Australia",
        information:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil...",
        link: "#!",
    },
    {
        id: 5,
        img: img5,
        title: "On the Shores of a Pink Lake in Australia",
        information:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil...",
        link: "#!",
    },
    {
        id: 6,
        img: img6,
        title: "On the Shores of a Pink Lake in Australia",
        information:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil...",
        link: "#!",
    },
];
function BlogItem() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[30px] gap-[20px] ">
            {dataBlogItem.map((item) => (
                <div>
                    <div className="w-full mb-[20px]">
                        <img
                            src={item.img}
                            className="h-[250px] md:h-[300px] w-full rounded-xl"
                        />
                    </div>
                    <div>
                        <h3 className="mb-[16px] font-semibold text-[24px] leading-[32px] text-tim">
                            {item.title}
                        </h3>
                        <p className="desc mb-[20px]">{item.information}</p>
                        <a
                            className="text-[18px] font-semibold text-[#FF7B29]"
                            href={item.link}
                        >
                            See More
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogItem;
