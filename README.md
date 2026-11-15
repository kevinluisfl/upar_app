# 🧊 UparApp Studio — Suite Interactiva Docente (4 en 1)

**UparApp Studio** es un ecosistema web modular diseñado para docentes y entornos educativos que unifica cuatro herramientas pedagógicas interactivas bajo una sola plataforma (**UparTrivia**, **UparPuzzle**, **UparGrade** y **UparWheel**). 

Cuenta con un **Hub Maestro** que centraliza la navegación, sincroniza en tiempo real el **Tema Visual (Claro / Oscuro)** y el **Idioma (`ES` / `EN`)**, muestra métricas de uso en vivo y permite realizar copias de seguridad unificadas de todas las herramientas en un solo clic.

---

## 🚀 Las 4 Aplicaciones de la Suite

### 1. 🧠 UparTrivia — *Competencia Estilo Reality*
Plataforma de trivias por niveles inspirada en *"¿Quién quiere ser millonario?"* para dinamizar evaluaciones y olimpiadas en el aula:
* **5 Niveles de Dificultad Configurables:** Selección libre de qué rondas jugar y edición personalizada de los puntos por pregunta o del puntaje máximo total (con reescalado automático del ranking).
* **3 Comodines Estratégicos:** *50:50*, *Cambiar Pregunta* y *Pista del Público*, además de opción de *Plantarse / Retirarse* y pisos de puntaje asegurado.
* **Perfiles Docentes y Modo Mixto:** Gestión de perfiles (crear, renombrar, eliminar o transferir trivias) con opción de jugar temáticas individuales o combinar múltiples bancos.
* **Centro de Carga Masiva Multiformato:** Importación directa desde Excel/CSV (con selector de separador), texto plano o archivos JSON, más efectos de sonido (`Web Audio API`) y narrador por voz (`SpeechSynthesis`).

### 2. 🧩 UparPuzzle — *Sopas de Letras y Crucigramas*
Generador algorítmico interactivo de pasatiempos didácticos listos para resolver en pantalla, proyectar o imprimir:
* **Sopa de Letras Multicolor:** Cuadrícula adaptable (`10×10` a `18×18`), control de direcciones, paleta de 20 colores vibrantes y **fusión cromática automática** en las casillas donde se cruzan 2 o más palabras.
* **Crucigrama Inteligente:** Entrelazado automático de palabras, pistas horizontales/verticales, verificación de letras y ayudas interactivas.
* **Soporte Táctil y Modo Concentración:** Resolución fluida tanto en PC como en dispositivos móviles/tablets (arrastre táctil, toque inicio-fin y teclado virtual) y modo de pantalla completa para proyectar en TV o Video Beam.
* **Impresión A4/Carta y Exportación PNG:** Impresión limpia blindada contra el modo oscuro, descarga en imagen PNG de alta resolución y gestor local de actividades con buscador y paginación.

### 3. 📋 UparGrade — *Hojas de Respuesta ICFES y Escáner OMR*
Sistema de evaluación rápida con generación de hojas ópticas y calificación automatizada:
* **Diseñador de Exámenes y Clave (Answer Key):** Configura evaluaciones de `10` a `50` preguntas con **3 (`A-C`), 4 (`A-D`) o 5 (`A-E`) opciones**, escala de nota mínima/máxima personalizable y pegado rápido de secuencias de respuestas.
* **Generador de Hojas Tipo ICFES:** Crea hojas con 4 marcas fiduciales OMR en **Formato Completo** o **Formato Simplificado (Solo Esencial)**, permitiendo imprimir **1, 2, 4 o hasta 6 hojas por página** en orientación vertical, horizontal o automática.
* **Escáner Óptico OMR (Cámara o Foto):** Detecta automáticamente las burbujas rellenadas mediante análisis de luminancia en `HTML5 Canvas`, dibuja anillos de auditoría (aciertos, errores, blancos/doble marca) y permite corrección manual en un clic.
* **Planilla de Calificaciones (Gradebook):** Estadísticas de curso en tiempo real (promedio, porcentaje de aprobación, mejor nota) y exportación a Excel (`.csv`) con separador configurable (`;`, `,`, `Tab`, `|`).

