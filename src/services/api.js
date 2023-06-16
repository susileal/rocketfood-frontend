import axios from "axios"

export const api = axios.create({
  baseURL: 'https://rocketfood-api-ur3w.onrender.com'
});