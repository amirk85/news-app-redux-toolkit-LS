import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { API_KEY } from "../../API/ApiKey";

export default function LinkedButton() {
  const btns = [
    "business",
    "health",
    "science",
    "technoloy",
    "general",
    "entertainment",
  ];

  return (
    <div
      style={{
        display: "flex",
        marginTop: "2rem",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      {btns.map((btn) => {
        return (
          <div key={btn}>
            <Button variant="contained" value={btn}>
              {btn}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
