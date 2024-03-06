import { createSlice } from "@reduxjs/toolkit";

const queryDataSlice = createSlice({
    name: "query",
    initialState: [],
    reducers: {
        addQueryData: (state, action) => {
            state.push({
                [action.payload.name]: action.payload.data
            })
        },
        getQueryData: (state, action) => {
            return state.find((itme) => itme.name?.trim()?.uppercase() === action.payload?.trim()?.uppercase())
        }
    }

})

export const { addQueryData, getQueryData } = queryDataSlice.actions
export default queryDataSlice.reducer