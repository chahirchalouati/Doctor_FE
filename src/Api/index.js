import Axios from "axios";
import { tokenStore } from "../Services/tokenStore";


const client = Axios.create({
    baseURL: 'http://localhost:8080',

});
// Add a request interceptor
client.interceptors.request.use(
    (config) => {
        const token = tokenStore.getToken();
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
export default client;