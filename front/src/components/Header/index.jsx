import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/argentBankLogo.webp'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/auth.action';

function Header() {
    const isConnected = useSelector((state) => state.auth.isConnected);
    const username = useSelector((state) => state.user.userData.username);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
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