import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { SEARCHED_ASYNC_DATA } from "../../../context/article-slice";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(SEARCHED_ASYNC_DATA(input));
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
        style={{ backgroundColor: "#292F33" }}
        type="submit"
      >
        <SearchOutlinedIcon />
      </Button>
    </Form>
  );
}
