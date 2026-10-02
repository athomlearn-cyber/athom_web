const DemoBanner = () => {
  return (
    <section className="container py-5 my-4">
      <div className="p-5 bg-light rounded-4 shadow-sm border text-center">
        <h3 className="fw-bold mb-3 text-dark">Mirá la plataforma en acción</h3>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
          Una experiencia fluida, interactiva y pensada para que los equipos aprendan desde cualquier celular en pocos minutos.
        </p>
        
        {/* Contenedor del GIF / Video demostrativo */}
        <div className="d-flex justify-content-center">
          <div className="position-relative shadow rounded overflow-hidden" style={{ maxWidth: '400px', width: '100%' }}>
            <img 
              src="./src/assets/iphone_pro.gif" 
              alt="Demostración de la plataforma de e-learning en celular" 
              className="img-fluid w-100"
            />
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default DemoBanner;