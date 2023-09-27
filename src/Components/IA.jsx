import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './IA.css';

const IA = () => {

    return (
        <>
            <Header />
            <h2 className="subtitulo">IA</h2>
            <div className="contenedorCards">
                <div className="card" style={{ maxWidth: '20rem', maxHeight:'30rem' }}>
                    <img src="./BI.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">BI</h5>
                    <div className="card-body">
                        <p className="card-text">Business Intelligence & Data Analytics</p>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '20rem', maxHeight:'30rem' }}>
                    <img src="./ibm.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">Automation Anywhere</h5>
                    <div className="card-body">
                        <p className="card-text">Concentre su esfuerzo en tareas que agreguen valor, nosotros automatizamos el resto.</p>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '20rem', maxHeight:'30rem' }}>
                    <img src="./watson.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">AI a Escala</h5>
                    <div className="card-body">
                        <p className="card-text">Ponga a la Inteligencia Artificial a trabajar a escala en su empresa con nuestra experiencia y nuestra cartera de soluciones.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default IA;
