import axios from 'axios';

// Create an Axios instance
/**
 * Axios instance for making HTTP requests.
 */
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
	withCredentials: true
});

export default axiosInstance;