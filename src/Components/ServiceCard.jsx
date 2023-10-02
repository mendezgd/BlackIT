import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard() {
    return (
        <>
            <h2 className="Servicios">Nuestros Servicios</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2">
                    <Link className="linkCard col-12 mb-3" to="/Monitoreo">
                        <div className="card" style={{ maxWidth: '800px', minHeight: '180px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/desarrollo.jpeg" className="img-fluid rounded-start" alt="Monitoreo" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Monitoreo</h5>
                                        <p className="card-text">Monitoreo de salud de aplicaciones, servicios y hardware para anticiparse a los problemas.</p>
                                        <p className="card-text"><small className="text-body-secondary">Más detalles</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className="linkCard col-12 mb-3" to="/AI">
                        <div className="card" style={{ maxWidth: '800px', minHeight: '180px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/IA.jpeg" className="img-fluid rounded-start" alt="AI" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">AI</h5>
                                        <p className="card-text">Especialistas en IBM Watson para llevar adelante su proyecto Inteligencia Artificial.</p>
                                        <p className="card-text"><small className="text-body-secondary">Más detalles</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className="linkCard col-12 mb-3" to="/Cloud">
                        <div className="card" style={{ maxWidth: '800px', minHeight: '180px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/cloud.jpg" className="img-fluid rounded-start" alt="Nube" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Cloud Solutions</h5>
                                        <p className="card-text">Ayudamos a las compañías a realizar una transición exitosa hacia la Nube.</p>
                                        <p className="card-text"><small className="text-body-secondary">Más detalles</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className="linkCard col-12 mb-3" to="/IT">
                        <div className="card" style={{ maxWidth: '800px', minHeight: '180px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/consultoria.jpeg" className="img-fluid rounded-start" alt="monitoreo" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Consultoría de TI</h5>
                                        <p className="card-text">Nos especializamos en encontrar la mejor solución para todas sus necesidades en tecnología.</p>
                                        <p className="card-text"><small className="text-body-secondary">Más detalles</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ServiceCard;
