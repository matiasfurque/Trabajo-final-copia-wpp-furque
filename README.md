# Chat de Fútbol ⚽ (Copia de WhatsApp)

### Descripción del proyecto
Es una aplicación de chat inspirada en WhatsApp con una temática de fútbol. Permite a los usuarios iniciar sesión, registrarse, ver una lista de contactos (jugadores de fútbol famosos) y simular envio de mensajes en tiempo real. La aplicación cuenta con  animaciones fluidas y es totalmente responsiva para dispositivos móviles.

### Tecnologías utilizadas
*   **React 19**: Biblioteca principal para la interfaz de usuario.
*   **Vite**: Herramienta de construcción y servidor de desarrollo ultra rápido.
*   **React Router 7**: Gestión de navegación y rutas dinámicas (`BrowserRouter`).
*   **Context API**: Manejo de estado global para autenticación y chats.
*   **CSS3**: Estilos personalizados con variables, flexbox, grid y media queries para diseño responsivo.
*   **LocalStorage**: Persistencia de datos de usuarios registrados y mensajes.

### Instrucciones para ejecutar el proyecto localmente
1.  Clonar el repositorio.
2.  Abrir una terminal en la carpeta del proyecto.
3.  Instalar las dependencias:
    ```bash
    npm install
    ```
4.  Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```
5.  Abrir el navegador en `http://localhost:5173`.


### Explicación de la estructura del proyecto
*   **`src/components`**: Componentes reutilizables como el `Chat`, `Aside` y `RouteProtected`.
*   **`src/context`**: `ChatContext.jsx` maneja el estado global de la app (usuario logueado, chats, selección de contactos).
*   **`src/pages`**: Páginas principales como `Registro` y `Acerca`.
*   **`src/router`**: Configuración de rutas con `BrowserRouter`.
*   **`src/services`**: `mockApi.js` contiene la base de datos inicial de jugadores y mensajes.
*   **`src/styles`**: `main.css` contiene todos los estilos y media queries para diseño responsivo.
*   **`src/views`**: Vistas de la aplicación como `Home`, `Login` y `NotFound`.
*   **`index.html`**: Punto de entrada HTML.
*   **`vercel.json`**: Configuración específica para el despliegue en Vercel.

---

Este proyecto fue desarrollado como parte de un trabajo final de la UTN, enfocándose en la estética visual y la funcionalidad móvil.
