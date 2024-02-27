import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {

  },
  reducers: {
    searchedResultsCache: (state, action) => {
      // Using Object.assign we can merge the state with new value state = {...state, ...action.payload}
      state = Object.assign(state, action.payload)
    }
  }
})
export const { searchedResultsCache } = searchSlice.actions
export default searchSlice.reducer