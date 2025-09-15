const seedArticles = [
  {
    id: "1",
    title: "Clasico sin goles en el Monumental",
    summary: "Universitario y Alianza Lima empataron 0-0; Alianza terminó con 9 jugadores por expulsiones.",
    category: "Clasico",
    imageUrl: "https://example.com/img/clasicoUAL.jpeg",
    imageAlt: "Raúl Ruidíaz",
    sourceSet: "/img/clasicoUAL.jpeg 1x, /img/clasicoUAL.jpeg 2x",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "2",
    title: "Alianza Universidad vs Los Chankas, sábado 30/08 - 3:00 p.m.",
    summary: "El pendiente de la Fecha 6 se juega en Huánuco; TV por L1 MAX / L1 Play",
    category: "El pendiente",
    imageUrl: "https://example.com/img/elpendiente.jpg",
    imageAlt: "Cienciano",
    sourceSet: "/img/elpendiente.jpg 1x, /img/elpendiente.jpg 2x",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "3",
    title: "FPF excluye definitivamente a Binacional de la Liga 1 2025",
    summary: "Decisión oficial del 19 de agosto afecta el Clausura y el acumulado.",
    category: "FPF toma dura decisión",
    imageUrl: "https://example.com/img/binacional.jpeg",
    imageAlt: "Cienciano",
    sourceSet: "/img/Binacional.jpeg 1x, /img/Binacional.jpeg 2x",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "4",
    title: "ADT 2–2 Melgar en Tarma (Fecha 7)",
    summary: "Melgar rescató un empate agónico; partido vibrante en el Unión Tarma.",
    category: "Sorprendente empate",
    imageUrl: "https://example.com/img/melgarempate.jpeg",
    imageAlt: "Cienciano",
    sourceSet: "/img/melgarempate.jpeg 1x, /img/melgarempate.jpeg 2x",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

module.exports = { seedArticles };
