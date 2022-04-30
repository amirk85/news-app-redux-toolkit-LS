import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "@mui/material";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../API/API";
import { useDispatch } from "react-redux";
import { SEARCHED_ARTICLES } from "../../../context/article-slice";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
    <Form
      style={{ marginRight: "1rem", float: "right" }}
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
      <Button
        variant="contained"
        style={{ backgroundColor: "#292f33" }}
        type="submit"
      >
        <SearchOutlinedIcon />
      </Button>
    </Form>
  );
}
