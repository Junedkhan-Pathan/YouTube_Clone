import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import channelSlice from './channelSlice';
import queryDataSlice from './queryDataSlice.js'
import videosSlice from './videosSlice.js';
import tagsSlice from './tagsSlice.js';
import commentsSlice from './commentsSlice.js';

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    channels: channelSlice,
    query: queryDataSlice,
    app: appSlice,
    search: searchSlice,
    tags: tagsSlice,
    comments: commentsSlice
  },
})
