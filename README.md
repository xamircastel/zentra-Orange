# 🍊 Zentra Orange - Mobile App

Una aplicación móvil moderna construida con Orange Design System, featuring un sistema completo de puntos, navegación lateral y modales interactivos.

## ✨ Características

- **🎨 Orange Design System**: Implementación completa del sistema de diseño Orange
- **👤 Personalización**: Header personalizado con saludo de usuario y sistema de puntos
- **⭐ Sistema de Puntos**: Sistema dinámico de puntos con niveles (FAN, PREMIUM, etc.)
- **🎮 Control de Acceso**: Acceso basado en puntos para diferentes categorías de contenido
- **📱 Navegación Lateral**: Menú hamburguesa con todas las secciones principales
- **💳 Modal de Suscripción**: Modal interactivo con diseño Orange
- **🏆 Redención de Puntos**: Sistema de canje de puntos con animaciones
- **📱 Responsive**: Diseño adaptativo optimizado para móviles (375x812px)

## 🚀 Demo en Vivo

El proyecto incluye un servidor local para desarrollo:

```bash
# Navegar al directorio del proyecto
cd orange-app-design

# Iniciar servidor local (Puerto 8080)
python -m http.server 8080
# o con Node.js
npx http-server -p 8080
```

Luego visita: `http://localhost:8080`

## 📱 Funcionalidades Principales

### Sistema de Puntos
- **Puntos Actuales**: 1,350 puntos
- **Nivel**: FAN (35% progreso)
- **Acceso por Categorías**:
  - 🎮 **Juegos**: Requiere 1,500 puntos (acceso denegado)
  - 🎵 **Música**: Requiere 1,000 puntos (acceso permitido)
  - 📰 **Deportes y Noticias**: Acceso libre
  - 📹 **Videos**: Acceso libre
  - 📚 **Lectura**: Acceso libre

### Navegación
- **Menú Hamburguesa**: Acceso desde barra inferior
- **Secciones Disponibles**:
  - Juegos
  - Música
  - Deportes y noticias
  - Videos
  - Lectura
  - Gana puntos (destacado)
  - Preguntas frecuentes
  - Contacto
  - Cerrar sesión

### Modales Interactivos
- **Modal de Suscripción**: Con gradientes Orange y llamada a la acción
- **Modales de Puntos**: Para acceso denegado/permitido
- **Animaciones**: Transiciones suaves y feedback visual

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones, gradientes, y responsive design
- **JavaScript ES6+**: Clases, módulos y programación orientada a objetos
- **SVG**: Iconografía vectorial
- **Orange Design System**: Paleta de colores y componentes oficiales

## 🎨 Paleta de Colores Orange

```css
--orange-primary: #ff7900
--orange-secondary: #ff9533
--orange-light: #ffb366
--orange-lighter: #ffcc99
--orange-gradient: linear-gradient(135deg, #ff7900 0%, #ff9533 50%, #ffb366 100%)
```

## 📁 Estructura del Proyecto

```
zentra-Orange/
├── index.html                 # Aplicación principal
├── styles.css                 # Estilos completos
├── assets/                    # Recursos estáticos
│   └── Orange_Master_logo.svg
├── design-documentation.html  # Documentación de diseño
├── figma-guide.md            # Guía de Figma
├── README.md                 # Este archivo
└── .gitignore               # Archivos ignorados por Git
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
```bash
git clone https://github.com/tu-usuario/zentra-Orange.git
cd zentra-Orange
```

2. **Abrir con servidor local**:
```bash
# Opción 1: Python
python -m http.server 8080

# Opción 2: Node.js
npx http-server -p 8080

# Opción 3: Live Server (VS Code)
# Usar extensión Live Server
```

3. **Abrir en navegador**: `http://localhost:8080`

## 🎯 Características Técnicas

- **Responsive Design**: Optimizado para 375x812px (iPhone X/11/12/13)
- **Performance**: Carga rápida con assets optimizados
- **Accesibilidad**: Estructura semántica y navegación por teclado
- **Progressive Enhancement**: Funcional sin JavaScript
- **Modern CSS**: Grid, Flexbox, Custom Properties, Animations

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request
  - Texto pequeño: 14px (Regular)
  - Texto de apoyo: 12px (Regular)

### Espaciado

- Espaciado base: 8px
- Márgenes y paddings recomendados: múltiplos de 8px (8px, 16px, 24px, 32px, etc.)

### Componentes

1. **Tarjetas**
   - Bordes redondeados: 8px
   - Sombra: 0px 2px 4px rgba(0,0,0,0.1)
   - Padding interno: 16px

2. **Botones**
   - Altura: 40px
   - Bordes redondeados: 20px (pill shape)
   - Padding horizontal: 16px-24px

3. **Navegación**
   - Altura de barra superior: 56px
   - Altura de barra inferior: 56px
   - Iconos: 24px x 24px

4. **Imágenes**
   - Bordes redondeados: 8px

## Instrucciones para Figma

Para importar este diseño a Figma:

1. Crear un nuevo archivo en Figma
2. Configurar la página para dispositivo móvil (375px de ancho para iPhone o 360px para Android estándar)
3. Establecer la cuadrícula base de 8px
4. Importar los estilos de color y texto definidos arriba
5. Comenzar a diseñar basándose en la estructura proporcionada en el archivo de especificaciones

## Estructura de la App

1. **Header/Barra Superior**
   - Logo
   - Campo de búsqueda
   - Iconos de acción

2. **Contenido Principal**
   - Banner principal
   - Secciones de categorías
   - Recomendaciones
   - Novedades
   - Populares

3. **Navegación Inferior**
   - Iconos de navegación principal

## Referencias

- [Orange Design System](https://system.design.orange.com/)
- [Boosted (Implementation of Orange Design System)](https://boosted.orange.com/docs/5.3/)
