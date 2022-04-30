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
    SEARCHED_ARTICLES(state, { payload }) {
      state.articleData = payload;
    },
    BTN_FETCH_ARTICLES(state, { payload }) {
      state.articleData = payload;
    },
  },
});

export const { GET_ALL_ARTICLES, SEARCHED_ARTICLES, BTN_FETCH_ARTICLES } =
  articleSlice.actions;

export const ARTICLE_DATA = (state) => state.articles.articleData;
export const FAV_DATA = (state) => state.articles.favData;

export default articleSlice.reducer;
