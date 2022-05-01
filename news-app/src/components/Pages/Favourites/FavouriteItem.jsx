import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { REMOVE_FAV } from "../../../context/article-slice";
import Swal from "sweetalert2";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useNavigate } from "react-router-dom";

export default function FavouriteItem({ article }) {
  const { description, title, url, urlToImage } = article;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function removeFavHandler(url) {
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
        Swal.fire("Removed!", "Removed From Favourites", "success");
        dispatch(REMOVE_FAV(url));
        navigate("/favourites");
      }
    });
  }

  return (
    <Card
      style={{ boxShadow: "0px 3px 10px #444", position: "relative" }}
      sx={{ maxWidth: 600 }}
    >
      <a href={url} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt={title}
        />
      </a>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          alignItems: "flex-end",
        }}
      >
        <Button
          variant="contained"
          size="small"
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            backgroundColor: "tomato",
          }}
          onClick={() => removeFavHandler(url)}
        >
          <ClearOutlinedIcon />
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => removeFavHandler(url)}
        >
          REMOVE
        </Button>
        <Button variant="outlined" size="small">
          <a className="learn_more" href={url} target="_blank">
            Learn More...
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
