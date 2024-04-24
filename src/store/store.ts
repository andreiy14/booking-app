// src/store/store.ts

import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch, AnyAction } from 'redux';
import guestReducer from "../features/guestSlice";
import hotelReducer from "../features/hotelSlice";

const store = configureStore({
  reducer: {
    guests: guestReducer,
    hotel : hotelReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
