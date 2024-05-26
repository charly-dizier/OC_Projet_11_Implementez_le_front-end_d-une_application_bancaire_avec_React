// Importation React 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importation Redux
import { useSelector } from "react-redux";

// Importation des composants
import FormAuth from "../../components/FormAuth";

function Login() {

    // Création des Hook
    const navigate = useNavigate(); // Pour gérer la navigation dans React Router
    const isConnected = useSelector((state) => state.auth.isConnected) // Récupération de l'état de connexion depuis le store Redux

    // Effect de bord pour rediriger vers la page de profil si l'utilisateur est déjà connecté
    useEffect(() => {
        if (isConnected) {
            navigate("/profile"); // Redirection vers la page de profil
        }
    }, [isConnected, navigate])

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