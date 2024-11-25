import { useNavigate } from "react-router";

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header d-flex justify-content-between align-items-center m-0 p-4 bg-primary text-white">
            <h1 className="me-4">PERSONALIZED ACHIEVEMENT SUMMARY SYSTEM</h1>
            <div className="d-flex">
                <h1 className="me-4" onClick={() => navigate("/admin")} role="button">Administration</h1>
                <h1 className="me-4">|</h1>
                <h1 className="me-4" onClick={() => navigate("/home")} role="button">Customer</h1>
            </div>
            <h4>kristinl@hewittlearning.org</h4>
        </div>
    )
}