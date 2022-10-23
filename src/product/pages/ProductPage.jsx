import { useState } from "react";
import { ProductGrid } from "../components/ProductGrid";
import { SearchProduct } from "../components/SearchProduct";

export const ProductPage = () => {

  const [products, setProducts] = useState(['']);

  const onAddProduct = (newProduct) => {
    setProducts([newProduct]);
  }


  return (
    <main>
      <SearchProduct onSearchProduct={onAddProduct} />
      {
        products.map((product) => (
          <ProductGrid
            key={product}
            product={product}
          />
        ))
      }
    </main>
  )
}

