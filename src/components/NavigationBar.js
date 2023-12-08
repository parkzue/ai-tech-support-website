import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    const location = useLocation();

    const NavItem = ({ to, currentPath, children }) => {
        const isActive = currentPath === to;
        return (
            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                <Link to={to}>{children}</Link>
            </li>
        );
    };

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <NavItem to="/" currentPath={location.pathname}>
                    Home
                </NavItem>
                <NavItem to="/lpe6lpe8" currentPath={location.pathname}>
                    LPe6LPe8
                </NavItem>
                <NavItem to="/lpe6flpe8f" currentPath={location.pathname}>
                    LPe6fLPe8f
                </NavItem>
                <NavItem to="/combigenius" currentPath={location.pathname}>
                    Combi Genius
                </NavItem>
            </ul>
        </nav>
    );
};

export default NavigationBar;