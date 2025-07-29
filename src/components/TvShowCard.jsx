import LanguageFlags from "./LanguageFlags";

export default function ShowCard({ data }) {
  return (
    <div className="card p-3 m-3 ">
      <div className="card-head">
        <img
          src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
          alt={data.name}
        />
        <h4 className="card-title">{data.name}</h4>
        <h5 className="card-title">{data.original_name}</h5>
        <h6 className="card-title">Tv Show</h6>
      </div>
      <div className="card-body">
        <p className="card-text fw-bold"> Lingua originale </p>
        <p className="flag-icon">
          <LanguageFlags language={data.original_language} />
        </p>
        <p className="card-text">
          <span className="fw-bold"> Voto </span>
          {data.vote_average.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
