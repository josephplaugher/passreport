export default function GetApiUrl(): string {
    console.log(import.meta.env.VITE_API_URL_DEV)
    let url;
    if(import.meta.env.NODE_ENV === "development") {
        url = import.meta.env.VITE_API_URL_DEV
    } else {
        url = import.meta.env.VITE_API_URL_PROD;
    } 
    return url
}