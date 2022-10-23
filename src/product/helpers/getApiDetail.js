export const getApiDetail = async (id) => {
  const url = `https://front-test-api.herokuapp.com/api/product/${id}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
