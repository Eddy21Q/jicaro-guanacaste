'use strict';
const integrantes = ['Noemy Yudith Bermúdez Guadamuz','Juan Carlos Jiménez Castrillo','Eddy Josué González Quirós','Luis Carlos Gutiérrez Picado'];
const imagenes = {
 portada: {src:'assets/images/portada-jicaro.png',titulo:'El jícaro: material de la tradición artesanal'},
 yadira: [
 {src:'assets/images/yadira-piezas-fauna-costarricense.png',titulo:'Piezas decorativas de jícaro con motivos de fauna costarricense elaboradas por Yadira Hernández'},
 {src:'assets/images/yadira-chorreador.png',titulo:'Chorreador de café elaborado con jícaro por Yadira Hernández'},
 {src:'assets/images/yadira-canasta-mariposa.png',titulo:'Canasta decorativa de jícaro con motivo de mariposa elaborada por Yadira Hernández'}],
 rosaura: [
 {src:'assets/images/rosaura-coleccion.png',titulo:'Colección de artesanías elaboradas con jícaro por Rosaura Bustos'},
 {src:'assets/images/rosaura-piezas-precolombinas.png',titulo:'Piezas de jícaro con motivos precolombinos: serpiente emplumada y jaguar chorotega elaboradas por Rosaura Bustos'},
 {src:'assets/images/rosaura-materiales-semillas.png',titulo:'Materiales naturales y joyería elaborada con jícaro y semillas por Rosaura Bustos'}],
 contactos: [
 {src:'assets/images/evidencia-contacto-yadira.png',titulo:'Primer contacto y coordinación de visita con la artesana Yadira Hernández por WhatsApp'},
 {src:'assets/images/evidencia-confirmacion-visita-yadira.png',titulo:'Confirmación de visita y envío de ubicación por parte de la artesana Yadira Hernández'},
 {src:'assets/images/evidencia-contacto-rosaura.png',titulo:'Primer contacto y coordinación de visita con la artesana Rosaura Bustos por WhatsApp'},
 {src:'assets/images/evidencia-confirmacion-visita-rosaura.png',titulo:'Confirmación de visita con la artesana Rosaura Bustos por WhatsApp'}]
};
const fuentes = [{titulo:'Sistema de Información Cultural de Costa Rica · Jícaros de la Pampa',url:'https://si.cultura.cr/personas/jicaros-de-la-pampa'}];
const guion = [
 ['Introducción a la tradición','Artesanía en Guanacaste; arte, historia e identidad; presentación de Yadira y Rosaura y propósito del documental.'],
 ['Experiencia de Yadira','Aprendizaje y trayectoria; preparación del fruto; herramientas y tiempo de elaboración; valor cultural; nuevas generaciones y acciones para conservar la tradición.'],
 ['Experiencia de Rosaura','Acercamiento al oficio, formación y reconocimientos; obtención del fruto; herramientas, técnicas y productos; elementos precolombinos; enseñanza y retos actuales.'],
 ['Reflexión y mensaje final','Reconocimiento del esfuerzo de las artesanas; espacios de enseñanza; motivación de nuevas generaciones y conservación de la identidad cultural.']
];
const lista = items => `<ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul>`;
const tarjeta = (titulo,texto) => `<article class="tarjeta"><h3>${titulo}</h3>${texto}</article>`;
const nombres = () => `<ul class="integrantes">${integrantes.map(nombre=>`<li>${nombre}</li>`).join('')}</ul>`;
const registros = [];
function fotografia(registro,leyenda = registro.titulo) {
 const id = registros.push(registro)-1;
 return `<figure class="fotografia"><button class="abrir-foto" data-foto="${id}" aria-label="Ampliar: ${registro.titulo}"><img src="${registro.src}" alt="${registro.titulo}" hidden><span class="imagen-pendiente">Fotografía no disponible</span><span class="ampliar" aria-hidden="true">↗</span></button><figcaption>${leyenda}</figcaption></figure>`;
}
const diapositivas = [
 {titulo:'Portada',clase:'portada',contenido:`<div class="columnas"><div><p class="institucion">Universidad de Costa Rica · Sede de Guanacaste<br>SR-0033 Seminario de Realidad Nacional II · Patrimonio Cultural</p><p class="etiqueta">Segundo avance de investigación · 10 de octubre de 2026</p><h1>El legado artesanal del jícaro en Liberia, Guanacaste</h1><p class="subtitulo">Valor, rescate y retos actuales</p>${nombres()}<button class="principal" data-ir="1">Iniciar presentación →</button></div>${fotografia(imagenes.portada,'El fruto, el oficio y la memoria')}</div>`},
 {titulo:'Nuestro proyecto',contenido:`<p class="idea">Conocer y divulgar los saberes, las técnicas y las experiencias de la artesanía con jícaros en Liberia, Guanacaste.</p><p class="secundario">Identificar los retos de esta tradición y reconocer a las personas que contribuyen a mantenerla viva.</p><div class="tres conceptos">${tarjeta('Valor cultural','<p>Identidad y memoria local.</p>')}${tarjeta('Transmisión de conocimientos','<p>Saberes que pasan de una persona a otra.</p>')}${tarjeta('Retos actuales','<p>Continuidad y reconocimiento del oficio.</p>')}</div>`},
 {titulo:'Trabajo de campo',contenido:`<div class="linea-tiempo">${[['12','Primer contacto con Yadira'],['14','Visita presencial a Yadira'],['20','Primer contacto con Rosaura'],['21','Visita a Creaciones Artesanales Rous']].map(([dia,texto])=>`<article><strong>${dia}</strong><span>septiembre de 2026</span><h3>${texto}</h3></article>`).join('')}</div><div class="franja"><span>2 artesanas</span><span>2 visitas presenciales</span><span>2 entrevistas</span></div><p>Entrevistas · Fotografías · Observaciones · Registro de audio</p><button data-dialogo="evidencias">Ver evidencias de contacto ↗</button>`},
 {titulo:'Yadira Hernández',contenido:`<div class="columnas"><div><p class="subtitulo">Jícaros de la Pampa</p>${lista(['Colorado, Liberia.','Más de 13 años dedicada a la actividad.','Aprendizaje principalmente autodidacta.','Capacitación complementaria con una persona experta.'])}</div>${fotografia(imagenes.yadira[0],'Artesanías de Yadira Hernández')}</div>`},
 {titulo:'Experiencia de Yadira',contenido:`<div class="dos">${tarjeta('Del fruto a la pieza',lista(['Selecciona el fruto verde y de tamaño adecuado.','Hierve el jícaro y retira la pulpa.','Trabaja con taladro, navajas, cutter y cautín.','Una pieza pequeña puede tomar de un día a una semana.']))}${tarjeta('Un saber que necesita continuidad',lista(['Reconoce el oficio como un saber poco conocido.','Percibe poco interés de las nuevas generaciones.','Propone impulsar la tradición desde espacios educativos y municipales.']))}</div>`},
 {titulo:'Artesanías de Yadira',clase:'galeria-slide',contenido:`<div class="galeria tres">${imagenes.yadira.map((img,i)=>fotografia(img,['Motivos de lapa roja y orquídea','Chorreador de café','Canasta con mariposa monarca'][i])).join('')}</div><p class="pie">Selecciona una fotografía para ampliarla.</p>`},
 {titulo:'Rosaura Bustos Rodríguez',contenido:`<div class="columnas"><div><p class="subtitulo">Creaciones Artesanales Rous</p>${lista(['Barrio Moracia, Liberia.','Comenzó observando a su hermana.','Formación y asistencia técnica relacionada con el INA.','Mayor dedicación desde 2011; capacitación formal desde 2013.','Reconocimiento del Centro de Patrimonio Cultural en jícaro y calabaza.','Sello Cultural y Artesanal del MEIC en algunos productos.'])}<button id="escuchar-audio" data-dialogo="audio-dialogo" disabled>Escuchar registro de audio</button></div>${fotografia(imagenes.rosaura[0],'Colección de Creaciones Artesanales Rous')}</div>`},
 {titulo:'Técnicas y productos de Rosaura',contenido:`<div class="dos">${tarjeta('Técnicas mencionadas',lista(['Labrado y calado.','Esgrafiado.','Sofleteado y sobrado.'])+fotografia(imagenes.rosaura[1],'Motivos precolombinos'))}${tarjeta('Productos',lista(['Joyería, guacales y chorreadores.','Maracas, faroles y máscaras.','Llaveros y piezas decorativas.'])+fotografia(imagenes.rosaura[2],'Jícaro, semillas y materiales naturales'))}</div><p class="pie">Se presentan los nombres de las técnicas registrados en el trabajo de campo, sin añadir definiciones.</p>`},
 {titulo:'Artesanías de Rosaura',clase:'galeria-slide',contenido:`<div class="galeria tres">${imagenes.rosaura.map((img,i)=>fotografia(img,['Colección general','Serpiente emplumada y jaguar chorotega','Joyería de jícaro, semillas y materiales naturales'][i])).join('')}</div><p class="pie">Varias piezas aparecen reunidas en las fotografías originales. Selecciona una imagen para ampliarla.</p>`},
 {titulo:'Lo que descubrimos',contenido:`<div class="hallazgos">${[['Aprendizaje','Autodidacta, observación y capacitación.'],['Preparación','Selección, extracción de pulpa, limpieza interna y secado cuidadoso.'],['Herramientas','Navajas, cutters, agujas artesanales, taladro, cautín y mototool.'],['Técnicas','Labrado, calado, esgrafiado, sofleteado, sobrado, pintura y decoración.'],['Productos','Joyería, guacales, chorreadores, vajillas, maracas, faroles, máscaras, llaveros y canastas.']].map(([t,p])=>tarjeta(t,`<p>${p}</p>`)).join('')}</div><p class="pie">Respuestas resumidas por el grupo; no son citas textuales.</p>`},
 {titulo:'Valor cultural',clase:'valor-cultural',contenido:`<div class="valor-contenido"><p class="idea">El oficio guarda una parte de la memoria guanacasteca.</p>${lista(['Transmite conocimientos artesanales.','Representa elementos de la identidad local.','Incorpora flora, fauna, grecas, petroglifos de Curubandé y motivos chorotegas.','Mantiene viva la memoria cultural.','Su importancia va más allá de la venta de productos.'])}</div>`},
 {titulo:'Retos actuales',contenido:`<div class="retos">${['Poco interés de algunas personas jóvenes.','Disminución de personas dedicadas al oficio.','Productos importados o prefabricados en espacios artesanales.','Pocos espacios para transmitir el conocimiento.','Necesidad de participación educativa y municipal.'].map((p,i)=>`<article class="reto"><span>0${i+1}</span><p>${p}</p></article>`).join('')}</div><p class="pie">Estos hallazgos corresponden a las experiencias y opiniones de las artesanas entrevistadas; no se generalizan a toda Guanacaste. Mencionaron mayor valoración entre adultos mayores y, en algunos casos, turistas extranjeros.</p>`},
 {titulo:'Dos experiencias, una tradición',contenido:`<div class="dos">${tarjeta('Yadira Hernández',lista(['Aprendizaje autodidacta.','Más de 13 años de experiencia.','Piezas decorativas y utilitarias.','Interés por preservar el conocimiento.']))}${tarjeta('Rosaura Bustos Rodríguez',lista(['Observación y capacitación.','Diversidad de técnicas.','Motivos culturales en sus diseños.','Experiencia enseñando a otras personas.']))}</div><p class="mensaje">Dos trayectorias distintas unidas por el esfuerzo de mantener viva la artesanía del jícaro.</p>`},
 {titulo:'Propuesta de video documental',contenido:`<div class="secuencia">${guion.map(([titulo],i)=>`<article><strong>0${i+1}</strong><h3>${titulo}</h3></article>`).join('')}</div><p class="idea pequena">Un recorrido desde la tradición hasta las voces que la mantienen viva.</p><p class="pie">Este guion es preliminar y puede cambiar con las recomendaciones de la profesora y de las participantes.</p><button data-dialogo="guion-detalle">Ver contenido de las escenas ↗</button>`},
 {titulo:'Reflexión del grupo',contenido:`<div class="tres">${tarjeta('Avances',lista(['Dos visitas presenciales.','Entrevistas realizadas.','Fotografías y audio recopilados.','Hallazgos organizados.','Guion preliminar creado.']))}${tarjeta('Retos',lista(['Coordinar las visitas.','Resumir entrevistas extensas.','Seleccionar el contenido del video.','Respetar el sentido de las respuestas.','Verificar autorizaciones.']))}${tarjeta('Por consultar',lista(['Duración del video.','Narración y audios originales.','Devolución a la comunidad.','Información por reforzar.']))}</div>`},
 {titulo:'Orientaciones para la siguiente etapa',contenido:`<ol class="preguntas">${['¿La estructura de cuatro escenas es adecuada?','¿Qué duración recomienda para el documental?','¿Conviene usar narración, fragmentos originales o ambos?','¿Cómo podemos hacer una devolución útil para las artesanas?','¿Qué aspectos necesitan mayor respaldo bibliográfico?'].map(p=>`<li>${p}</li>`).join('')}</ol>`},
 {titulo:'Muchas gracias',clase:'cierre',contenido:`<div class="columnas"><div><p class="idea">Conservar estos conocimientos también significa proteger una parte de nuestra identidad cultural.</p>${nombres()}<div id="fuentes"></div><button class="principal" data-ir="0">Volver al inicio ↺</button></div>${fotografia(imagenes.rosaura[1],'Patrimonio que se transmite en cada pieza')}</div>`}
];
const presentacion = document.querySelector('#presentacion');
presentacion.innerHTML = diapositivas.map((slide,i)=>`<section class="diapositiva ${slide.clase||''}" id="diapositiva-${i+1}" aria-labelledby="titulo-${i+1}" ${i?'hidden':''}><div class="lienzo"><p class="etiqueta cabecera-slide">Patrimonio cultural · ${String(i+1).padStart(2,'0')}</p>${i?`<h2 id="titulo-${i+1}">${slide.titulo}</h2>`:''}<div class="contenido">${slide.contenido}</div></div></section>`).join('');
document.querySelector('.portada h1').id = 'titulo-1';
document.querySelector('#lista-evidencias').innerHTML = imagenes.contactos.map(img=>fotografia(img)).join('');
document.querySelector('#guion-completo').innerHTML = guion.map(([t,p],i)=>tarjeta(`0${i+1} · ${t}`,`<p>${p}</p>`)).join('');
fuentes.forEach(fuente=>{const p=document.createElement('p');p.className='fuente';const a=document.createElement('a');a.href=fuente.url;a.textContent=fuente.titulo;a.target='_blank';a.rel='noopener noreferrer';p.append(a);document.querySelector('#fuentes').append(p);});
function prepararImagen(img) {
 const pendiente = img.parentElement.querySelector('.imagen-pendiente');
 const actualizar = () => {const cargada=img.complete&&img.naturalWidth>0;img.hidden=!cargada;pendiente.hidden=cargada;};
 img.addEventListener('load',actualizar);img.addEventListener('error',actualizar);actualizar();
}
document.querySelectorAll('.fotografia img').forEach(prepararImagen);
function dialogoAbierto(){return document.querySelector('dialog[open]');}
document.addEventListener('click',event=>{
 const foto=event.target.closest('[data-foto]');
 if(foto){const registro=registros[Number(foto.dataset.foto)];const contenedor=document.querySelector('#foto-contenido');contenedor.replaceChildren();const img=document.createElement('img');img.src=registro.src;img.alt=registro.titulo;const p=document.createElement('p');p.textContent=registro.titulo;contenedor.append(img,p);document.querySelector('#foto').showModal();return;}
 const cerrar=event.target.closest('[data-cerrar]');if(cerrar){document.getElementById(cerrar.dataset.cerrar).close();return;}
 const abrir=event.target.closest('[data-dialogo]');if(abrir){document.getElementById(abrir.dataset.dialogo).showModal();return;}
 const ir=event.target.closest('[data-ir]');if(ir){document.querySelector('#menu').close();mostrar(Number(ir.dataset.ir));}
});
document.querySelectorAll('dialog').forEach(dialogo=>dialogo.addEventListener('click',event=>{if(event.target!==dialogo)return;const r=dialogo.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialogo.close();}));
const audio=document.querySelector('#audio-rosaura');const botonAudio=document.querySelector('#escuchar-audio');
audio.addEventListener('loadedmetadata',()=>{botonAudio.disabled=false;document.querySelector('#audio-estado').textContent='Audio disponible. Pulsa reproducir para escuchar.';});
function audioError(){botonAudio.disabled=true;document.querySelector('#audio-estado').textContent='El registro no está disponible o el navegador no admite su formato.';}
audio.addEventListener('error',audioError);audio.querySelector('source').addEventListener('error',audioError);
document.querySelector('#audio-dialogo').addEventListener('close',()=>audio.pause());
const secciones=[...document.querySelectorAll('.diapositiva')];
let actual=0;
const menu=document.querySelector('#lista-diapositivas');
menu.innerHTML=diapositivas.map((slide,i)=>`<button data-ir="${i}"><span>${String(i+1).padStart(2,'0')}</span>${slide.titulo}</button>`).join('');
function ajustar(){
 const lienzo=secciones[actual].querySelector('.lienzo');
 const movil=window.innerWidth<=700;
 const ancho=movil?420:1280;
 const alto=movil?920:720;
 lienzo.style.width=`${ancho}px`;lienzo.style.height=`${alto}px`;
 // Ajustar la composición completa antes que introducir scroll o cortar texto.
 const estilo=getComputedStyle(lienzo);
 const altoContenido=[...lienzo.children].reduce((total,elemento)=>{
   const css=getComputedStyle(elemento);
   return total+elemento.offsetHeight+(parseFloat(css.marginTop)||0)+(parseFloat(css.marginBottom)||0);
 },0);
 const altoNecesario=Math.max(alto,altoContenido+parseFloat(estilo.paddingTop)+parseFloat(estilo.paddingBottom)+2);
 lienzo.style.height=`${altoNecesario}px`;
 const escala=Math.min(presentacion.clientWidth/ancho,presentacion.clientHeight/altoNecesario);
 lienzo.style.transform=`scale(${escala})`;
}
function mostrar(indice,guardar=true){
 if(indice!==actual)audio.pause();
 actual=Math.max(0,Math.min(diapositivas.length-1,indice));
 secciones.forEach((section,i)=>{section.hidden=i!==actual;});
 document.querySelector('#contador').textContent=`${actual+1} / ${diapositivas.length}`;
 document.querySelector('#progreso').value=actual+1;
 document.querySelector('#anterior').disabled=actual===0;document.querySelector('#siguiente').disabled=actual===diapositivas.length-1;
 menu.querySelectorAll('button').forEach((b,i)=>{if(i===actual)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});
 if(guardar)history.replaceState(null,'',`#diapositiva-${actual+1}`);
 ajustar();
}
function desdeHash(){const m=location.hash.match(/^#diapositiva-(\d+)$/);mostrar(m?Number(m[1])-1:0);}
document.querySelector('#anterior').addEventListener('click',()=>mostrar(actual-1));
document.querySelector('#siguiente').addEventListener('click',()=>mostrar(actual+1));
document.querySelector('#inicio').addEventListener('click',()=>mostrar(0));
document.querySelector('#abrir-menu').addEventListener('click',()=>document.querySelector('#menu').showModal());
const pantalla=document.querySelector('#pantalla-completa');
if(!document.fullscreenEnabled){pantalla.disabled=true;pantalla.title='Este navegador no permite pantalla completa; usa la opción de pantalla completa del navegador.';}
pantalla.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{pantalla.textContent='Usa pantalla completa del navegador';}});
document.addEventListener('fullscreenchange',()=>{pantalla.textContent=document.fullscreenElement?'⛶ Salir de pantalla completa':'⛶ Pantalla completa';ajustar();});
document.addEventListener('keydown',event=>{
 if(dialogoAbierto())return;
 if(event.key==='Escape'){if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});return;}
 if(event.target.closest('input,textarea,select,audio,[contenteditable]'))return;
 if(event.key===' '&&event.target.closest('button,a'))return;
 if(['ArrowRight','ArrowLeft',' ','Home','End'].includes(event.key))event.preventDefault();
 if(event.key==='ArrowRight'||event.key===' ')mostrar(actual+1);
 if(event.key==='ArrowLeft')mostrar(actual-1);
 if(event.key==='Home')mostrar(0);if(event.key==='End')mostrar(diapositivas.length-1);
});
let toque=null;
presentacion.addEventListener('touchstart',event=>{if(event.touches.length===1&&!event.target.closest('button,a,audio'))toque={x:event.touches[0].clientX,y:event.touches[0].clientY};else toque=null;},{passive:true});
presentacion.addEventListener('touchend',event=>{if(!toque||dialogoAbierto())return;const dx=event.changedTouches[0].clientX-toque.x,dy=event.changedTouches[0].clientY-toque.y;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5)mostrar(actual+(dx<0?1:-1));toque=null;},{passive:true});
window.addEventListener('hashchange',desdeHash);window.addEventListener('resize',ajustar);new ResizeObserver(ajustar).observe(presentacion);desdeHash();
