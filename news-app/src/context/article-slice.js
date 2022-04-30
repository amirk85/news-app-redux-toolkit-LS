import { createSlice } from "@reduxjs/toolkit";

const storedFav = JSON.parse(localStorage.getItem("favArticle"));

const initialState = {
  articleData: [],
  favData: storedFav || [],
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
    ADD_TO_FAV(state, { payload }) {
      state.favData.push(payload);
      localStorage.setItem("favArticle", JSON.stringify(state.favData));
    },
    REMOVE_FAV(state, { payload }) {
      const filteredFav = state.favData.filter((fav) => fav.url !== payload);
      state.favData = filteredFav;
      localStorage.setItem("favArticle", JSON.stringify(filteredFav));
    },
    CLEAR_FAV(state) {
      state.favData = [];
      localStorage.removeItem("favArticle");
    },
  },
});

export const {
  GET_ALL_ARTICLES,
  SEARCHED_ARTICLES,
  BTN_FETCH_ARTICLES,
  ADD_TO_FAV,
  REMOVE_FAV,
  TOGGLE_FAV,
  CLEAR_FAV,
} = articleSlice.actions;

export const ARTICLE_DATA = (state) => state.articles.articleData;
export const FAV_DATA = (state) => state.articles.favData;

export default articleSlice.reducer;
