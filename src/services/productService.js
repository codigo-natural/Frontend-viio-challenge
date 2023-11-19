import axios from "../utils/axios";

export const productService = {
  getProducts: async () => {
    try {
      // obtener la lista de productos del backend
      const response = await axios.get('/api/products');
      return response.data.products;
    } catch (error) {
      throw new error('Error al obtener productos')
    }
  },

  searchProducts: async (searchTerm) => {
    try {
      const response = await axios.get(`/api/products/search?term=${searchTerm}`);
      return response.data.products;
    } catch (error) {
      throw new error('Error al buscar productos')
    }
  }
}