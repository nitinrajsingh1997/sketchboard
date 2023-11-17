import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slice/menuSlice";
import toolbarReducer from "./slice/toolbarSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    toolbar: toolbarReducer,
  },
});
