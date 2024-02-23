import { Products } from "../../@types/products";
import api from "../api";

export const getProducts = async () => {
  const { data } = await api.get<Products[]>("/products");
  return data;
};
