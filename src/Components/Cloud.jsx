import React from "react";
import './Cloud.css';


const Cloud = () => {

    return (
        <>
            <h2 className="subtitulo">Soluciones Cloud</h2>
            <h3 className="subsub">Ayudamos a las compañías a realizar una transición exitosa hacia la Nube.</h3>
            <div className="contenedorCards">
                <div className="card" style={{ maxWidth: '20rem', maxHeight: '30rem' }}>
                    <img src="./aws.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">AWS</h5>
                    <div className="card-body">
                        <p className="card-text">Transforme sus operaciones y aplicaciones tradicionales en soluciones ágiles y escalables en la nube de AWS.</p>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '20rem', maxHeight: '30rem' }}>
                    <img src="./ibmcloud.jpg" className="card-img-top" alt="checkmk" />
                    <h5 className="card-title">IBM Cloud</h5>
                    <div className="card-body">
                        <p className="card-text">Nuestros profesionales trabajarán junto a ustedes para que la adopción de cualquier Cloud Solution sea de la manera mas ágil, eficiente y con el menor impacto posible.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cloud;
