import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { API_KEY } from "../../API/ApiKey";
import { useDispatch } from "react-redux";
import { BTN_FETCH_ARTICLES } from "../../context/article-slice";

const btns = [
  "business",
  "health",
  "science",
  "technoloy",
  "general",
  "sports",
  "tesla",
  "gaming",
  "entertainment",
];

export default function LinkedButton() {
  const [btnValue, setBtnValue] = useState();
  const dispatch = useDispatch();

  async function btnFetchData() {
    const url = `https://newsapi.org/v2/everything?q=${btnValue}&apiKey=${API_KEY}`;
    const { data } = await axios.get(url);
    dispatch(BTN_FETCH_ARTICLES(data.articles));
  }

  function btnFetchHandler(e) {
    setBtnValue(e.target.value);
    btnFetchData();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "1.5rem",
        flexWrap: "wrap",
        marginTop: "2rem",
      }}
    >
      {btns.map((btn) => {
        return (
          <div key={btn}>
            <Button variant="contained" value={btn} onClick={btnFetchHandler}>
              {btn}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
