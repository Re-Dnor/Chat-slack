import { configureStore } from '@reduxjs/toolkit';

import chatsReducer from './features/chats-slice';

const store = configureStore({
  reducer: {
    chats: chatsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
