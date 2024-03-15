import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {},
    reducers: {
        addComments: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const { addComments } = commentsSlice.actions;
export default commentsSlice.reducer