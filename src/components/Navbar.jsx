import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-4 agro-mica">
      <a href="/" className="text-decoration-none d-flex align-items-center">

          <img 
            src="./src/assets/athom_logo.png" 
            alt="Logo athom learn" 
            style={{ height: '94px', objectFit: 'contain' }} 
            className="me-3"
          />
       
       </a>
      <div className="ms-auto">
        <a href="#contacto" className="btn btn-outline-success">Solicitar Demo</a>
      </div>
    </nav>
  );
};

export default Navbar;