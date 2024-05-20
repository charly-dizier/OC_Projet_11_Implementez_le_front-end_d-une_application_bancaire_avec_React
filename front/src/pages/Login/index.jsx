import { useEffect } from "react";
import FormAuth from "../../components/FormAuth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {

    const isConnected = useSelector((state) => state.auth.isConnected)
    const navigate = useNavigate();

    useEffect(() => {
        if (isConnected) {
            navigate("/profile");
        }
    }, [isConnected, navigate,])

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <FormAuth />
            </section>
        </main>
    )
}

export default Login