import React, { useState } from "react";
import "../navbar/navbar.css"
import menuIcon from '../assets/menu.png'
import searchIcon from '../assets/searchIcon.png'
import cartLogo from '../assets/cartLogo.png'
import profileIcon from '../assets/profileIcon.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="nav-container">
            <div className="first-time-signUp">
                <p>Sign up and get 20% off to your first order. <a href="/SignUpLogin">Sign Up Now</a></p>
            </div>
            <div className="search-bar-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    <img src={menuIcon} alt="" />
                </div>
                <div className="navbar-items">
                    <p className="Shop-Co">SHOP.CO</p>
                    <p className="button">On Sale</p>
                    <p className="button">New Arrivals</p>
                    <p className="button">Brands</p>
                </div>
                <input className="search-bar" type="search" placeholder="Search for products..." />
                <img className="search-icon" src={searchIcon} alt="searcn icon" />
                <img className="cart-logo" src={cartLogo} alt="cart-Logo" />
                <img className="profile-logo" src={profileIcon} alt="pLogo" />
            </div>
        </section>
    )
}

export default Navbar;