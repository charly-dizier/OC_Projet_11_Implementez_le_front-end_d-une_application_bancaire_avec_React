import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

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
    const isLogged = useSelector((state) => state.auth.isConnected)
    
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={isLogged ? <Profile /> : <Navigate to="/login" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    ) 
}

export default Router