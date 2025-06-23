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

  setTimeout(() => {
    alert("Gracias por visitar Deporte Total! Visitas: " + localStorage.getItem("visitas"));
  }, 5000);
}

// -------- PRUEBAS --------
console.log(saludar("Luis"));
console.log("Factorial de 5:", factorial(5));
const contar = crearContador();
console.log(contar());
console.log(contar());

const noticia = new Noticia("Ruidíaz anota", "Gran penal anotado con estilo");
const video = new VideoNoticia("Resumen del clásico", "Video completo disponible");
console.log(noticia.mostrar());
console.log(video.mostrar());
