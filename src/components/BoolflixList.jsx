export default function BoolflixList({ items, Card }) {
  return (
    <>
      <div className="row p-5 d-flex justify-content-center bg-dark">
        {items.map((item) => (
          <div className="col col-3" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </>
  );
}
