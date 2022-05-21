import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./article-slice";

export const store = configureStore({
  reducer: { articles: articleReducer },
});
