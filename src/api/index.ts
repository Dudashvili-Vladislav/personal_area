import axios from "axios";

const $api = axios.create({
    baseURL: "https://piar.meew.me/",
});

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token)
        config.headers!["user-jwt"] = token;
    return config;
});

export default $api;