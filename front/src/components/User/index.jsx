// Importation React
import { useState } from "react";

// Importation Redux
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../redux/actions/user.action";

// Importation utilitaire
import { isValideName } from "../../utils/isValidForm";

function User() {
    // Initialisation des States
    const [display, setDisplay] = useState(true); // Gère l'affichage du formulaire d'édition du userName
    const [userName, setUserName] = useState(''); // Stock le userName entré par l'utilisateur
    const [errorMessage, setErrorMessage] = useState(''); // Stock les messages d'erreur
    
    // Création des Hooks
    const dispatch = useDispatch(); // Pour envoyer des actions Redux

    // Sélection des données de l'état global Redux à l'aide du hook useSelector
    const token = useSelector((state) => state.auth.token); // Récupère le token d'authentification
    const userData = useSelector((state) => state.user.userData); // Récupère les données de l'utilisateur
    
    // Fonction de soumission des modifications du userName
    const submitChangeUsername = async (event) => {
        event.preventDefault();
        // Vérification de la validité du nom
        if (!isValideName(userName)) {
            setErrorMessage("Invalid username");
            return
        } else {
            setErrorMessage("");
        }

        try {
            // Appel à l'API pour mettre à jour le userName
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({userName}),
            });
            if (response.status === 200) {
                const data = await response.json();
                const username = data.body.userName;

                // Dispatch de l'action updateUsername pour mettre a jour le userName dans le store Redux
                dispatch(updateUsername(username));

                // Inversion de l'affichage du formulaire d'édition
                setDisplay(!display);
            }
        // Gestion des erreurs
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="header">
            { display ? 
                <>
                    <h1>
                        Welcome back 
                        <br />
                        {userData.firstname} {userData.lastname}
                    </h1>
                    <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
                </>
            : 
                <>
                    <h2>Edit user info</h2>
                    <form className="edit-profile">
                        <div className="edit-profile-input">
                            <label htmlFor="username">User name: </label>
                            <input 
                            type="text"
                            id="username"
                            defaultValue={userData.username}
                            onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="edit-profile-input">
                            <label htmlFor="firstname">First name: </label>
                            <input 
                                id="firstname"
                                type="text"
                                defaultValue={userData.firstname}
                                disabled={true}
                            />
                        </div>
                        <div className="edit-profile-input">
                            <label htmlFor="lasttname">Last name: </label>
                            <input 
                                id="lastname"
                                type="text"
                                defaultValue={userData.lastname}
                                disabled={true}
                            />
                        </div>
                        <div className="edit-profile-button">
                            <button className="edit-button" onClick={submitChangeUsername}>Save</button>
                            <button className="edit-button" onClick={() => setDisplay(!display)}>Cancel</button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </>
            }
        </div>
    )
}

export default User