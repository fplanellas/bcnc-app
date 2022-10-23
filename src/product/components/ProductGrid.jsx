import { useState, useEffect } from "react";
import { getApi } from "../helpers/getApi";
import { ProductItem } from "./ProductItem";
import Swal from "sweetalert2";

export const ProductGrid = ({ product }) => {
  const [showResultsActive, setShowResultsActive] = useState(false);

  const [productResults, setProductResults] = useState([]);

  const getProductResults = async () => {
    const newProductResults = await getApi(product);

    if (newProductResults.length === 0) {
      errorMsg();
      reloadInit();
    }

    if (newProductResults.length > 0 && product.length > 0) {
      setShowResultsActive(true);
    }

    setProductResults(newProductResults);
  };

  useEffect(() => {
    getProductResults();
  }, []);

  const errorMsg = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: "No hay resultados de esta búsqueda!",
    });
  };

  const reloadInit = () => {
    product = "";
    getProductResults();
  };

  return (
    <div>
      <p
        className="success"
        style={{ display: showResultsActive ? "block" : "none" }}
      >
        Mostrando resultados de <strong>{product}</strong>
      </p>

      <div className="card-container">
        {productResults.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
