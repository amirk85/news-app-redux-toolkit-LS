import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../API/API";

const storedFav = JSON.parse(localStorage.getItem("favArticle"));

export const GET_ASYNC_DATA = createAsyncThunk(
  "articles/GET_ASYNC_DATA",
  async () => {
    const url = `${BASE_URL}business&apiKey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data.articles;
  }
);
export const SEARCHED_ASYNC_DATA = createAsyncThunk(
  "articles/SEARCHED_ASYNC_DATA",
  async (input) => {
    const url = `${BASE_URL}${input}&apiKey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data.articles;
  }
);
export const BTN_FETCH_ASYNC_DATA = createAsyncThunk(
  "articles/BTN_FETCH_ASYNC_DATA",
  async (val) => {
    const url = `${BASE_URL}${val}&apiKey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data.articles;
  }
);

const initialState = {
  articleData: [],
  favData: storedFav || [],
  success: null,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
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
    OPEN_ALERT(state) {
      state.success = true;
    },
    CLOSE_ALERT(state) {
      state.success = false;
    },
  },
  extraReducers: {
    [GET_ASYNC_DATA.fulfilled](state, { payload }) {
      state.articleData = payload;
    },
    [SEARCHED_ASYNC_DATA.fulfilled](state, { payload }) {
      state.articleData = payload;
    },
    [BTN_FETCH_ASYNC_DATA.fulfilled](state, { payload }) {
      state.articleData = payload;
    },
  },
});

export const { ADD_TO_FAV, REMOVE_FAV, CLEAR_FAV, OPEN_ALERT, CLOSE_ALERT } =
  articleSlice.actions;

export const ARTICLE_DATA = (state) => state.articles.articleData;
export const FAV_DATA = (state) => state.articles.favData;

export default articleSlice.reducer;
