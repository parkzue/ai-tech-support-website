import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import './NavigationBar.css';
import DarkModeToggle from './DarkModeToggle';
import { createGlobalStyle } from 'styled-components';

//for dark mode
const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => (props.darkMode ? '#1a1a1a' : '#ffffff')};
        color: ${(props) => (props.darkMode ? '#ffffff' : '#000000')};
    }
`;

const NavigationBar = () => {
    const location = useLocation();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

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
            <GlobalStyle darkMode={darkMode} />
            <div className='ModeSwitchContainer'>
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </nav>
    );
};

export default NavigationBar;