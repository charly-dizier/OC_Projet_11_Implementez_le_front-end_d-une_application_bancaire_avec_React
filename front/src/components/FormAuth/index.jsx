// Importation React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importation Redux
import { useDispatch } from "react-redux";
import { loginFail, loginSuccess } from "../../redux/actions/auth.action";

// Importation utilitaire
import { isValidEmail, isValidPassword } from "../../utils/isValidForm";

function FormAuth() {
    // Définition des States pour gérer les champs de saisie et la case "Remember me"
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Création des Hook
    const dispatch = useDispatch(); // Pour envoyer des actions Redux
    const navigate = useNavigate(); // Pour gérer la navigation dans React Router

    // Fonction de soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Récupération des champs d'entrée par leur ID
        const inputEmail = document.getElementById('username')
        const inputPassword = document.getElementById('password')

        // Vérification de la validité de l'email
        if (!isValidEmail(email)) {
            inputEmail.style.border = 'solid 4px red';
            alert("Veuillez saisir un email valid !");
            console.log("email non valid !")
            return;
        } else {
            inputEmail.style.border = 'solid 1px'
        }

        // Vérification de la validité du mot de passe
        if (!isValidPassword(password)) {
            inputPassword.style.border ='solid 4px red'
            alert("Mot de passe trop court ! 5 caractère minimum")
            console.log("mot de passe trop court");
            return;
        } else {
            inputPassword.style.border = 'solid 1px'
        }

        try {
            // Appel à l'API pour la connexion utilisateur
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email, password}),
            });

            if (response.status === 200) {
                const data = await response.json();
                const token = data.body.token;

                // Dispatch de l'action loginSuccess avec le token en argument
                dispatch(loginSuccess(token));

                // Stockage du token en fonction du bouton "Remember me"
                if (!rememberMe) {
                    sessionStorage.setItem("token", token)
                }
                if (rememberMe) {
                    localStorage.setItem("token", token);
                }

                // Redirection vers la page profil
                navigate('/profile');
            
            // Dans le cas d'un status autre que 200 (donc échec de connection)
            } else {
                const error = "Identification incorrect"
                // Dispatch de l'action loginFail avec le message d'erreur en argument
                dispatch(loginFail(error));
            }
        // Gestion des erreurs du try
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input 
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}

export default FormAuth