export default function Navbar({ search, handleSearch, setSearch }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-black">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src="img/boolflix.png" />
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <form className="d-flex my-2 my-lg-0 ms-auto" onSubmit={handleSearch}>
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
  );
}
