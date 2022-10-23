import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductDetailItem } from "../components/productDetailItem";
import { ProductDetailOption } from "../components/ProductDetailOption";
import { getApiDetail } from "../helpers/getApiDetail";

export const ProductDetail = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const newproducts = await getApiDetail(id);
    setProducts(newproducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const { id } = useParams();

  const onNavigateBack = () => {
    navigate("/product");
  };

  return (
    <div>
      <div className="card-detail-container">
        {<ProductDetailItem key={products.id} {...products} />}
        {
          <ProductDetailOption
            onId={id}
            key={products.model}
            {...products.options}
          />
        }

        <div className="add">
          <button className="button" onClick={onNavigateBack}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
