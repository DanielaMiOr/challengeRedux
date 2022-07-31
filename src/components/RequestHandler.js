import axios from "axios";

export const urlDataApi = "http://localhost:3000";

export const getProducts = async () => {
    const res = await axios.get(urlDataApi + "/products");
    return res.data;
   
  };
