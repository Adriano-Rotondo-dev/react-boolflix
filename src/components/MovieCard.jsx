import LanguageFlags from "./LanguageFlags";
import StarRating from "./StarRating";

export default function FilmCard({ data }) {
  return (
    <div className="card mb-3 border-light border-5">
      <img
        src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
        alt={data.title}
      />
      <div className="card-hover">
        <h4 className="card-title">{data.title}</h4>
        <h5 className="card-title">{data.original_title}</h5>
        <p className="card-text">
          <span className="fw-bold"> Voto </span>
          <StarRating vote={data.vote_average} />
        </p>
        <p className="card-text fw-bold"> Lingua originale </p>
        <p className="flag-icon">
          <LanguageFlags language={data.original_language} />
        </p>
      </div>
    </div>
  );
}
