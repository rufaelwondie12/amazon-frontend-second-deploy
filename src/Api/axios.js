import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/for-presentation-ac7cd/us-central1/api",
  baseURL: "https://amazon-backend-second-deploy.onrender.com/",
});

export { axiosInstance };
