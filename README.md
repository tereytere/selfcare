# 🚀 SelfCare - Aplicación Web Fullstack

<div align="center">
  <h2 align="center">Una plataforma integral de gestión de rutinas de autocuidado</h2>
  <p align="center">Construida con tecnologías web modernas y mejores prácticas</p>
  <p align="center"><strong>Proyecto Grupal - 6 Desarrolladores - 1 Semana</strong></p>
</div>

![SelfCare Banner](https://github.com/user-attachments/assets/29bda9b3-a58c-4c2e-8067-6467889b44a4)

## 🌟 En este proyecto puedes:

- 🌱 **Encontrar todo tipo de rutinas** faciales, corporales, de cabello y más!
- 👯 **Una comunidad de personas** que publican sus propias rutinas y puedes seguir
- ⚡ **Se detallan todos los productos** necesarios para cada rutina
- 💬 **Podrás dar tu opinión** de si te funciona o no, y leer las de los demás
- 😄 **Te localizamos** para que puedas encontrar los productos en tu zona

## 👥 Información del Proyecto

**SelfCare** es un proyecto grupal desarrollado en **1 semana** por un equipo de **6 desarrolladores fullstack**, incluyéndome. Aunque he contribuido significativamente en la mayoría de los archivos, este proyecto representa el trabajo colaborativo de todo el equipo.

**Tecnologías utilizadas**: Angular 18, Node.js, MongoDB, Express.js, TypeScript, y más.

## 👨‍💻 Equipo de Desarrollo

<div align="center">
  <h3>Nuestro increíble equipo de desarrolladores</h3>
</div>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/tereytere">
        <img src="https://avatars.githubusercontent.com/tereytere" width="100px;" alt="Teresa Ambroa"/>
        <br />
        <sub><b>Teresa Ambroa</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/COLABORADOR1">
        <img src="https://avatars.githubusercontent.com/COLABORADOR1" width="100px;" alt=""/>
        <br />
        <sub><b>Nombre Colaborador 1</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/COLABORADOR2">
        <img src="https://avatars.githubusercontent.com/COLABORADOR2" width="100px;" alt=""/>
        <br />
        <sub><b>Nombre Colaborador 2</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/COLABORADOR3">
        <img src="https://avatars.githubusercontent.com/COLABORADOR3" width="100px;" alt=""/>
        <br />
        <sub><b>Nombre Colaborador 3</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/COLABORADOR4">
        <img src="https://avatars.githubusercontent.com/COLABORADOR4" width="100px;" alt=""/>
        <br />
        <sub><b>Nombre Colaborador 4</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
  </tr>
</table>

## 🎯 Descripción del Proyecto

SelfCare es una aplicación web completa que permite a los usuarios descubrir, crear y compartir rutinas de autocuidado para el rostro, cuerpo, cabello y cuidado personal. La plataforma incluye gestión de usuarios, catálogo de productos, creación de rutinas, sistemas de reseñas y descubrimiento de productos basado en ubicación.

**Nota**: Este proyecto fue desarrollado como parte de un sprint intensivo de una semana, demostrando la capacidad del equipo para entregar una aplicación funcional completa en un tiempo limitado.

## 🏗️ Arquitectura Técnica

### Frontend (Angular 18)
- **Framework**: Angular 18 con TypeScript 5.5
- **Componentes UI**: PrimeNG 17 + Bootstrap 5 + Componentes Personalizados
- **Gestión de Estado**: RxJS BehaviorSubject para gestión reactiva del estado
- **Enrutamiento**: Angular Router con guards de ruta y control de acceso basado en roles
- **Cliente HTTP**: Angular HttpClient con interceptores y manejo de errores
- **Integración de Mapas**: Leaflet.js con agrupación de marcadores para servicios de ubicación
- **Notificaciones**: SweetAlert2 para una experiencia de usuario mejorada
- **Sistema de Build**: Angular CLI con configuraciones de producción/desarrollo

### Backend (Node.js + Express)
- **Runtime**: Node.js con framework Express.js
- **Base de Datos**: MongoDB con Mongoose ODM
- **Autenticación**: Tokens JWT con hash de contraseñas bcrypt
- **Manejo de Archivos**: Multer + Cloudinary para gestión de imágenes
- **Seguridad**: CORS, variables de entorno, validación de entrada
- **Arquitectura**: Patrón MVC con rutas, controladores y modelos separados

### Diseño de Base de Datos
- **Gestión de Usuarios**: Autenticación, roles (admin/usuario), perfiles, ubicaciones
- **Gestión de Contenido**: Productos, rutinas, reseñas con referencias relacionales
- **Relaciones de Datos**: Referencias apropiadas de MongoDB y población
- **Marcas de Tiempo**: Seguimiento automático de creación/actualización

## 🔧 Características Principales Implementadas

### 🔐 Autenticación y Autorización
- Sistema de autenticación basado en JWT
- Control de acceso basado en roles (Admin/Usuario)
- Rutas protegidas con guards de Angular
- Encriptación de contraseñas con bcrypt
- Gestión de sesiones y manejo de expiración de tokens

### 👥 Gestión de Usuarios
- Registro e inicio de sesión de usuarios
- Gestión de perfiles con carga de imágenes
- Permisos basados en roles
- Seguimiento de ubicación de usuarios para descubrimiento de productos

### 📱 Gestión de Contenido
- **Rutinas**: Crear, editar y gestionar rutinas de autocuidado
- **Productos**: Catálogo de productos con información detallada
- **Reseñas**: Reseñas y calificaciones generadas por usuarios
- **Categorías**: Organizadas por áreas del cuerpo (rostro, cuerpo, cabello, etc.)

### 🗺️ Servicios de Ubicación
- Mapas interactivos con Leaflet.js
- Descubrimiento de productos basado en ubicación
- Seguimiento de ubicación de usuarios
- Visualización de datos geográficos

### 🎨 UI/UX Moderna
- Diseño responsivo con Bootstrap 5
- Componentes PrimeNG para interacciones ricas
- Componentes Angular personalizados
- Enfoque mobile-first
- Animaciones y transiciones suaves

## 🛠️ Habilidades Técnicas Demostradas

### Desarrollo Frontend
- **Framework Angular**: Componentes, servicios, pipes, directivas
- **TypeScript**: Tipado fuerte, interfaces, genéricos
- **Programación Reactiva**: Observables y operadores RxJS
- **Arquitectura de Componentes**: Componentes reutilizables y mantenibles
- **Gestión de Estado**: Estado basado en servicios con BehaviorSubject
- **Guards de Ruta**: Protección de autenticación y autorización
- **Interceptores HTTP**: Manejo de solicitudes/respuestas
- **Manejo de Errores**: Gestión integral de errores

### Desarrollo Backend
- **Node.js/Express**: Desarrollo de APIs RESTful
- **MongoDB/Mongoose**: Diseño de base de datos y uso de ODM
- **Autenticación**: Implementación JWT y seguridad
- **Manejo de Archivos**: Carga de imágenes y almacenamiento en la nube
- **Diseño de API**: Endpoints RESTful con códigos de estado HTTP apropiados
- **Middleware**: CORS, autenticación, manejo de carga de archivos
- **Gestión de Entorno**: Configuración y manejo de secretos

### DevOps y Despliegue
- **Firebase Hosting**: Despliegue del frontend
- **Configuración de Entorno**: Configuraciones de desarrollo vs producción
- **Optimización de Build**: Builds de producción con división de código
- **Control de Versiones**: Flujo de trabajo Git y estructura del proyecto

### Ingeniería de Software
- **Arquitectura MVC**: Separación limpia de responsabilidades
- **Manejo de Errores**: Gestión integral de errores
- **Validación de Entrada**: Sanitización y validación de datos
- **Mejores Prácticas de Seguridad**: Hash de contraseñas, JWT, CORS
- **Organización del Código**: Estructura modular y mantenible
- **Configuración de Testing**: Framework de testing Karma/Jasmine

## 🚀 Comenzando

### Prerrequisitos
- Node.js 18+
- Angular CLI 18+
- Instancia de MongoDB
- Cuenta de Cloudinary (para carga de imágenes)

### Configuración del Frontend
```bash
cd client
npm install
ng serve
```

### Configuración del Backend
```bash
cd server
npm install
# Crear archivo .env con tu configuración
npm run dev
```

### Variables de Entorno
Crea un archivo `.env` en el directorio del servidor:
```env
PORT=3000
MONGODB_URI=tu_cadena_de_conexion_mongodb
JWT_SECRET=tu_secreto_jwt
CLOUD_NAME=tu_nombre_cloudinary
CLOUD_API_KEY=tu_api_key_cloudinary
CLOUD_API_SECRET=tu_api_secret_cloudinary
```

## 📱 Credenciales de Demo

### Acceso de Administrador
- **Email**: admin@admin.com
- **Contraseña**: admin

### Acceso de Usuario
- **Email**: palomita@gmail.com
- **Contraseña**: 1234

## 🌐 Demo en Vivo

- **URL de Producción**: https://selfcare.firebase.com/api/selfcare/all
- **Desarrollo Local**: http://localhost:4200 (frontend), http://localhost:3000 (backend)

## 🔍 Compatibilidad del Navegador

> **Nota**: Para una experiencia óptima, usa Google Chrome o Safari. Firefox puede mostrar advertencias en la consola pero la funcionalidad permanece intacta.

> **Precaución**: Mozilla Firefox está mostrando errores muy molestos, pero las funcionalidades funcionan correctamente (aún estamos trabajando para solucionarlo). Google Chrome / Safari no muestran estos errores.
> - "ResizeObserver loop completed with undelivered notifications."

## 🎯 Mejoras Futuras

- [ ] Sistema de moderación de reseñas para administradores
- [ ] Canales de comunicación entre usuarios y administradores
- [ ] Canales de marketing y asociaciones comerciales para marcas
- [ ] Descubrimiento de productos basado en ubicación mejorado
- [ ] Análisis avanzados y reportes
- [ ] Desarrollo de aplicación móvil
- [ ] Integración con redes sociales
- [ ] Procesamiento de pagos para funciones premium

## 📊 Estadísticas del Proyecto

- **Componentes Frontend**: 16+ componentes reutilizables
- **Páginas**: 13+ páginas ricas en funcionalidades
- **Endpoints de API**: 4 controladores de recursos principales
- **Modelos de Base de Datos**: 4 esquemas bien estructurados
- **Características de Seguridad**: JWT, control de acceso basado en roles, validación de entrada
- **Bibliotecas UI**: 3 frameworks UI principales integrados
- **Tiempo de Desarrollo**: 1 semana intensiva
- **Equipo**: 6 desarrolladores fullstack

## 🏆 Lo que Este Proyecto Demuestra

Esta aplicación SelfCare demuestra la capacidad del equipo para:

1. **Trabajar en Equipo Eficientemente**: Colaboración efectiva entre 6 desarrolladores
2. **Entregar Rápidamente**: Aplicación completa funcional en solo 1 semana
3. **Construir Aplicaciones Full-Stack**: Soluciones completas de frontend a backend
4. **Implementar Tecnologías Web Modernas**: Últimas versiones de Angular, Node.js y MongoDB
5. **Diseñar Arquitectura Escalable**: Estructura de código limpia y mantenible
6. **Manejar Lógica de Negocio Compleja**: Sistemas de gestión de usuarios, contenido y reseñas
7. **Integrar Servicios de Terceros**: Mapas, almacenamiento en la nube, autenticación
8. **Enfocarse en la Experiencia del Usuario**: Diseño responsivo e interacciones suaves
9. **Implementar Mejores Prácticas de Seguridad**: Autenticación, autorización, validación de datos
10. **Desplegar y Mantener**: Aplicación lista para producción con configuración apropiada

**Mi Contribución**: Aunque este fue un proyecto grupal, contribuí significativamente en la mayoría de los archivos, demostrando mi capacidad para trabajar en equipo y entregar código de calidad en entornos colaborativos.

## 📞 Contacto

Este proyecto representa las capacidades de desarrollo fullstack del equipo y mi contribución significativa al mismo. Me apasiona crear aplicaciones web robustas y escalables, trabajar en equipo, y me encantaría discutir cómo puedo contribuir a tu equipo.

---

<div align="center">
  <p><strong>Construido con ❤️ por un equipo de 6 desarrolladores en 1 semana</strong></p>
  <p><em>Demostrando experiencia en desarrollo fullstack con Angular, Node.js y MongoDB</em></p>
</div>

---

# 🚀 SelfCare - Fullstack Web Application

<div align="center">
  <h2 align="center">A comprehensive self-care routine management platform</h2>
  <p align="center">Built with modern web technologies and best practices</p>
  <p align="center"><strong>Group Project - 6 Developers - 1 Week</strong></p>
</div>

![SelfCare Banner](https://github.com/user-attachments/assets/29bda9b3-a58c-4c2e-8067-6467889b44a4)

## 🌟 In this project you can:

- 🌱 **Find all types of routines** facial, body, hair and more!
- 👯 **A community of people** who publish their own routines and you can follow
- ⚡ **All necessary products** are detailed for each routine
- 💬 **You can give your opinion** on whether it works for you or not, and read others'
- 😄 **We locate you** so you can find products in your area

## 👥 Project Information

**SelfCare** is a group project developed in **1 week** by a team of **6 fullstack developers**, including myself. While I have contributed significantly to most files, this project represents the collaborative work of the entire team.

**Technologies used**: Angular 18, Node.js, MongoDB, Express.js, TypeScript, and more.

## 👨‍💻 Development Team

<div align="center">
  <h3>Our amazing team of developers</h3>
</div>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/tereytere">
        <img src="https://avatars.githubusercontent.com/tereytere" width="100px;" alt="Teresa Ambroa"/>
        <br />
        <sub><b>Teresa Ambroa</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/COLABORADOR1">
        <img src="https://avatars.githubusercontent.com/COLABORADOR1" width="100px;" alt=""/>
        <br />
        <sub><b>Collaborator Name 1</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/COLABORADOR2">
        <img src="https://avatars.githubusercontent.com/COLABORADOR2" width="100px;" alt=""/>
        <br />
        <sub><b>Collaborator Name 2</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/COLABORADOR3">
        <img src="https://avatars.githubusercontent.com/COLABORADOR3" width="100px;" alt=""/>
        <br />
        <sub><b>Collaborator Name 3</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/COLABORADOR4">
        <img src="https://avatars.githubusercontent.com/COLABORADOR4" width="100px;" alt=""/>
        <br />
        <sub><b>Collaborator Name 4</b></sub>
      </a>
      <br />
      <sub>Fullstack Developer</sub>
    </td>
  </tr>
</table>

## 🎯 Project Overview

SelfCare is a full-featured web application that allows users to discover, create, and share self-care routines for facial, body, hair, and personal care. The platform includes user management, product cataloging, routine creation, review systems, and location-based product discovery.

**Note**: This project was developed as part of an intensive one-week sprint, demonstrating the team's ability to deliver a complete functional application in a limited timeframe.

## 🏗️ Technical Architecture

### Frontend (Angular 18)
- **Framework**: Angular 18 with TypeScript 5.5
- **UI Components**: PrimeNG 17 + Bootstrap 5 + Custom Components
- **State Management**: RxJS BehaviorSubject for reactive state management
- **Routing**: Angular Router with route guards and role-based access control
- **HTTP Client**: Angular HttpClient with interceptors and error handling
- **Maps Integration**: Leaflet.js with marker clustering for location services
- **Notifications**: SweetAlert2 for enhanced user experience
- **Build System**: Angular CLI with production/development configurations

### Backend (Node.js + Express)
- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with bcrypt password hashing
- **File Upload**: Multer + Cloudinary for image management
- **Security**: CORS, environment variables, input validation
- **Architecture**: MVC pattern with separated routes, controllers, and models

### Database Design
- **User Management**: Authentication, roles (admin/user), profiles, locations
- **Content Management**: Products, routines, reviews with relational references
- **Data Relationships**: Proper MongoDB references and population
- **Timestamps**: Automatic creation/update tracking

## 🔧 Key Features Implemented

### 🔐 Authentication & Authorization
- JWT-based authentication system
- Role-based access control (Admin/User)
- Protected routes with Angular guards
- Password encryption with bcrypt
- Session management and token expiration handling

### 👥 User Management
- User registration and login
- Profile management with image uploads
- Role-based permissions
- User location tracking for product discovery

### 📱 Content Management
- **Routines**: Create, edit, and manage self-care routines
- **Products**: Product catalog with detailed information
- **Reviews**: User-generated reviews and ratings
- **Categories**: Organized by body areas (face, body, hair, etc.)

### 🗺️ Location Services
- Interactive maps with Leaflet.js
- Location-based product discovery
- User location tracking
- Geographic data visualization

### 🎨 Modern UI/UX
- Responsive design with Bootstrap 5
- PrimeNG components for rich interactions
- Custom Angular components
- Mobile-first approach
- Smooth animations and transitions

## 🛠️ Technical Skills Demonstrated

### Frontend Development
- **Angular Framework**: Components, services, pipes, directives
- **TypeScript**: Strong typing, interfaces, generics
- **Reactive Programming**: RxJS observables and operators
- **Component Architecture**: Reusable, maintainable components
- **State Management**: Service-based state with BehaviorSubject
- **Route Guards**: Authentication and authorization protection
- **HTTP Interceptors**: Request/response handling
- **Error Handling**: Comprehensive error management

### Backend Development
- **Node.js/Express**: RESTful API development
- **MongoDB/Mongoose**: Database design and ORM usage
- **Authentication**: JWT implementation and security
- **File Handling**: Image upload and cloud storage
- **API Design**: RESTful endpoints with proper HTTP status codes
- **Middleware**: CORS, authentication, file upload handling
- **Environment Management**: Configuration and secrets handling

### DevOps & Deployment
- **Firebase Hosting**: Frontend deployment
- **Environment Configuration**: Development vs production setups
- **Build Optimization**: Production builds with code splitting
- **Version Control**: Git workflow and project structure

### Software Engineering
- **MVC Architecture**: Clean separation of concerns
- **Error Handling**: Comprehensive error management
- **Input Validation**: Data sanitization and validation
- **Security Best Practices**: Password hashing, JWT, CORS
- **Code Organization**: Modular, maintainable structure
- **Testing Setup**: Karma/Jasmine testing framework

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Angular CLI 18+
- MongoDB instance
- Cloudinary account (for image uploads)

### Frontend Setup
```bash
cd client
npm install
ng serve
```

### Backend Setup
```bash
cd server
npm install
# Create .env file with your configuration
npm run dev
```

### Environment Variables
Create a `.env` file in the server directory:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

## 📱 Demo Credentials

### Admin Access
- **Email**: admin@admin.com
- **Password**: admin

### User Access
- **Email**: palomita@gmail.com
- **Password**: 1234

## 🌐 Live Demo

- **Production URL**: https://selfcare.firebase.com/api/selfcare/all
- **Local Development**: http://localhost:4200 (frontend), http://localhost:3000 (backend)

## 🔍 Browser Compatibility

> **Note**: For optimal experience, use Google Chrome or Safari. Firefox may show console warnings but functionality remains intact.

> **Warning**: Mozilla Firefox is showing very annoying errors, but the functionalities work correctly (we are still working to fix it). Google Chrome / Safari do not show these errors.
> - "ResizeObserver loop completed with undelivered notifications."

## 🎯 Future Enhancements

- [ ] Admin review moderation system
- [ ] User-admin communication channels
- [ ] Marketing and business brand partnerships
- [ ] Enhanced location-based product discovery
- [ ] Advanced analytics and reporting
- [ ] Mobile app development
- [ ] Social media integration
- [ ] Payment processing for premium features

## 📊 Project Statistics

- **Frontend Components**: 16+ reusable components
- **Pages**: 13+ feature-rich pages
- **API Endpoints**: 4 main resource controllers
- **Database Models**: 4 well-structured schemas
- **Security Features**: JWT, role-based access, input validation
- **UI Libraries**: 3 major UI frameworks integrated
- **Development Time**: 1 intensive week
- **Team**: 6 fullstack developers

## 🏆 What This Project Demonstrates

This SelfCare application demonstrates the team's ability to:

1. **Work Efficiently as a Team**: Effective collaboration between 6 developers
2. **Deliver Quickly**: Complete functional application in just 1 week
3. **Build Full-Stack Applications**: Complete frontend-to-backend solutions
4. **Implement Modern Web Technologies**: Latest versions of Angular, Node.js, and MongoDB
5. **Design Scalable Architecture**: Clean, maintainable code structure
6. **Handle Complex Business Logic**: User management, content systems, reviews
7. **Integrate Third-Party Services**: Maps, cloud storage, authentication
8. **Focus on User Experience**: Responsive design, smooth interactions
9. **Implement Security Best Practices**: Authentication, authorization, data validation
10. **Deploy and Maintain**: Production-ready application with proper configuration

**My Contribution**: While this was a group project, I contributed significantly to most files, demonstrating my ability to work in teams and deliver quality code in collaborative environments.

## 📞 Contact

This project represents the team's fullstack development capabilities and my significant contribution to it. I'm passionate about creating robust, scalable web applications, working in teams, and would love to discuss how I can contribute to your team.

---

<div align="center">
  <p><strong>Built with ❤️ by a team of 6 developers in 1 week</strong></p>
  <p><em>Demonstrating fullstack development expertise in Angular, Node.js, and MongoDB</em></p>
</div>

---