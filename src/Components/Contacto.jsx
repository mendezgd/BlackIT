import React, { useState } from 'react';
import './Contacto.css'
import Header from './Header';

const Contacto = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        query: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor
        console.log(formData);
    };

    return (
        <>
            <Header />
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputQuery" className="form-label">Query</label>
                    <textarea
                        className="form-control"
                        id="exampleInputQuery"
                        rows="3"
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );

};

export default Contacto;
