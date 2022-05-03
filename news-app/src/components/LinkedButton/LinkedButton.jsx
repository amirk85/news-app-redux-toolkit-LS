import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { BTN_FETCH_ASYNC_DATA } from "../../store/article-slice";

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
    dispatch(BTN_FETCH_ASYNC_DATA(btnValue));
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
