import React, { useState } from 'react';

const ContactForm = () => {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  // Opcional: Si quieres manejar el envío mediante fetch de JavaScript para mostrar un mensaje bonito sin recargar la página
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    const formData = new FormData(e.target);

    try {
      // Reemplaza 'tu-codigo-aqui' con el identificador que te da Formspree (ej: f/xyz12345)
      const response = await fetch('https://formspree.io/f/xeaqwwdw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'json'
        }
      });

      if (response.ok) {
        setEnviado(true);
        setCargando(false);
      } else {
        alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.');
        setCargando(false);
      }
    } catch (error) {
      alert('Error de conexión.');
      setCargando(false);
    }
  };

  if (enviado) {
    return (
      <div className="bg-light py-5 text-center" id="contacto">
        <div className="container">
          <div className="alert alert-success p-4 rounded-4 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
            <h3 className="fw-bold mb-2">¡Gracias por contactarte con Athom Learning!</h3>
            <p className="mb-0">Hemos recibido tus datos correctamente. Nos pondremos en contacto a la brevedad.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-light py-5" id="contacto">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="fw-bold mb-4">Transformá la forma de capacitar a tu equipo</h2>
            <p className="mb-4">Dejanos tus datos y te contactaremos para mostrarte cómo funciona nuestra app.</p>
            
            <form onSubmit={handleSubmit} className="text-start">
              <div className="mb-3">
                <label htmlFor="empresa" className="form-label">Nombre de la Empresa / Cooperativa</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="empresa" 
                  name="empresa" /* IMPORTANTE: El atributo name es obligatorio */
                  placeholder="Ej. Agrícola del Sur" 
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico Laboral</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" /* IMPORTANTE: El atributo name es obligatorio */
                  placeholder="contacto@empresa.com" 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-outline-success w-100 btn-lg shadow-sm"
                disabled={cargando}
              >
                {cargando ? 'Enviando...' : 'Solicitar Acceso'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;