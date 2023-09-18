import React from "react";
import HeadTitle from "../common/headTitle/HeadTitle";
import BlogItem from "./BlogItem";
import GeneralBlog from "./GeneralBlog";

function Blog() {
    return (
        <div>
            <div className="mb-[60px] md:mb-[100px]">
                <HeadTitle
                    title="Blogs"
                    desc="Welcome to our Travel Blog"
                    bg="bg-[#999]"
                />
            </div>
            <div className="mb-[60px] md:mb-[100px] md:max-w-[1170px] md:mx-auto px-[20px]">
                <GeneralBlog />
            </div>
            <div className="md:max-w-[1170px] md:mx-auto px-[20px]">
                <BlogItem />
            </div>
        </div>
    );
}

export default Blog;
