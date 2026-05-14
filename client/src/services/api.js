import axios from "axios";

const API = axios.create({
  baseURL: "https://luxejewels-backend.onrender.com/api",
});

export default API;