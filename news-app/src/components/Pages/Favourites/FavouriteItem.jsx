import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { REMOVE_FAV } from "../../../context/article-slice";

export default function FavouriteItem({ article }) {
  const { description, title, url, urlToImage } = article;
  const dispatch = useDispatch();

  function removeFavHandler(url) {
    dispatch(REMOVE_FAV(url));
  }

  return (
    <Card
      style={{ boxShadow: "0px 5px 10px #444", position: "relative" }}
      sx={{ maxWidth: 600 }}
    >
      <CardMedia component="img" height="140" image={urlToImage} alt={title} />
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
          onClick={() => removeFavHandler(url)}
        >
          remove
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
