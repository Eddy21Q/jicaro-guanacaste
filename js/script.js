'use strict';

// Añade aquí nuevas fotografías confirmadas; src siempre es relativo a index.html.
const imagenes = [
  {id:'yadira-fauna',autora:'yadira',nombre:'Yadira Hernández',src:'assets/images/yadira-piezas-fauna-costarricense.png',titulo:'La naturaleza como inspiración',descripcion:'Piezas decorativas con motivos de lapa roja y orquídea.',alt:'Piezas de jícaro de Yadira Hernández decoradas con lapa roja y orquídea morada',ancho:361,alto:360},
  {id:'yadira-chorreador',autora:'yadira',nombre:'Yadira Hernández',src:'assets/images/yadira-chorreador.png',titulo:'El café también tiene memoria',descripcion:'Chorreador elaborado con jícaro: una pieza de uso cotidiano.',alt:'Chorreador de café de jícaro elaborado por Yadira Hernández',ancho:342,alto:457},
  {id:'yadira-canasta',autora:'yadira',nombre:'Yadira Hernández',src:'assets/images/yadira-canasta-mariposa.png',titulo:'Una mariposa en el jícaro',descripcion:'Canasta decorativa con motivo de mariposa monarca.',alt:'Canasta de jícaro de Yadira Hernández con diseño de mariposa monarca',ancho:365,alto:486},
  {id:'rosaura-coleccion',autora:'rosaura',nombre:'Rosaura Bustos Rodríguez',src:'assets/images/rosaura-coleccion.png',titulo:'Un oficio, muchas formas',descripcion:'Colección de artesanías de Creaciones Artesanales Rous.',alt:'Colección de recipientes y artesanías de jícaro de Rosaura Bustos Rodríguez',ancho:555,alto:312},
  {id:'rosaura-precolombinas',autora:'rosaura',nombre:'Rosaura Bustos Rodríguez',src:'assets/images/rosaura-piezas-precolombinas.png',titulo:'Trazos de herencia chorotega',descripcion:'Piezas con motivos de serpiente emplumada y jaguar chorotega.',alt:'Dos piezas de jícaro de Rosaura Bustos Rodríguez con diseños de inspiración precolombina',ancho:482,alto:267},
  {id:'rosaura-semillas',autora:'rosaura',nombre:'Rosaura Bustos Rodríguez',src:'assets/images/rosaura-materiales-semillas.png',titulo:'Jícaro y semillas',descripcion:'Joyería y materiales naturales utilizados por Rosaura.',alt:'Collar de jícaro y fotografías de las semillas naturales utilizadas por Rosaura Bustos Rodríguez',ancho:445,alto:441}
];

// Incorporar solo un enlace confirmado al documental propio, con autorización.
// Ejemplo de formato: https://www.youtube.com/watch?v=IDENTIFICADOR_REAL
const documental = {url:null,titulo:'El legado artesanal del jícaro en Liberia, Guanacaste'};

const galeria=document.querySelector('#galeria-fotos');
const filtros=[...document.querySelectorAll('[data-filtro]')];
let visibles=[...imagenes];
let indiceVisor=0;
const visor=document.querySelector('#visor');
const fotoVisor=document.querySelector('#visor-foto');
let focoAnterior=null;

function mostrarErrorImagen(img){
  img.hidden=true;
  if(!img.parentElement.querySelector('.imagen-fallida')){
    const aviso=document.createElement('span');aviso.className='imagen-fallida';aviso.textContent='Fotografía no disponible';img.parentElement.append(aviso);
  }
}
function cuidarImagen(img){
  img.addEventListener('error',()=>mostrarErrorImagen(img));
  if(img.complete&&img.naturalWidth===0)mostrarErrorImagen(img);
}
function crearFotografia(registro){
  const figura=document.createElement('figure');figura.className='galeria-item';
  const boton=document.createElement('button');boton.className='ampliar-foto';boton.dataset.imagen=registro.id;boton.type='button';boton.setAttribute('aria-label',`Ampliar: ${registro.titulo}, de ${registro.nombre}`);
  const img=document.createElement('img');img.alt=registro.alt;img.width=registro.ancho;img.height=registro.alto;img.loading='lazy';img.decoding='async';
  img.addEventListener('error',()=>mostrarErrorImagen(img));img.src=registro.src;
  const ampliar=document.createElement('span');ampliar.setAttribute('aria-hidden','true');ampliar.textContent='Ver fotografía ↗';boton.append(img,ampliar);
  const pie=document.createElement('figcaption');
  const autora=document.createElement('p');autora.className='autora';autora.textContent=registro.nombre;
  const titulo=document.createElement('h3');titulo.textContent=registro.titulo;
  const descripcion=document.createElement('p');descripcion.className='descripcion';descripcion.textContent=registro.descripcion;
  pie.append(autora,titulo,descripcion);figura.append(boton,pie);return figura;
}
function filtrarGaleria(filtro){
  visibles=imagenes.filter(img=>filtro==='todas'||img.autora===filtro);
  galeria.replaceChildren(...visibles.map(crearFotografia));
  filtros.forEach(boton=>boton.setAttribute('aria-pressed',String(boton.dataset.filtro===filtro)));
  document.querySelector('#conteo-galeria').textContent=`${visibles.length} fotografías`;
}
filtros.forEach(boton=>boton.addEventListener('click',()=>filtrarGaleria(boton.dataset.filtro)));
document.querySelectorAll('[data-filtro-enlace]').forEach(enlace=>enlace.addEventListener('click',()=>filtrarGaleria(enlace.dataset.filtroEnlace)));
filtrarGaleria('todas');
document.querySelectorAll('img:not(#visor-foto)').forEach(cuidarImagen);

