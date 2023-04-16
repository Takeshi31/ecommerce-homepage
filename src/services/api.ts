import { IProducts } from "../interfaces/product.interface";

export const getAllProducts = async () => {
  try {
    const response = await fetch('https://gradistore-spi.herokuapp.com/products/all');
    const data: IProducts = await response.json();
    return data.products.nodes
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching all products.');
  }
};
  