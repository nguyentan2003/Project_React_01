import { createSlice } from "@reduxjs/toolkit";
const reduxSlice = createSlice({
    name: "storeState",
    initialState: {
        value: 1,
        min: 1,
        max: 10,
        valueMobile: 1,
        maxMobile: 12,
        useSayValue: 0,
        navbar: [
            {
                id: 0,
                name: "Home",
                active: true,
            },
            {
                id: 1,
                name: "About",
                active: false,
            },
            {
                id: 2,
                name: "Destinations",
                active: false,
            },
            {
                id: 3,
                name: "Blog",
                active: false,
            },
            {
                id: 4,
                name: "Pages",
                active: false,
            },
        ],
    },
    reducers: {
        nextTrending: (state, action) => {
            // window;
            if (state.value + action.payload <= state.max) {
                state.value += action.payload;
            }
            // mobile
            if (state.valueMobile + action.payload <= state.maxMobile) {
                state.valueMobile += action.payload;
            }
        },
        backTrending: (state, action) => {
            if (state.value - action.payload >= state.min) {
                state.value -= action.payload;
            }
            if (state.valueMobile - action.payload >= state.min) {
                state.valueMobile -= action.payload;
            }
        },
        nextUseSay: (state, action) => {
            state.useSayValue = (action.payload + state.useSayValue) % 5;
        },
        backUseSay: (state, action) => {
            if (state.useSayValue - action.payload >= 0)
                state.useSayValue -= action.payload;
            else state.useSayValue = 4;
        },
    },
});
export const { nextTrending, backTrending, nextUseSay, backUseSay } =
    reduxSlice.actions;
export default reduxSlice.reducer;
