import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Navbar
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
                  className="btn btn-outline-success my-2 my-sm-0"
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
        <div className="row m-5 d-flex justify-content-center">
          {movies.map((movie) => (
            <div className="col col-3" key={movie.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={movie.poster_path}
                  alt={movie.original_title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
}
export default App;
