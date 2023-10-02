import React from "react";
import "./IT.css";

const IT = () => {

    return (
        <>
            <h2 className="subtitulo">Consultoría estratégica de IT</h2>
            <h3 className="subsub">Nos especializamos en encontrar la mejor solución para todas sus necesidades en tecnología.</h3>
            <div className="contenedorCards">
                <div className="card" style={{ maxWidth: '20rem', maxHeight: '30rem' }}>
                    <img src="./integracion.jpg" className="card-img-top" alt="integracion" />
                    <h5 className="card-title">Integración de sistemas</h5>
                    <div className="card-body">
                        <p className="card-text">Realizamos la integración entre las distintas tecnologías existentes o futuras.</p>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '20rem', maxHeight: '30rem' }}>
                    <img src="./servicios.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">Servicios Administrados</h5>
                    <div className="card-body">
                        <p className="card-text">Administramos de forma remota o precencial su infraestructura tanto en la Nube como On-premise.</p>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '20rem', maxHeight: '30rem' }}>
                    <img src="./gestionproyectos.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">Gestión de proyectos</h5>
                    <div className="card-body">
                        <p className="card-text">Explotamos nuestra experiencia y conocimiento para acompañarlos en sus proyectos.</p>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '20rem', maxHeight: '30rem' }}>
                    <img src="./desarrolloamedida.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">Desarrollo a medida</h5>
                    <div className="card-body">
                        <p className="card-text">Realizamos desarrollo de aplicaciones a medida según las necesidades de cada empresa.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IT;
