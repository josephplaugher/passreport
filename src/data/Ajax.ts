import axios, { InternalAxiosRequestConfig } from "axios";
// import GetApiUrl from "../utils/GetApiUrl";

// const s = GetApiUrl()
const AxiosClientPostFile = axios.create({ 
    baseURL: import.meta.env.VITE_API_URL_DEV,
})

AxiosClientPostFile.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        config.headers["Content-Type"] = 'multipart/form-data'
        return config;
    }
);

const AxiosClient = axios.create({ 
    baseURL: import.meta.env.VITE_API_URL_DEV,
})

AxiosClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        config.headers["Content-Type"] = 'application/json'
        return config;
    }
);


export { AxiosClientPostFile, AxiosClient }