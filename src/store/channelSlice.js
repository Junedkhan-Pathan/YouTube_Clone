import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
    name: "channels",
    initialState: {},
    reducers: {
        addChannel: (state, action) => {
            state = Object.assign(state, action.payload)
        },
        getChannelById: (state, action) => {
            const channel = state.find((item) => item.id === action.payload);
            return channel
        }
    }
})

export const { addChannel, getChannelById } = channelSlice.actions
export default channelSlice.reducer