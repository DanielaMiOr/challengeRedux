import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
  } from "./types";
  
  import ProductDataService from "../services/ProductService";
  
  export const createProduct = (product) => async (dispatch) => {
    try {
      const res = await ProductDataService.create({ product });
      console.log("before dispatch"+product)
      dispatch({
        type: CREATE_PRODUCT,
        payload: res,
      });
  
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveProducts = () => async (dispatch) => {
    try {
      const res = await ProductDataService.getAll();
      console.log(res.data.products)
      dispatch({
        type: RETRIEVE_PRODUCTS,
        payload: res.data.products,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateProduct = (id, data) => async (dispatch) => {
    try {
      const res = await ProductDataService.update(id, data);
  
      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteProduct = (id) => async (dispatch) => {
    try {
      await ProductDataService.remove(id);
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
