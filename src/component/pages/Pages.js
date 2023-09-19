import React from "react";
import HeadTitle from "../common/headTitle/HeadTitle";
import SearchBar from "../common/searchBar/SearchBar";
import PagesItem from "./PagesItem";
function Pages() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mb-[60px] md:mb-[100px]">
                <HeadTitle
                    title="Tour"
                    desc="Hello Nguyễn Trọng Tấn"
                    height="h-[70vh]"
                />
                <div className=" ">
                    <SearchBar />
                </div>
            </div>
            <div className="set-width">
                <PagesItem />
            </div>
        </div>
    );
}

export default Pages;
