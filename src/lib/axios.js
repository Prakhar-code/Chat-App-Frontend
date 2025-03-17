import axios from 'axios'

// PORT = process.env.PORT || 5000;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api',
  withCredentials: true,
}) 

export default axiosInstance;
