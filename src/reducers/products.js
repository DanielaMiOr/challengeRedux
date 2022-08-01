import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
  } from "../actions/types";
  
  const initialState = [];
  
  const productReducer = (products = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_PRODUCT:
        return [...products, payload];
  
      case RETRIEVE_PRODUCTS:
        return payload;
  
      case UPDATE_PRODUCT:
        return products.map((product) => {
          if (product.id === payload.id) {
            return {
              ...products,
              ...payload,
            };
          } else {
            return products;
          }
        });
  
      case DELETE_PRODUCT:
        console.log(payload.upc)
        console.log(products)
        const filtered = products.filter((product) => product.upc !== payload.upc);
        console.log(filtered)
        return products.filter((product) => product.upc !== payload.upc);
  
     
      default:
        return products;
    }
  };
  
  export default productReducer;