import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ARTICLE_DATA,
  GET_ALL_ARTICLES,
} from "../../../../context/article-slice";
import axios from "axios";
import { API_KEY } from "../../../../API/ApiKey";
import ArticleItem from "./ArticleItem";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ArticleList() {
  const articleData = useSelector(ARTICLE_DATA);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchAllData() {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;
    const { data } = await axios.get(url);
    dispatch(GET_ALL_ARTICLES(data.articles));
    console.log(data);
  }

  useEffect(() => {
    fetchAllData();
    navigate("/");
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          md: "1fr 1fr 1fr",
          sm: "1fr 1fr",
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
  );
}
