import { nextTrending, backTrending } from "../../../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import TrendingItems from "./TrendingItems";
import Aos from "aos";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jfif";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jfif";
import img8 from "./img/img8.jfif";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jfif";
import img11 from "./img/img11.jfif";
import img12 from "./img/img12.jfif";
const dataTrending = [
    {
        id: 1,
        img: img1,
        title: "Mountain Hiking Tour",
        place: "12 Places",
        activity: "3 Activites",
        money: "$895.50",
    },
    {
        id: 2,
        img: img2,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$769.99",
    },
    {
        id: 3,
        img: img3,
        title: "Forest Wild Life",
        place: "12 Places",
        activity: "3 Activites",
        money: "$939.80",
    },
    {
        id: 4,
        img: img4,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$769.99",
    },
    {
        id: 5,
        img: img5,
        title: "Nguyễn Trọng Tấn",
        place: "12 Places",
        activity: "3 Activites",
        money: "$895.50",
    },
    {
        id: 6,
        img: img6,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$100.99",
    },
    {
        id: 7,
        img: img7,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$895.50",
    },
    {
        id: 8,
        img: img8,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$100.99",
    },
    {
        id: 9,
        img: img9,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$895.50",
    },
    {
        id: 10,
        img: img10,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$100.99",
    },
    {
        id: 11,
        img: img11,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$895.50",
    },
    {
        id: 12,
        img: img12,
        title: "Tran Skyline",
        place: "12 Places",
        activity: "3 Activites",
        money: "$100.99",
    },
];
function Trending() {
    Aos.init();
    const dispatch = useDispatch();
    const value = useSelector((state) => state.reducerAction.value) - 1;
    const valueMobile =
        useSelector((state) => state.reducerAction.valueMobile) - 1;

    const handleActionBack = () => {
        return dispatch(backTrending(1));
    };

    const handleActionNext = () => {
        return dispatch(nextTrending(1));
    };

    return (
        <div className="mt-[60px] md:mt-[140px]">
            <div className="mb-[20px] md:mb-[40px] md:flex md:justify-between">
                <div className="mb-[15px]">
                    <h2
                        className="mb-[15px]"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    >
                        Trending 2022
                    </h2>
                    <span className="desc ">
                        Sost Brilliant reasons Entrada should be your
                        one-stop-shop!
                    </span>
                </div>
                <div className="center  gap-[10px] md:mr-[40px]">
                    {/* icon back */}
                    <div
                        className="trending__back trending__icon-action"
                        onClick={handleActionBack}
                    >
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>

                    {/* icon next */}
                    <div
                        className="trending__next trending__icon-action "
                        onClick={handleActionNext}
                    >
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
            </div>
            <TrendingItems
                data={dataTrending}
                value={value}
                valueMobile={valueMobile}
            />
        </div>
    );
}

export default Trending;
