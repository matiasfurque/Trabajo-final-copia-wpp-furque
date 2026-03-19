export const Acerca = () => {
  return (
    <div className="main-container">
      <div className="container">
      <h1>Acerca del Proyecto</h1>

      <h2>Descripción</h2>
      <p>
       Esta aplicación consiste en un sistema de chat desarrollado en React,
        donde los usuarios pueden iniciar sesión, seleccionar contactos y enviar mensajes en tiempo real.
      </p>

      <h2>Tecnologías utilizadas</h2>
      <ul>
        <li><a href="https://react.dev/"target="_blank">React</a></li>
        <li><a href="https://www.w3schools.com/js/"target="_blank">JavaScript</a></li>
        <li><a href="https://www.w3schools.com/css/"target="_blank">CSS</a></li>
        <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
      </ul>
    
      <h2>Decisiones de desarrollo</h2>
      <p>
      Separación entre usuarios del chat y usuarios registrados, Persistencia de datos con LocalStorage
      </p>

      <h2>Observaciones personales</h2>
      <p>
       Este proyecto me permitió entender mejor el manejo de estado en React,
        la persistencia de datos y la organización de componentes.
      </p>

      <h2>Dificultades</h2>
      <p>
        Uno de los principales desafíos fue separar correctamente la lógica de autenticación
        de la lógica del chat y evitar mezclar los usuarios registrados con los contactos.
      </p>
    </div>
    </div>
  );
};