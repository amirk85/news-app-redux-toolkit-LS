import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { CLEAR_FAV, FAV_DATA } from "../../../context/article-slice";
import FavouriteItem from "./FavouriteItem";

export default function FavouriteList() {
  const favData = useSelector(FAV_DATA);
  const dispatch = useDispatch();

  function clearAllFav() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed All!", "Removed successfully.", "success");
        dispatch(CLEAR_FAV());
      }
    });
  }

  return (
    <div>
      {favData.length > 0 && (
        <Button
          variant="contained"
          style={{ backgroundColor: "tomato", margin: "1rem" }}
          onClick={clearAllFav}
        >
          Clear All
        </Button>
      )}

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
            gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
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
