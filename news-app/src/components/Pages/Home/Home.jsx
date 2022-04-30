import React from "react";
import LinkedButton from "../../LinkedButton/LinkedButton";
import ArticleList from "./Articles/ArticleList";
import "./Home.css";

export default function Home() {
  return (
    <section>
      <LinkedButton />
      <ArticleList />
    </section>
  );
}
