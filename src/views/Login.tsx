import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
    const location = useLocation();
    // temporary for development
    useEffect(() => {
        location.pathname = "/home"
    }, [])

    return (<h1>Login</h1>)
}