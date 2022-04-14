import axios from "axios";

const BASE_URL = 'https://eclectic-sunflower-60097b.netlify.app/';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});