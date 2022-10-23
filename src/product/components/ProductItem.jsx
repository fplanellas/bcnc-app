import { Link } from "react-router-dom";

export const ProductItem = ({ brand, id, img, price, model }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="card">
        <img className="box1" src={img} alt={model} />

        <div>
          <h2>
            {brand} {model}
          </h2>
          <p>Precio: {price} €</p>
        </div>
      </div>
    </Link>
  );
};
