import axios from "axios";

//created axios instance to make it reusuable...
const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
})

export default axiosInstance;