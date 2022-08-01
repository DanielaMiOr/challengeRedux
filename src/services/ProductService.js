import http from "../http-common";

const getAll = () => {
    console.log("get all data")
  return http.get("/products");
};

const create = data => {
     http.post("/products", data.product);
    return data.product
};

const update = (id, data) => {
    return http.put(`/products/${id}`, data);
  };

  const remove = id => {
    return http.delete(`/products/${id}`);
  };
  
  const ProductService = {
    getAll,
    create,
    update,
    remove,
  };
  
  export default ProductService;