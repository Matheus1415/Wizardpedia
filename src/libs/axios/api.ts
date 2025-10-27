import axios from "axios";

export const Api = axios.create({
  baseURL: "https://hp-api.onrender.com/api/",
  headers: {
    Accept: "application/json",
  },
});
