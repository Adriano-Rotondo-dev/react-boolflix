import { useState } from "react";
import axios from "axios";
import LanguageFlags from "./components/LanguageFlags";

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
        <nav className="navbar navbar-expand-sm navbar-light bg-black">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="logo" src="img/boolflix.png" />
            </a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <form
                className="d-flex my-2 my-lg-0 ms-auto"
                onSubmit={handleSearch}
              >
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-outline-danger my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="row p-5 d-flex justify-content-center bg-dark">
          {movies.map((movie) => (
            <div className="col col-3" key={movie.id}>
              <div className="card p-3 m-3 ">
                <div className="card-head">
                  <h5 className="card-title">{movie.title}</h5>
                  <h6 className="card-title">{movie.original_title}</h6>
                  <h7 className="card-title">Movie</h7>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <span className="fw-bold"> Lingua originale </span>
                    <LanguageFlags language={movie.original_language} />
                  </p>
                  <p className="card-text">
                    <span className="fw-bold"> Voto </span>
                    {movie.vote_average.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {tv.map((show) => (
            <div className="col col-3" key={show.id}>
              <div className="card p-3 m-3 ">
                <div className="card-head">
                  <h5 className="card-title">{show.name}</h5>
                  <h6 className="card-title">{show.original_name}</h6>
                  <h7 className="card-title">Tv Show</h7>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <span className="fw-bold"> Lingua originale </span>
                    <LanguageFlags language={show.original_language} />
                  </p>
                  <p className="card-text">
                    <span className="fw-bold"> Voto </span>
                    {show.vote_average.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
export default App;
