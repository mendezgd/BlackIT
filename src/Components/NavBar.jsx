import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom border-body " data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Black It</Link>
                    <button className="navbar-toggler" data-bs-theme="dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Servicios">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
