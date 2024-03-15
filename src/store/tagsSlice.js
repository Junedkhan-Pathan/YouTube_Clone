import { createSlice } from "@reduxjs/toolkit";

const tagsSlice = createSlice({
    name: "tags",
    initialState: [],
    reducers: {
        addTags: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addTags } = tagsSlice.actions
export default tagsSlice.reducer