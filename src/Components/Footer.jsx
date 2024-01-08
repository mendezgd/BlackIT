import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {

    return (
        <div className="containerFooter">
            <Link className="footerLink" to={"/"}>
                <img className="logoFoot" src="logopox.png" alt="logo" />
                <h3>Black It</h3>
                <div className="containerDerechos">
                    <img src="./copy2.png" alt="copyright" />
                    <p className="derechos">Todos los derechos reservados</p>
                </div>
            </Link>

        </div>
    );
}

export default Footer;
