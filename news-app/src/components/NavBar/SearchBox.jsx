import React, { useState } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
// import { Button } from "@mui/material";
import axios from "axios";
import { API_KEY } from "../../API/ApiKey";
import { useDispatch } from "react-redux";
import { SEARCHED_ARTICLES } from "../../context/article-slice";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  async function fetchSearchData() {
    const url = `https://newsapi.org/v2/everything?q=${input}&apiKey=${API_KEY}`;
    const { data } = await axios.get(url);

    dispatch(SEARCHED_ARTICLES(data.articles));
  }

  function submitHandler(e) {
    e.preventDefault();
    fetchSearchData();
    setInput("");
  }

  return (
    <div>
      <Form
        style={{ marginRight: "1rem" }}
        onSubmit={submitHandler}
        className="d-flex"
      >
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="dark" type="submit">
          SEARCH
        </Button>
      </Form>
    </div>
  );
}