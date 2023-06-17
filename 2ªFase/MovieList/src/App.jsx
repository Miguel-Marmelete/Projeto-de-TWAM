import "./App.css";
import MovieInfo from "./components/MovieInfo";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import urls from "../urls";
import Navbar from "./components/NavBar";
import createList from "./scripts/createList";
import autentication from "./scripts/autentication";
import numberOfLists from "./scripts/getNumberOfLists";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    async function init() {
      await autentication();
      await createList();
    }
    init();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
