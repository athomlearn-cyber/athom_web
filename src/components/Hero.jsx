import React from 'react';

const Hero = () => {

  return (
    <header className="hero-bg text-white text-center" id="home">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/cosechadora.mp4" type="video/mp4" />
      </video> 

      <div className="container py-5 hero-content">
        <h1 className="display-4 fw-bold">Capacitaciones ágiles para la industria que mueve al país</h1>
        <p className="lead mt-3 mb-4 mx-auto" style={{ maxWidth: '799px' }}>
          Plataforma de micro-learning diseñada a medida para los sectores agropecuarios y apícolas.  <br />
          Estandarizá tus procesos, mejorá las normativas de seguridad de tu empresa y capacitá a tus equipos en módulos dinámicos personalizados.
        </p>
        <a href="#contacto" className="btn btn-light btn-lg text-success fw-bold mt-2">
          Agendar demostración
        </a>
      </div>
    </header>
  );
};

export default Hero;