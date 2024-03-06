import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import channelSlice from './channelSlice';
import queryDataSlice from './queryDataSlice.js'
import videosSlice from './videosSlice.js';

export const store = configureStore({
  reducer: {
    videos:videosSlice,
    channels: channelSlice,
    query: queryDataSlice,
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
})
