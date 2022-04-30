import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../API/API";
import { useDispatch } from "react-redux";
import { BTN_FETCH_ARTICLES } from "../../context/article-slice";

const btns = [
  "business",
  "health",
  "science",
  "technology",
  "general",
  "sports",
  "tesla",
  "anime",
  "nature",
  "entertainment",
];

export default function LinkedButton() {
  const [btnValue, setBtnValue] = useState(null);
  const dispatch = useDispatch();

  function btnFetchHandler(e) {
    setBtnValue(e.target.value);
    btnFetchData();
  }

  async function btnFetchData() {
    const url = await `${BASE_URL}${btnValue}&apiKey=${API_KEY}`;
    const { data } = await axios.get(url);
    dispatch(BTN_FETCH_ARTICLES(data.articles));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
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
