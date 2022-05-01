import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ARTICLE_DATA,
  GET_ALL_ARTICLES,
} from "../../../../context/article-slice";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../../API/API";
import ArticleItem from "./ArticleItem";
import { Box } from "@mui/material";

export default function ArticleList() {
  const articleData = useSelector(ARTICLE_DATA);
  const dispatch = useDispatch();

  async function fetchAllData() {
    const url = `${BASE_URL}business&apiKey=${API_KEY}`;
    const { data } = await axios.get(url);
    dispatch(GET_ALL_ARTICLES(data.articles));
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div>
      {articleData.length === 0 ? (
        <h1
          style={{
            marginTop: "1rem",
            display: "grid",
            placeItems: "center",
          }}
        >
          Loading...
        </h1>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(3,1fr)",
              sm: "repeat(2,1fr)",
              xs: "1fr",
            },
            gap: "1.5rem",
            padding: "1rem",
            marginTop: "2rem",
          }}
        >
          {articleData.map((article) => (
            <ArticleItem key={article.url} article={article} />
          ))}
        </Box>
      )}
    </div>
  );
}
