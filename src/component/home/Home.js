import React from "react";

import Hero from "./javascript/hero/Hero";
import BestTour from "./javascript/bestTour/BestTour";
import ChooseUs from "../common/ChooseUs/ChooseUs";
import Trending from "./javascript/trending/Trending";
import Destination from "./javascript/destination/Destination";
import TourType from "./javascript/tourType/TourType";
import UserSay from "./javascript/userSay/UserSay";
import Guidings from "./javascript/guidings/Guidings";
import NewLetter from "../common/newLetter/NewLetter";
function Home() {
    return (
        <div className="mt-[70px] md:max-w-[1170px] md:mx-auto px-[20px]">
            <Hero />
            <BestTour />
            <ChooseUs />
            <Trending />
            <Destination />
            <TourType />
            <UserSay />
            <Guidings />
            <NewLetter />
        </div>
    );
}

export default Home;
