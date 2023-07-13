import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Watchlist from "./pages/Watchlist.jsx";
import MovieInfoPage from "./pages/MovieInfoPage.jsx";
import Home from "./pages/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie/:movieId" element={<MovieInfoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
