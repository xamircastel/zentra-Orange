# Instrucciones para importar el diseño HTML/CSS a Figma

## Preparación

1. **Crea un nuevo archivo en Figma**
   - Abre Figma y crea un nuevo archivo de diseño
   - Configura el archivo para dispositivos móviles (por ejemplo, Frame: iPhone 13)

2. **Instala el plugin "HTML to Figma"**
   - Busca y añade el plugin "HTML to Figma" desde la tienda de plugins de Figma
   - Este plugin te permitirá importar el código HTML/CSS como componentes de Figma

## Proceso de importación

### Método 1: Plugin HTML to Figma

1. **Ejecutar el plugin**
   - Selecciona Plugins > HTML to Figma
   - En la interfaz del plugin, tienes dos opciones:
     - Pegar el código HTML/CSS
     - Cargar los archivos HTML/CSS

2. **Importar los archivos**
   - Selecciona "Load from File"
   - Carga el archivo `index.html` y `styles.css` de este proyecto
   - Haz clic en "Import"

3. **Organizar los elementos**
   - Una vez importado, Figma creará todos los componentes basados en el HTML
   - Organiza los componentes en frames separados si es necesario
   - Ajusta la alineación y el espaciado según sea necesario

### Método 2: Captura directa del navegador

1. **Visualiza el diseño en el navegador**
   - Abre el archivo `index.html` en un navegador
   - Ajusta la vista para simular un dispositivo móvil (modo responsive)

2. **Captura la página**
   - Usa la herramienta de captura de pantalla para capturar la página completa
   - O usa extensiones como "Full Page Screen Capture" para Chrome

3. **Importa la imagen a Figma**
   - Inserta la imagen en Figma (File > Place Image)
   - Usa esta imagen como referencia para recrear el diseño con componentes nativos de Figma

## Creación de componentes en Figma

Para sacar el máximo provecho del diseño en Figma, deberías crear componentes reutilizables:

1. **Define colores**
   - Crea un Style Guide con la paleta de colores de Orange Design System
   - Utiliza los códigos de color definidos en el archivo CSS
   - Añade los colores a tu biblioteca de estilos de Figma

2. **Configura tipografía**
   - Importa o selecciona Helvetica Neue (o Inter como alternativa)
   - Crea estilos de texto para encabezados, cuerpo y otros elementos

3. **Crea componentes**
   - Convierte elementos repetitivos en componentes:
     - Barra de navegación
     - Tarjetas de categoría
     - Tarjetas de recomendación
     - Iconos de la barra inferior
   - Usa Auto Layout para elementos flexibles

4. **Organiza la biblioteca**
   - Crea una página separada para la biblioteca de componentes
   - Organiza los componentes por categorías
   - Documenta las variantes y propiedades de cada componente

## Consejos para mantener la fidelidad al Orange Design System

1. **Respeta los espaciados**
   - Utiliza la cuadrícula de 8px (como se define en el CSS)
   - Mantén consistencia en los márgenes y el padding

2. **Utiliza las propiedades correctas**
   - Respeta los radios de borde definidos
   - Mantén las sombras y elevaciones según lo especificado

3. **Sigue la jerarquía visual**
   - Mantén la jerarquía de tipografía
   - Respeta el énfasis de color según lo definido en ODS

4. **Componentes interactivos**
   - Crea variantes para estados (normal, hover, active, disabled)
   - Documenta las transiciones recomendadas

## Recursos adicionales

- [Documentación oficial de Figma](https://help.figma.com/)
- [Orange Design System](https://system.design.orange.com/)
- [Boosted Documentation](https://boosted.orange.com/)
