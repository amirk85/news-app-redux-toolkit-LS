import React from "react";
import { useSelector } from "react-redux";
import { ARTICLE_DATA } from "../../../context/article-slice";
import Footer from "../../Footer/Footer";
import LinkedButton from "../../LinkedButton/LinkedButton";
import ArticleList from "./Articles/ArticleList";
import "./Home.css";

export default function Home() {
  const articleData = useSelector(ARTICLE_DATA);

  return (
    <section>
      {articleData.length > 0 && <LinkedButton />}
      <ArticleList />
      {articleData.length > 0 && <Footer />}
    </section>
  );
}
