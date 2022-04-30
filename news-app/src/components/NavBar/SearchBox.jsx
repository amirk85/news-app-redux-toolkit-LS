import React, { useState } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import { API_KEY } from "../../API/ApiKey";
import { useDispatch } from "react-redux";
import { SEARCHED_ARTICLES } from "../../context/article-slice";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  async function fetchSearchData() {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${input}&apiKey=${API_KEY}`
    );

    dispatch(SEARCHED_ARTICLES(data.articles));
  }

  function submitHandler(e) {
    e.preventDefault();
    fetchSearchData();
    setInput("");
  }

  return (
    <Container>
      <Form onSubmit={submitHandler} className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="warning" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
}
