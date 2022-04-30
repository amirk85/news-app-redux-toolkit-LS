import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../API/API";
import { useDispatch } from "react-redux";
import { SEARCHED_ARTICLES } from "../../../context/article-slice";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  async function fetchSearchData() {
    const url = `${BASE_URL}=${input}&apiKey=${API_KEY}`;
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
