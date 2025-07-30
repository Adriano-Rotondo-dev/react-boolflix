import LanguageFlags from "../LanguageFlags";
import StarRating from "../StarRating";

export default function ShowCard({ data }) {
  return (
    <div className="card m-3 border-light border-5">
      <img
        src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
        alt={data.name}
      />

      <div className="card-hover bg-black p-3">
        <div className="card-hover-text">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-title">{data.original_name}</h6>
          <p className="card-text">
            <span className="fw-bold"> Voto </span>
            <StarRating vote={data.vote_average} />
          </p>
          <p className="card-text fw-bold"> Lingua originale </p>
          <p className="flag-icon">
            <LanguageFlags language={data.original_language} />
          </p>
          <p className="card-text fw-bold"> Overview </p>
          <p className="fs-6">{data.overview}</p>
        </div>
      </div>
    </div>
  );
}
