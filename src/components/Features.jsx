import React from 'react';

const Features = () => {
  return (
    <section className="container py-5" id="features">
      <h2 className="text-center mb-5 fw-bold agro-mica2">¿Por qué elegir nuestra plataforma?</h2>
      <div className="row g-4">
        <div className="col-md-4 text-center">
          <div className="p-4 border rounded shadow-sm h-100">
            <h3 className="h5 fw-bold text-success">Micro-Learning Móvil</h3>
            <p>Lecciones precisas de video e interactivas. Para consumir directamente desde el celular, optimizando los tiempos de trabajo.</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="p-4 border rounded shadow-sm h-100">
            <h3 className="h5 fw-bold text-success">Controles de Gestión </h3>
            <p>Accesible para cualquier usuario autorizado. Monitoreá el cumplimiento del módulo a través de la emisión de un certificado digital.</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="p-4 border rounded shadow-sm h-100">
            <h3 className="h5 fw-bold text-success">Trazabilidad y SySO</h3>
            <p>Módulos estandarizados sobre buenas prácticas, manejos seguros de maquinarias y protocolos de extracción.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;