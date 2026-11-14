# El legado del jícaro

Web cultural sobre la artesanía del jícaro en Liberia, Guanacaste. HTML, CSS y JavaScript puro, sin dependencias de ejecución ni compilación. Compatible con GitHub Pages.

## Vista local

Abre `index.html` en un navegador o utiliza Live Server en Visual Studio Code. La web funciona también con `file://` y rutas relativas. La versión pública se publica en https://eddy21q.github.io/jicaro-guanacaste/ desde la rama main.

## Contenido y mantenimiento

- `index.html`: portada, historia, proceso, perfiles de las artesanas, desafíos, voces, fuentes y créditos.
- `css/styles.css`: diseño adaptable a computadora y teléfono, impresión y movimiento reducido.
- `js/script.js`: inventario de fotografías, filtros por artesana, visor ampliable, menú móvil y preparación del documental.
- `assets/images/`: las seis fotografías seleccionadas por el grupo; sin capturas de WhatsApp.
- `assets/audio/entrevista-rosaura.mp4`: registro original de Rosaura, sin reproducción automática.
- `docs/inventario-imagenes.md`: uso y estado de las imágenes.

Para agregar fotografías, coloca el archivo en `assets/images/` e incorpora un registro en el arreglo `imagenes` de `js/script.js`. Confirma su autoría y descripción antes de publicarlo. El sitio no carga imágenes externas.

Para integrar el documental, cambia `documental.url` de `null` a su enlace confirmado de YouTube o youtu.be. El sitio muestra un botón que carga el reproductor solo cuando se solicita. No utiliza videos de terceros como si fueran del proyecto.

## Fuentes y criterio editorial

Fuente principal: *El legado artesanal del jícaro en Liberia, Guanacaste: valor, rescate y retos actuales*, informe final del grupo, 2026 (25 páginas), proporcionado desde Downloads. Se consultaron la introducción y los apartados 5.1, 6.1, 6.2, 6.3 y las conclusiones. No se copia el PDF al sitio: contiene identificadores académicos y no es necesario para la navegación pública.

Referencias complementarias:

- https://si.cultura.cr/personas/jicaros-de-la-pampa
- https://si.cultura.cr/personas/creaciones-artesanales-rous

Se priorizó el informe frente a diferencias de fechas en fuentes previas. No se publican fechas de visitas ni se atribuyen citas textuales sin transcripción. La ficha institucional de Rosaura refiere actividad desde 2014; la investigación recoge una trayectoria previa, por lo que las fechas del perfil se atribuyen expresamente al grupo.

## Respaldos locales

`.local-only/` está excluida de Git y contiene la presentación anterior, las trece imágenes retiradas y el texto de trabajo extraído del informe. `.local-tools/` contiene únicamente una herramienta temporal usada para leer el PDF; no forma parte del sitio y está excluida de Git.

No elimines esos respaldos hasta revisar el rediseño. No publiques la carpeta de respaldo como una web. El grupo autorizó publicar el rediseño cultural en GitHub Pages. La presentación anterior permanece en el respaldo local.

## Antes de publicar

Confirmar el enlace del documental y revisar el diseño. El grupo confirmó la existencia de consentimientos informados para las entrevistas, fotografías y grabaciones y su uso académico y divulgativo; mantener ese alcance al incorporar material nuevo; hacer commit y push solo con autorización. La configuración existente de GitHub Pages y `.nojekyll` permanecen intactas.
