import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ARTICLE_DATA,
  GET_ASYNC_DATA,
} from "../../../../context/article-slice";

import ArticleItem from "./ArticleItem";
import { Box } from "@mui/material";

export default function ArticleList() {
  const articleData = useSelector(ARTICLE_DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_ASYNC_DATA());
  }, [dispatch]);

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
            gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
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
