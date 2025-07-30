const stars = Array(5).fill(0);

export default function StarRating({ vote }) {
  const filledStars = Math.ceil(Number(vote / 2));
  return (
    <>
      {stars.map((_, index) => {
        return (
          <>
            <i
              key={index}
              className="fa-solid fa-star"
              style={{ color: index < filledStars ? "#FFD43B" : "#b1b0af" }}
            />
          </>
        );
      })}
    </>
  );
}
