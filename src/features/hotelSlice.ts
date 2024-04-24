// slices/hotelSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ChosenHotel } from "../../types";

interface HotelState {
  hotels: ChosenHotel | null;
  loading: boolean;
  error: string | null;
}

const initialState: HotelState = {
  hotels: null,
  loading: false,
  error: null,
};

export const fetchHotels = createAsyncThunk(
  "hotel/fetchHotels",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://parseapi.back4app.com/classes/hotel/bVonXoSUHK",
        {
          headers: {
            "X-Parse-Application-Id":
              "Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3",
            "X-Parse-REST-API-Key": "4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy",
          },
        }
      );

      return response.data.chosen_hotel;
    } catch (error: any) {
      console.log("error", error);
      return rejectWithValue(error.message);
    }
  }
);
const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
        state.error = null;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default hotelSlice.reducer;
