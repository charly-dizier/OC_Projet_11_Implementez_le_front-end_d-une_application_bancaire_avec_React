// Importation React
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importation Redux
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../redux/actions/user.action";

// Importation des composants
import Account from "../../components/Account";
import User from "../../components/User";

// Importation des utilitaires
import accountData from "../../utils/data/accountData.json";

function Profile() {

    // Création des Hook
    const dispatch = useDispatch(); // Pour envoyer des actions Redux
    const navigate = useNavigate(); // Pour gérer la navigation dans React Router

    // Sélection des données de l'état global Redux à l'aide du hook useSelector
    const token = useSelector((state) => state.auth.token); // Récupère le token d'authentification
    const isConnected = useSelector((state) => state.auth.isConnected); // Détermine si l'utilisateur est connecté

    // Effect de bord pour rediriger vers la page login si l'utilisateur n'est pas connecté
    useEffect(() => {
        if (!isConnected) {
            navigate("/login"); // Redirection vers la page login
        }
    }, [isConnected, token, navigate])

    // Effect de bors pour charger les données utilisateur à partir de l'API
    useEffect(() => {
        // Vérification de la présence du token
        if (token) {
            // Appel à l'API pour récupérer les donées utilisateur
            const fetchUserData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.status === 200) {
                        const data = await response.json();
                        // Création de l'object UserData
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName
                        }
                        // Dispatch de l'action userProfile pour envoyer les données de userData dans le store Redux
                        dispatch(userProfile(userData));

                    // Dans le cas d'un status autre que 200
                    } else {
                        console.log("error while retrieving profile");
                    }
                // Gestion des erreurs du try    
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUserData();
        }
    }, [dispatch, token]);

    return (
        <main className="main bg-dark">
            <User />
            <h2 className="sr-only">Accounts</h2>
            {/* Mapping des data account pour afficher les comptes */}
            {accountData.map((data) => (
                <Account 
                    key={data.id}
                    title={data.title}
                    amount={data.amount}
                    description={data.description}
                />
            ))}
        </main>
    )
}

export default Profile