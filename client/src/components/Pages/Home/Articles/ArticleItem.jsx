import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ADD_TO_FAV,
  ARTICLE_DATA,
  FAV_DATA,
  GET_ASYNC_DATA,
  OPEN_ALERT,
  REMOVE_FAV,
} from "../../../../store/article-slice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./ArticleItem.css";

export default function ArticleItem({ article }) {
  const { author, title, url, urlToImage } = article;
  const articleData = useSelector(ARTICLE_DATA);
  const favData = useSelector(FAV_DATA);
  const dispatch = useDispatch();
  const [btn, setBtn] = React.useState(<FavoriteBorderIcon />);

  function onFetchFav() {
    return favData.map((article) => {
      if (article.url === url) {
        setBtn(<FavoriteIcon />);
      }
    });
  }

  React.useEffect(() => {
    onFetchFav();
  }, [favData]);

  function addToFavHandler(url) {
    const favArticle = articleData.find((article) => article.url === url);
    const checkFav = favData.find((fav) => fav.url === favArticle.url);
    if (checkFav) {
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
          dispatch(GET_ASYNC_DATA());
        }
      });
      return;
    }
    dispatch(ADD_TO_FAV(favArticle));
    dispatch(OPEN_ALERT());
  }

  return (
    <Card className="article_card" sx={{ maxWidth: 600 }}>
      <a href={url} target="_blank">
        <CardMedia
          component="img"
          height="200"
          image={urlToImage}
          alt={title}
        />
      </a>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
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
          variant="outlined"
          size="small"
          onClick={() => addToFavHandler(article.url)}
        >
          {btn}
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
