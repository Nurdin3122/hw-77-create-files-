import axios from 'axios';
const axiosApi = axios.create({
    baseURL: 'http://localhost:8030'
});
export default axiosApi;