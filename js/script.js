// script.js

// -------- TIPOS, VALORES Y OPERADORES --------
const visitas = localStorage.getItem("visitas") || 0;
localStorage.setItem("visitas", parseInt(visitas) + 1);

// -------- ESTRUCTURAS DE CONTROL --------
function clasificarEquipo(puntos) {
  if (puntos >= 25) return "Excelente";
  else if (puntos >= 20) return "Bueno";
  else return "Necesita mejorar";
}

// -------- FUNCIONES --------
function mostrarMensaje(mensaje) {
  console.log("Mensaje:", mensaje);
}

const saludar = nombre => `Hola, ${nombre}`;

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function crearContador(inicial = 0) {
  return function () {
    return ++inicial;
  };
}

// -------- OBJETOS Y CLASES --------
class Noticia {
  constructor(titulo, contenido) {
    this.titulo = titulo;
    this.contenido = contenido;
  }
  mostrar() {
    return `${this.titulo}: ${this.contenido}`;
  }
}

// -------- POLIMORFISMO --------
class VideoNoticia extends Noticia {
  mostrar() {
    return `🎥 ${this.titulo.toUpperCase()}`;
  }
}

// -------- MAPAS --------
const mapaEquipos = new Map();
mapaEquipos.set("Universitario", 26);
mapaEquipos.set("Alianza Lima", 24);

// -------- EVENTOS DOM --------
function inicializarEventos() {
  document.querySelectorAll("article").forEach((articulo) => {
    articulo.addEventListener("click", () => {
      articulo.classList.toggle("destacado");
    });
  });

  const nombreInput = document.getElementById("nombre");
  if (nombreInput) {
    nombreInput.addEventListener("focus", () => {
      console.log("Input de nombre enfocado");
    });
  }

  window.addEventListener("scroll", () => {
    console.log("Has hecho scroll");
  });

  window.addEventListener("load", () => {
    console.log("Página completamente cargada");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "d") alert("Presionaste la tecla D");
  });

  // Funcionalidad para menú activo
  inicializarMenuActivo();

  // Mostrar contador de visitas en la columna derecha
  mostrarContadorVisitas();
}

function inicializarMenuActivo() {
  const menuLinks = document.querySelectorAll('.header nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  function limpiarEstadosActivos() {
    menuLinks.forEach(link => {
      link.classList.remove('active');
    });
  }
  
  function activarEnlace(enlaceActivo) {
    limpiarEstadosActivos();
    enlaceActivo.classList.add('active');
  }
  
  menuLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      activarEnlace(link);
    }
    
    link.addEventListener('click', function(e) {
      if (href && href !== '#' && !href.startsWith('http')) {
        activarEnlace(this);
        
        localStorage.setItem('activeMenuItem', href);
      }
    });
  });
  
  const savedActiveItem = localStorage.getItem('activeMenuItem');
  if (savedActiveItem && savedActiveItem === currentPage) {
    menuLinks.forEach(link => {
      if (link.getAttribute('href') === savedActiveItem) {
        activarEnlace(link);
      }
    });
  }
}

function mostrarContadorVisitas() {
  const rightSide = document.querySelector('.rightSide');
  if (rightSide) {
    const contadorDiv = document.createElement('div');
    contadorDiv.className = 'contador-visitas';
    contadorDiv.innerHTML = `
      <h3>📊 Estadísticas del Sitio</h3>
      <div class="visita-info">
        <span class="visita-numero">${localStorage.getItem("visitas")}</span>
        <span class="visita-texto">Visitas totales</span>
      </div>
      <p class="visita-mensaje">¡Gracias por visitarnos!</p>
    `;
    
    const tabla = rightSide.querySelector('.mod-data');
    if (tabla) {
      tabla.parentNode.insertBefore(contadorDiv, tabla.nextSibling);
    } else {
      rightSide.appendChild(contadorDiv);
    }
  }
}

console.log(saludar("Luis"));
console.log("Factorial de 5:", factorial(5));
const contar = crearContador();
console.log(contar());
console.log(contar());

const noticia = new Noticia("Ruidíaz anota", "Gran penal anotado con estilo");
const video = new VideoNoticia("Resumen del clásico", "Video completo disponible");
console.log(noticia.mostrar());
console.log(video.mostrar());
