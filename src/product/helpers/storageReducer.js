export const storageReducer = (initialState = [], action) => {
  switch (action.type) {
    case "Add to cart":
      return [...initialState, action.payload];

    default:
      return initialState;
  }
};
