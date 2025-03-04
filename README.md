# FRONT DESAFÍO TENPO

## 🚀 Instalación y ejecución

Para correr el proyecto en local, sigue estos pasos:

1. Crea un archivo `.env` en la raíz del proyecto y agrega lo siguiente:

```env
VITE_API_URL=http://localhost:3000
VITE_AUTH_URL=http://localhost:3000
VITE_SECURITY_URL=http://localhost:3000
```

2. Instala las dependencias:

```sh
npm install
```

3. Inicia el proyecto:

```sh
npm run dev
```

---

## 🔹 Uso de la aplicación

- **Registro:** Crea una cuenta con email y contraseña cumpliendo las validaciones establecidas.
- **Inicio de sesión:** Accede con tus credenciales y visualiza la lista de usuarios con paginación.
- **Autenticación persistente:** Se gestiona con JWT y Refresh Tokens para mantener la sesión activa.

---

## 🛠️ Pruebas

El proyecto está configurado con pruebas unitarias, de integración y end-to-end (e2e):

### 🧪 Pruebas unitarias e integración

```sh
npm run test
```

### 🔍 Pruebas end-to-end (e2e)

```sh
npm run test:e2e
```

---

## Estrategia de Autenticación y Seguridad

- Se usa **Bearer Tokens** para autenticación en cada solicitud al backend.
- Implementación de **Refresh Tokens** para renovar el `accessToken` sin necesidad de credenciales nuevamente.
- Los tokens se manejan en **cookies seguras** y en **memory storage** para prevenir vulnerabilidades.

---

## Estilos

- Se utilizan **Styled Components** para manejar temas dinámicos y aislar estilos en cada componente.
- Implementación de **modo claro y oscuro** con cambio en tiempo real.

---

## Arquitectura

El proyecto sigue un **enfoque Hexagonal con Vertical Slicing** para mejorar la escalabilidad y modularización:

- **Módulos bien definidos** para cada funcionalidad.
- **Separación de responsabilidades** entre dominio, infraestructura y aplicación.
- **Microservicios simulados en NestJS**, facilitando la migración a una arquitectura más robusta.

---

## Manejo de Rutas

- Se utilizan **rutas privadas y públicas** con React Router.
- Las rutas privadas requieren autenticación y redirigen al usuario si no tiene sesión activa.
- Gestión de errores y redirecciones para evitar accesos no deseados

## RECUERDA LEVANTAR EL BACKEND A LA VEZ!!

https://github.com/MEMEMEMEMEMEMEDev/backDesafioTenpo

## Sugerencias de mejora

- Implementar paginación en el backend (por ejemplo: GET /users?page=1&limit=20).
- Usar Lazy Loading y Code Splitting con React.lazy().
- Optimizar Styled Components mediante Global Styles.
- Mejorar la cobertura de tests (coverage) y el desarrollo de pruebas.
- Invalidar el refreshToken en dispositivos sospechosos.
- Implementar protección CSRF al usar cookies.
- Aplicar Rate Limiting en la ruta /auth/login.
- Manejar errores en la UI con mensajes más descriptivos.
- Incorporar un servicio de logs en el backend.
- Mejorar la UI
- Configurar servicio mockeado (json-server/MSW)
