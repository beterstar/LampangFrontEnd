import { configureStore } from "@reduxjs/toolkit";
// import proJectReducer from "./slice/projectSlice/projectSlice";
import navbarReducer from "./slice/navbarActive/navbarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    // project: proJectReducer,
  },
});

export default store;
