// Importation React
import { NavLink, Link, useNavigate } from 'react-router-dom';

// Importation Redux
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth.action';

// Importation asset
import logo from '../../assets/images/argentBankLogo.webp';

function Header() {
    
    // Création des Hook
    const dispatch = useDispatch(); // Pour envoyer des actions Redux
    const navigate = useNavigate(); // Pour gérer la navigation dans React Router

    // Sélection des données de l'état global Redux à l'aide du hook useSelector
    const isConnected = useSelector((state) => state.auth.isConnected); // Détermine si l'utilisateur est connecté
    const username = useSelector((state) => state.user.userData.username); // Récupère le nom d'utilisateur

    // Fonction de déconnection de l'utilisateur
    const handleLogout = () => {
        // Dispatch de l'action de déconnexion
        dispatch(logout());
        // Nettoyage des données de stockage
        sessionStorage.clear();
        localStorage.clear();
        // Redirection vers la page d'accueil
        navigate('/');
    }

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {isConnected ? (
                    <div className='main-nav-connected'>
                    <NavLink className="main-nav-item" to='/profile'>
                        <i className="fa fa-user-circle"></i>
                        {username}
                    </NavLink>
                    <NavLink className="main-nav-item" to='/' onClick={handleLogout}>
                        <i className='fa fa-sign-out'></i>
                        <p>Sign Out</p>
                    </NavLink>
                    </div>
                ) : (
                    <div>
                        <NavLink className="main-nav-item" to="/login">
                            <i className="fa fa-user-circle"></i>
                            <p>Sign In</p>
                        </NavLink>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header