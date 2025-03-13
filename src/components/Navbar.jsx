import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">My Portfolio</div>
            <div>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
