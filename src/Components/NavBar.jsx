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
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Servicios
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Monitoreo">
                                        Monitoreo
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="/AI">
                                        AI
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="/Cloud">
                                        Cloud Solutions
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="/IT">
                                        Consultoría de TI
                                    </Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
