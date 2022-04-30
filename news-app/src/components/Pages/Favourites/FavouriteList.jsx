import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_FAV, FAV_DATA } from "../../../context/article-slice";
import FavouriteItem from "./FavouriteItem";

export default function FavouriteList() {
  const favData = useSelector(FAV_DATA);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "tomato", margin: "1rem" }}
        onClick={() => dispatch(CLEAR_FAV())}
      >
        Clear All
      </Button>
      {favData.length === 0 ? (
        <h1
          style={{
            marginTop: "1rem",
            display: "grid",
            placeItems: "center",
          }}
        >
          No Favourite Found
        </h1>
      ) : (
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
          }}
        >
          {favData.map((article) => (
            <FavouriteItem key={article.url} article={article} />
          ))}
        </Box>
      )}
    </div>
  );
}
