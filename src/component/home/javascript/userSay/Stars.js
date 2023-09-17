import React from "react";
const star = "fa-solid fa-star";
const tan = <i className={star}></i>;

function Stars(props) {
    return (
        <div>
            <i className={`${star} text-[orange]`}></i>
            <i className={`${star} text-[orange]`}></i>
            <i className={`${star} text-[orange]`}></i>
            <i className={`${star} text-[orange]`}></i>
        </div>
    );
}

export default Stars;
