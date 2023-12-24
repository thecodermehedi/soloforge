import axios from "axios";

const axiosSecure = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV,
  withCredentials: true,
});

console.log(import.meta.env.VITE_ENV, import.meta.env.VITE_API_URL_PROD, import.meta.env.VITE_API_URL_DEV);

export default axiosSecure;
