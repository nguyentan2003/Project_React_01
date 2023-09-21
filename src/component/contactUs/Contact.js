import React from "react";
import HeadTitle from "../common/headTitle/HeadTitle";
import ContactContent from "./ContactContent";

function Contact() {
    return (
        <div>
            <div>
                <HeadTitle title="Contact Us" />
            </div>
            <div className="set-width px-[20px]">
                <ContactContent />
            </div>
            <div className="map"></div>
        </div>
    );
}

export default Contact;
