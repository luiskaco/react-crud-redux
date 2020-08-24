import React from 'react';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>CRUD - React, Redux,  REST API & Axios</h1>
            </div>

            <a href="/producto/nuevo" 
                className="btn btn-danger nuevo-´pst d-block d-md-inline-block"
            
            >Agregar producto &#43;</a>
        </nav>
    );
}

export default Header;