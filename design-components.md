# Componentes del Orange Design System

Este documento describe los principales componentes del Orange Design System implementados en el diseño HTML/CSS y cómo pueden ser recreados en Figma.

## 1. Tipografía

### Familia tipográfica
- Principal: Helvetica Neue
- Alternativa web: Inter, Arial, sans-serif

### Jerarquía
- **Título 1:** 24px, Peso: 700
- **Título 2:** 18px, Peso: 700 (sección-títulos)
- **Título 3:** 16px, Peso: 700
- **Subtítulo:** 14px, Peso: 600
- **Cuerpo:** 14px, Peso: 400
- **Texto pequeño:** 12px, Peso: 400
- **Etiquetas:** 10px, Peso: 500

## 2. Colores

### Primarios
- **Orange Primary:** #FF7900
- **Orange Secondary:** #F16E00
- **Black:** #000000
- **White:** #FFFFFF

### Escala de grises
- **Gray 200:** #EEEEEE
- **Gray 300:** #DDDDDD
- **Gray 400:** #CCCCCC
- **Gray 500:** #999999
- **Gray 600:** #666666
- **Gray 700:** #595959
- **Gray 800:** #333333
- **Gray 900:** #141414

### Funcionales
- **Green:** #228722
- **Blue:** #4170D8
- **Yellow:** #FFCC00
- **Red:** #CD3C14

### Soporte
- **Supporting Blue:** #4BB4E6
- **Supporting Yellow:** #FFD200
- **Supporting Green:** #50BE87
- **Supporting Purple:** #A885D8
- **Supporting Pink:** #FFB4E6

## 3. Componentes UI

### Encabezado de App
- Altura: 48px
- Fondo: Blanco
- Sombra: 0 1px 2px rgba(0,0,0,0.05)
- Incluye: Icono de inicio, barra de URL, acciones

### Barra de búsqueda
- Altura: 40px
- Radio de borde: 4px
- Fondo: #EEEEEE
- Incluye: Icono de búsqueda, campo de texto, botón de micrófono

### Tarjetas de categoría
- Estructura: Icono (64x64px) + Nombre
- Radio de borde del icono: 8px
- Espaciado entre elementos: 8px
- Tamaño de texto: 14px

### Tarjetas de contenido
- Radio de borde: 8px
- Sombra: 0 1px 2px rgba(0,0,0,0.05)
- Padding interno: 8px
- Estructura: Imagen + Información

### Navegación inferior
- Altura: 56px
- Fondo: Blanco
- Sombra superior: 0 -1px 4px rgba(0,0,0,0.1)
- 5 elementos con iconos
- Estado activo: Color naranja (#FF7900)
- Estado inactivo: Color gris (#333333)

## 4. Espaciado

### Sistema de espaciado
Basado en unidades de 8px:
- **XS:** 4px (0.5 unidades)
- **SM:** 8px (1 unidad)
- **MD:** 16px (2 unidades)
- **LG:** 24px (3 unidades)
- **XL:** 32px (4 unidades)

### Márgenes de sección
- Margin top/bottom: 24px
- Margin left/right: 16px

### Espaciado entre elementos
- Entre tarjetas grandes: 16px
- Entre tarjetas pequeñas: 8px
- Entre grupos de elementos: 24px

## 5. Iconografía

### Estilo de iconos
- Línea de trazo: 2px
- Esquinas redondeadas
- Estilo Material Design adaptado
- Tamaños:
  - Pequeño: 16x16px
  - Estándar: 24x24px
  - Grande: 32x32px

### Colores de iconos
- Iconos sobre fondo color: Blanco (#FFFFFF)
- Iconos sobre fondo blanco: Negro (#000000) o Naranja (#FF7900)

## 6. Elementos interactivos

### Botones
- Altura estándar: 40px
- Radio de borde: 4px
- Estados: Normal, Hover, Pressed, Disabled
- Variantes: Primario (naranja), Secundario, Texto

### Enlaces
- Color: Naranja (#FF7900)
- Sin subrayado
- Estados: Normal, Hover, Pressed

### Indicadores
- Indicadores de página: Círculos 8px diámetro
- Activo: Opacidad 100%
- Inactivo: Opacidad 50%
