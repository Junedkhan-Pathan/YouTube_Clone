import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: [],
    reducers: {
        addVideos: (state, action) => {
            state = state.unshift(action.payload);
        }
    }
})

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer