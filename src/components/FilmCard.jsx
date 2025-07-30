import LanguageFlags from "./LanguageFlags";
import StarRating from "./StarRating";

export default function FilmCard({ data }) {
  return (
    <div className="card p-3 m-3 ">
      <div className="card-head">
        <img
          src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
          alt={data.title}
        />
        <h4 className="card-title">{data.title}</h4>
        <h5 className="card-title">{data.original_title}</h5>
        <h6 className="card-title">Movie</h6>
      </div>
      <div className="card-body">
        <p className="card-text fw-bold"> Lingua originale </p>
        <p className="flag-icon">
          <LanguageFlags language={data.original_language} />
        </p>
        <p className="card-text">
          <span className="fw-bold"> Voto </span>
          <StarRating vote={data.vote_average} />
        </p>
      </div>
    </div>
  );
}
