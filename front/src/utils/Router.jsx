import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/actions/auth.action";

// Importation des composants
import Header from "../components/Header";
import Footer from "../components/Footer";

// Importation des pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PageNotFound from "../pages/PageNotFound";

// Importation des styles
import '../styles/main.scss';

function Router() {
    
    // Utilisation du hook useDispatch pour obtenir la fonction de dispatch de Redux
    const dispatch = useDispatch();

    // Vérification de la présence du token dans le storage
    useEffect(() => {
        const token = sessionStorage.getItem('token') || localStorage.getItem('token');
        // Si le token est présent, on dispatch l'action loginSuccess avec le token en argument
        if (token) {
            dispatch(loginSuccess(token));
        }
    }, [dispatch]); // useEffect dépend de dispatch
    
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    ) 
}

export default Router