function actualizarVisor(){
  const registro=visibles[indiceVisor];
  document.querySelector('#visor-error').hidden=true;fotoVisor.hidden=false;
  fotoVisor.alt=registro.alt;fotoVisor.src=registro.src;
  document.querySelector('#visor-titulo').textContent=registro.titulo;
  document.querySelector('#visor-autora').textContent=`${registro.nombre} · ${registro.descripcion}`;
  document.querySelector('#visor-contador').textContent=`${indiceVisor+1} / ${visibles.length}`;
  document.querySelector('#foto-anterior').disabled=visibles.length<2;
  document.querySelector('#foto-siguiente').disabled=visibles.length<2;
}
function abrirVisor(id,boton){
  if(!visibles.some(img=>img.id===id))visibles=[...imagenes];
  indiceVisor=visibles.findIndex(img=>img.id===id);if(indiceVisor<0)return;
  focoAnterior=boton;actualizarVisor();visor.showModal();document.body.classList.add('visor-abierto');document.querySelector('#cerrar-visor').focus();
}
function moverFoto(direccion){indiceVisor=(indiceVisor+direccion+visibles.length)%visibles.length;actualizarVisor();}
document.addEventListener('click',event=>{const boton=event.target.closest('[data-imagen]');if(boton)abrirVisor(boton.dataset.imagen,boton);});
document.querySelector('#cerrar-visor').addEventListener('click',()=>visor.close());
document.querySelector('#foto-anterior').addEventListener('click',()=>moverFoto(-1));
document.querySelector('#foto-siguiente').addEventListener('click',()=>moverFoto(1));
fotoVisor.addEventListener('error',()=>{fotoVisor.hidden=true;document.querySelector('#visor-error').hidden=false;});
visor.addEventListener('close',()=>{document.body.classList.remove('visor-abierto');if(focoAnterior?.isConnected)focoAnterior.focus();});
visor.addEventListener('click',event=>{if(event.target!==visor)return;const r=visor.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)visor.close();});
visor.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();moverFoto(1);}if(event.key==='ArrowLeft'){event.preventDefault();moverFoto(-1);}});

const botonMenu=document.querySelector('#boton-menu');
const navegacion=document.querySelector('#navegacion');
function cerrarMenu(){navegacion.classList.remove('abierto');botonMenu.setAttribute('aria-expanded','false');}
botonMenu.addEventListener('click',()=>{const abierto=navegacion.classList.toggle('abierto');botonMenu.setAttribute('aria-expanded',String(abierto));});
navegacion.querySelectorAll('a').forEach(enlace=>enlace.addEventListener('click',cerrarMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navegacion.classList.contains('abierto')){cerrarMenu();botonMenu.focus();}});
window.matchMedia('(min-width:901px)').addEventListener('change',event=>{if(event.matches)cerrarMenu();});
if('IntersectionObserver' in window){
  const observador=new IntersectionObserver(entradas=>{
    entradas.forEach(entrada=>{if(!entrada.isIntersecting)return;navegacion.querySelectorAll('a').forEach(enlace=>{if(enlace.hash===`#${entrada.target.id}`)enlace.setAttribute('aria-current','location');else enlace.removeAttribute('aria-current');});});
  },{rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(seccion=>observador.observe(seccion));
}
// Compatibilidad con enlaces compartidos de la antigua presentación.
if(/^#diapositiva-\d+$/.test(location.hash)){history.replaceState(null,'',`${location.pathname}${location.search}#inicio`);}

const audio=document.querySelector('#audio-rosaura');
function errorAudio(){document.querySelector('#audio-estado').textContent='El navegador no pudo reproducir el audio. Puedes abrirlo con el enlace alternativo.';}
audio.addEventListener('error',errorAudio);audio.querySelector('source').addEventListener('error',errorAudio);
audio.addEventListener('loadedmetadata',()=>{document.querySelector('#audio-estado').textContent='Registro disponible. Pulsa reproducir para escuchar.';});

function obtenerIdYoutube(url){
  try{const u=new URL(url);let id;if(['youtube.com','www.youtube.com'].includes(u.hostname))id=u.searchParams.get('v');else if(u.hostname==='youtu.be')id=u.pathname.slice(1);return /^[A-Za-z0-9_-]{11}$/.test(id||'')?id:null;}catch{return null;}
}
const idVideo=documental.url?obtenerIdYoutube(documental.url):null;
if(idVideo){
  const contenedor=document.querySelector('#video-documental');
  const boton=document.createElement('button');boton.className='boton';boton.type='button';boton.textContent='Cargar documental de YouTube ↗';
  boton.addEventListener('click',()=>{const iframe=document.createElement('iframe');iframe.className='video-marco';iframe.title=documental.titulo;iframe.src=`https://www.youtube-nocookie.com/embed/${idVideo}`;iframe.allow='fullscreen; picture-in-picture';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';contenedor.replaceChildren(iframe);});
  contenedor.replaceChildren(boton);
}

