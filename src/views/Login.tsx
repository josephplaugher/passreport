import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AxiosClient, AxiosClientPostFile } from "../data/Ajax";

export default function Login() {
    const location = useLocation();
    const formRef = useRef<HTMLFormElement>(null)
    const [error, setError] = useState("");

    // temporary for development
    useEffect(() => {
        // location.pathname = "/home"
    }, [])

    function validate() {
        if (formRef.current && formRef.current.checkValidity()) {
            return true;
        } else {
            return false;
        }
    }

    async function submit(event: any) {
        event.preventDefault()
        if (!formRef?.current) return;
        const formData = new FormData(formRef.current);
        const validForm: boolean = validate();
        if (!validForm) return;
        // If using Client Credentials Grant (adjust accordingly):
        // payload.append('grant_type', 'client_credentials');

        // If using Authorization Code Grant (adjust accordingly):
        // payload.append('grant_type', 'authorization_code');
        // payload.append('code', 'authorization-code-received-from-miniorange');
        // payload.append('redirect_uri', redirectUri);

        // If using Resource Owner Password Credentials Grant:
        const clientId = 'cIELRyHCFZXRgAFgOEnQDCEISfecZhRJ';
        const clientSecret = 'YrVGHmROPGgkyAnjJOUjyLwjesFQezld';
        const tokenEndpoint = 'https://hewittlearning.org/wp-json/moserver/authorize';

        try {
            // Prepare the payload based on the OAuth 2.0 flow you are using
            const payload = new URLSearchParams();
            // Add client credentials
            payload.append('client_id', clientId);
            payload.append('client_secret', clientSecret);
            const username = String(formData.get("username")); // For Resource Owner Password Grant
            const password = String(formData.get("password")); // For Resource Owner Password Grant
            payload.append('grant_type', 'password');
            payload.append('username', username);
            payload.append('password', password);

            console.log("payload", payload)
            const response = await AxiosClient.post(tokenEndpoint, payload, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            // Handle successful response
            console.log('Authentication successful:', response.data);

            // Use the access token as needed
            const accessToken = response.data.access_token;
            console.log('Access Token:', accessToken);
        } catch (error: any) {
            // Handle errors
            if (error.response) {
                console.error('Error response:', error.response.data);
            } else {
                console.error('Error:', error.message);
            }
        }
    }

    return (
        <div className="d-flex flex-column justify-content-around  p-5 rounded w-auto">
            <h1 className="">PASS Test Results</h1>
            <div className="d-flex flex-column align-items-center p-5 bg-secondary">
                <form id="form" onSubmit={(e) => submit(e)} ref={formRef}>
                    <div className="form-group mb-5">
                        <label htmlFor="username" className="text-white">User Name</label>
                        <input name="username" type="text" className="form-control" />
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="password" className="text-white">Password</label>
                        <input name="password" type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}