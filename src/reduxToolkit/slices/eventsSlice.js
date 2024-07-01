import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:1337/api/events?populate=eventImage";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data)
  return data.data;
});

const eventsSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default eventsSlice.reducer;