import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleData: [],
  favData: [],
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});
