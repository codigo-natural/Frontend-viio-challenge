import axios from "../utils/axios";

export const authService = {
  login: async (email, password) => {
    try {
      // enviar solicitud de inicio de session al backend
      const response = await axios.post("/api/auth/signin", { email, password },);
      return response.data.token;
    } catch (error) {
      throw new error('Error al iniciar session')
    }
  },
  register: async (username, email, password) => {
    try {
      // enviar solicitud de registro al backend
      await axios.post("/api/auth/signup", { username, email, password });
    } catch (error) {
      throw new error('Error al registrar usuario')
    }
  }
}