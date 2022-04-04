import { configureStore } from "@reduxjs/toolkit";

import peopleReducer from "./peopleSlice";

export default configureStore({
  reducer: {
    people: peopleReducer,
  },
});
