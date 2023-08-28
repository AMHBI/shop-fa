import axios from "axios";

const BASE_URL = "https://didital.net/api";

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data.products;
};

