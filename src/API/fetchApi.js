import axios from "axios";

const Base_URL = "http://localhost:3005/products";

export const getAllProducts = () => axios.get(Base_URL);
export const getProductById = (id) => axios.get(`${Base_URL}/${id}`);
export const getAllCategories = () => axios.get(Base_URL);