### 4. 🎡 UparWheel — *Doble Ruleta de Participación Escolar*
Selector aleatorio interactivo para sorteos, participación de estudiantes y asignación de dinámicas:
* **Doble Ruleta Sincronizada:** Gira una ruleta individual o activa dos ruletas simultáneas (ej. *Estudiante* + *Pregunta/Reto*).
* **Limpiador Inteligente de Listas:** Filtra automáticamente textos copiados desde plataformas académicas eliminando numeraciones, códigos o caracteres sobrantes.
* **Modo Concentración, Sonido Mecánico y Voz:** Pantalla completa para proyección en el aula, síntesis de sonido de giro en tiempo real y lectura en voz alta de los seleccionados.

---

## ✨ Características del Hub Maestro (`UparApp Studio`)

* **Top Bar Adaptativa con Identidad Dinámica:** Cambia automáticamente el logotipo, título, insignia y color de acento según la herramienta activa (**Índigo** en *UparApp*, **Ámbar** en *UparTrivia*, **Azul** en *UparPuzzle*, **Rosa/Rojo** en *UparGrade* y **Esmeralda** en *UparWheel*), reduciéndose a iconos limpios en pantallas pequeñas.
* **Integración Sin Costuras (Zero Double-Banner):** Ajusta dinámicamente la interfaz de cada aplicación hija para evitar cabeceras o pies de página duplicados y aprovechar el 100% del área de trabajo.
* **Sincronización Global en Vivo:** Conmutación instantánea de **Tema Claro / Oscuro** e **Idioma Español / Inglés** propagada en tiempo real a las 4 aplicaciones sin recargar la página.
* **Respaldo Maestro Unificado (`.json`):** Exporta y restaura en un único archivo `.json` todas las actividades de *UparPuzzle*, listas de *UparWheel*, bancos y rankings de *UparTrivia*, y exámenes y calificaciones de *UparGrade*.

---

## 📂 Estructura del Proyecto

```text
📁 UparApp-Studio/
├── 📄 index.html          # Hub Maestro (Top Bar, Dashboard de 4 tarjetas y contenedores)
├── 📄 styles.css          # Sistema de diseño global Indigo Studio, temas y diseño responsivo
├── 📄 suite.js            # Controlador de sincronización en vivo, métricas y respaldo maestro
├── 📄 README.md           # Documentación general de la suite
│
├── 📁 upartrivia/         # Módulo 1: Trivia Estilo Millonario
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── 📁 uparpuzzle/         # Módulo 2: Sopas de Letras y Crucigramas
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── 📁 upargrade/          # Módulo 3: Hojas ICFES y Escáner OMR
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
└── 📁 uparwheel/          # Módulo 4: Ruleta de Participación Escolar
    ├── index.html
    ├── styles.css
    └── app.js

## 🚀 Instalación y Uso

La suite funciona **100% en el navegador** sin requerir bases de datos externas ni instalación de dependencias (`node_modules`). Para que la sincronización en tiempo real de temas, idiomas y estilos entre el Hub Maestro y los 4 módulos funcione sin restricciones de seguridad del navegador (`CORS` / `iframe`), se recomienda ejecutarla desde un servidor local o despliegue estático:

### Opción 1: Ejecución Local (Recomendado con VS Code)
1. Clona este repositorio o descarga el archivo `.zip` del proyecto:
   ```bash
   git clone [https://github.com/kevinluisfl/upar_app.git](https://github.com/kevinluisfl/upar_app.git)

2. Abre la carpeta raíz UparApp-Studio en Visual Studio Code.

3. Haz clic derecho sobre el archivo principal index.html y selecciona "Open with Live Server" (o usa cualquier servidor local como npx serve . o python -m http.server).

### Opción 2: Despliegue en la Nube (GitHub Pages / Vercel / Netlify)
Sube la carpeta completa (manteniendo las 4 subcarpetas upartrivia/, uparpuzzle/, upargrade/ y uparwheel/) a tu repositorio de GitHub.

Activa GitHub Pages desde la pestaña Settings > Pages apuntando a la rama principal (main / root), o importa el repositorio directamente en Vercel sin configurar comandos de compilación (Build Command vacío).

