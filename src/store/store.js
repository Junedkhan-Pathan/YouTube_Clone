import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import videosSlice from './videosSlice';
import channelSlice from './channelSlice';

const store = configureStore({
  reducer: {
    videos: videosSlice,
    channels: channelSlice,
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
})

export default store