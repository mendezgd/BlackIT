import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {

    return (
        <>
            <div className="containerFooter">
                <Link className="footerLink" to={"/"}><h2>Black It</h2></Link>
                <div className="containerDerechos">
                    <img src="./copy2.png" alt="copyright" />
                    <p className="derechos">Todos los derechos reservados</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
