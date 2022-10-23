export const getApi = async (product) => {
  const url = `https://front-test-api.herokuapp.com/api/product/`;
  const resp = await fetch(url);
  const data = await resp.json();

  const productResults = data.map((dataProduct) => {
    return {
      id: dataProduct.id,
      brand: dataProduct.brand,
      img: dataProduct.imgUrl,
      model: dataProduct.model,
      price: dataProduct.price,
    };
  });

  return productResults.filter(
    (productResults) =>
      productResults.brand.toLocaleLowerCase().includes(product) ||
      productResults.model.toLocaleLowerCase().includes(product)
  );
};
