import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function handleSearchOutsideHome() {
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  const movieName = queryString.get("movieName");

  useEffect(() => {
    if (movieName) {
      window.location = `/?movieName=${movieName}`;
    }
  }, [location.search]);
}
