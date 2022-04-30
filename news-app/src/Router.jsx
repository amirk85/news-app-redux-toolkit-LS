import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LinkedButton from "./components/LinkedButton/LinkedButton";
import NavBar from "./components/NavBar/NavBar";
import Favourites from "./components/Pages/Favourites/FavouriteList";
import Home from "./components/Pages/Home/Home";
import { ARTICLE_DATA } from "./context/article-slice";

export default function Router() {
  const articleData = useSelector(ARTICLE_DATA);

  return (
    <BrowserRouter>
      <NavBar />
      {articleData.length > 0 && <LinkedButton />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      {articleData.length > 0 && <Footer />}
    </BrowserRouter>
  );
}
