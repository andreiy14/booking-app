import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GuestState } from "../../types";

const initialState: GuestState = {
  guests: [
    {
      id: 1,
      name: "andreiy",
      gender: "Mr",
    },
  ],
};

const guestSlice = createSlice({
  name: "guests",
  initialState,
  reducers: {
    saveGuest: (state, action: PayloadAction<GuestState>) => {
      state.guests = action.payload?.guests;
    },
  },
});

export const { saveGuest } = guestSlice.actions;
export default guestSlice.reducer;
