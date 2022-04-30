import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { FAV_DATA } from "../../../context/article-slice";
import FavouriteItem from "./FavouriteItem";

export default function FavouriteList() {
  const favData = useSelector(FAV_DATA);

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
      {favData.map((article) => (
        <FavouriteItem key={article.url} article={article} />
      ))}
    </Box>
  );
}
