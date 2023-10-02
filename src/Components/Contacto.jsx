import React from "react";
import "./Contacto.css";
const Contacto = () => {

    return (
        <>
            <div className="contacto" id="contacto">
                <h4>¡No tenga duda en contactarnos para cualquier proyecto o consulta que tenga!</h4>
                <div className="mail">
                    <img className="mailcito" src="/mail.jpg" alt="mail" />
                    <h5>info@blackit.com.ar</h5>
                </div>
            </div>
        </>
    );
}

export default Contacto;
