import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "./constants";

//Middleware for async calls
export const fetchPeople = createAsyncThunk("users/fetchPeople", async () => {
  const res = await fetch("https://swapi.dev/api/people");
  const data = await res.json();
  return data.results;
});

//Slice
const peopleSlice = createSlice({
  name: "people",
  initialState: {
    fetchPeopleRequest: {
      status: REQUEST_STATUS.IDLE,
      error: "null",
    },
    data: [],
  },
  reducers: {
    updatePersonName(state, action) {
      const index = state.data.findIndex(
        (person) => person.name === action.payload.old
      );
      state.data[index].name = action.payload.new;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPeople.pending, (state, action) => {
        state.fetchPeopleRequest.status = REQUEST_STATUS.PENDING;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchPeopleRequest.status = REQUEST_STATUS.FULFILLED;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.fetchPeopleRequest.status = REQUEST_STATUS.REJECTED;
      });
  },
});

//Actions export
export const { updatePersonName } = peopleSlice.actions;

//Reducer export for store
export default peopleSlice.reducer;

//Selectors export
export const selectFetchPeopleRequest = (state) =>
  state.people.fetchPeopleRequest;
export const selectPeople = (state) => state.people.data;
