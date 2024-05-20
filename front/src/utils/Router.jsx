import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/actions/auth.action";

//Composant importer
import Header from "../components/Header";
import Footer from "../components/Footer";

//Pages importer
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

//Style
import '../styles/main.scss';

function Router() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        const token = sessionStorage.getItem('token') || localStorage.getItem('token');
        if (token) {
            dispatch(loginSuccess(token));
        }
    }, [dispatch]);
    
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    ) 
}

export default Router