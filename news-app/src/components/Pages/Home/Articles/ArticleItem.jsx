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
  REMOVE_FAV,
} from "../../../../context/article-slice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ArticleItem({ article }) {
  const { description, title, url, urlToImage } = article;
  const articleData = useSelector(ARTICLE_DATA);
  const favData = useSelector(FAV_DATA);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate("/");
  }, [favData]);

  function addToFavHandler(url) {
    const favArticle = articleData.find((article) => article.url === url);
    const checkFav = favData.find((fav) => fav.url === favArticle.url);
    if (checkFav) {
      dispatch(REMOVE_FAV(checkFav.url));
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
          // window.location.reload(false);
          navigate("/favourites");
        }
      });
      return;
    }
    dispatch(ADD_TO_FAV(favArticle));
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
          variant="outlined"
          size="small"
          onClick={() => addToFavHandler(article.url)}
        >
          Add To Favourite &nbsp; {btn}
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
