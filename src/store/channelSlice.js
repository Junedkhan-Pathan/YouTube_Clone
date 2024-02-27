import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
    name: "channels",
    initialState: [],
    reducers: {
        addChannel: (state, action) => {
            state = state.push(action.payload)
        }
    }
})

export const  {addChannel} = channelSlice.actions
export default channelSlice.reducer