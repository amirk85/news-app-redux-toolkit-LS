import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleData: [],
  favData: [],
  isLoading: true,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    GET_ALL_ARTICLES(state, { payload }) {
      state.articleData = payload;
    },
  },
});

export const { GET_ALL_ARTICLES } = articleSlice.actions;
export const ARTICLE_DATA = (state) => state.articles.articleData;
export default articleSlice.reducer;
