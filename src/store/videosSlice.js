import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
    name: "videos",
    initialState: {},
    reducers: {
        addVideos(state, action) {
            // state.push(action.payload)
            state = Object.assign(state, action.payload)
            // return [...action.payload, ...state]

        },
        getVideoById(state, action) {
            const video = state.filter((item) => item.id === action.payload);
            return video
        }
    }
})

export const { addVideos, getVideoById } = videoSlice.actions;
export default videoSlice.reducer