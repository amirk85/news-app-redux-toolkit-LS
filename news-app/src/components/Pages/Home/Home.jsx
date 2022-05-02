import React from "react";
import { useSelector } from "react-redux";
import { ARTICLE_DATA } from "../../../context/article-slice";
import Footer from "../../Footer/Footer";
import LinkedButton from "../../LinkedButton/LinkedButton";
import NotificationAlert from "../../shared/NotificationAlert";
import ArticleList from "./Articles/ArticleList";

export default function Home() {
  const articleData = useSelector(ARTICLE_DATA);

  return (
    <section>
      <NotificationAlert />
      {articleData.length > 0 && <LinkedButton />}
      <ArticleList />
      {articleData.length > 0 && <Footer />}
    </section>
  );
}
