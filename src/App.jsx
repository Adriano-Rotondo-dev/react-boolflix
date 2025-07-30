import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import BoolflixList from "./components/BoolflixList";
import TvShowCard from "./components/cards/TvShowCard";
import MovieCard from "./components/cards/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [search, setSearch] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=it-IT`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}&language=it-IT`
      )
      .then((res) => {
        setTv(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <header>
        <Navbar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </header>
      <main>
        <BoolflixList items={movies} Card={MovieCard} />
        <BoolflixList items={tv} Card={TvShowCard} />
      </main>
    </>
  );
}
export default App;
