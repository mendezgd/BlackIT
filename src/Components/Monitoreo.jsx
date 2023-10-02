import React from "react";
import './Monitoreo.css';

const Monitoreo = () => {

    return (
        <div>
            <h2 className="subtitulo">Monitoreo</h2>
            <h3 className="subsub">Nuestro pilar es la plataforma Check_MK, pudiendo configurarse a medida de nuestros clientes.</h3>
            <div className="contenedorCards">
                <div className="card" style={{ maxWidth: '24rem' }}>
                    <img src="./checkmk.jpeg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">Reporting y KPIs</h5>
                    <div className="card-body">
                        <p className="card-text">Reportes y métricas customizables para visualizaciones en tiempo real.</p>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '24rem' }}>
                    <img src="./discover.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">Discovering</h5>
                    <div className="card-body">
                        <p className="card-text">Descubrimiento, modelado y visualización de la de arquitectura en tiempo real.</p>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '24rem' }}>
                    <img src="./gestion.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">Gestión de activos</h5>
                    <div className="card-body">
                        <p className="card-text">Nos especializamos en encontrar la mejor solución para todas sus necesidades en tecnología.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Monitoreo;
