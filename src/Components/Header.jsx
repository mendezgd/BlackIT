import React from "react";
import "./Header.css";

const Header = () => {

    return (
        <div className="background-image-container">
            <div className="background-image"></div>
            <div className="overlay"></div>
            <div className="text-container">
                <h1 className="bienvenidos">Bienvenidos a <span className="black">Black It</span></h1>
            </div>
        </div>
    );
}

export default Header;
