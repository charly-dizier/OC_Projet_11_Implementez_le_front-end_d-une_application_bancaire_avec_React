import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Composant importer
import Header from "../components/Header";

//Pages importer
import Home from "../pages/Home";
import Login from "../pages/Login";

//Style
import '../styles/main.scss'

function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    ) 
}

export default Router