import "./App.css";
import Navbar from "./components/Navbar";
import createList from "./scripts/createList";
import autentication from "./scripts/autentication";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  console.log("aqui");
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
