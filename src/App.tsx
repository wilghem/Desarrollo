import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'

// ---- small helpers moved from script.js ----
const getVisits = () => Number(localStorage.getItem('visitas') || '0')
const bumpVisits = () => {
  const next = getVisits() + 1
  localStorage.setItem('visitas', String(next))
  return next
}

function useArticleHighlight() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('article')
      if (el) el.classList.toggle('destacado')     // toggle .destacado as in original JS
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

// ---- layout shells ----
function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')
  return (
    <header className="header">
      <h1>Deporte Total</h1>
      <nav>
        <NavLink to="/" className={linkClass}>Inicio</NavLink>
        <NavLink to="/noticias" className={linkClass}>Noticias</NavLink>
        <NavLink to="/torneos" className={linkClass}>Torneos</NavLink>
        <NavLink to="/estadisticas" className={linkClass}>Estadísticas</NavLink>
        <a href="#">Contacto</a>
      </nav>
    </header>
  )
}

function LeftSide() {
  return (
    <aside className="leftSide">
      <div className="menu-box">
        <h2>Secciones</h2>
        <ul className="league-menu">
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/noticias">Noticias</NavLink></li>
          <li><NavLink to="/torneos">Torneos</NavLink></li>
          <li><NavLink to="/estadisticas">Estadísticas</NavLink></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>

      <div className="formulario-contacto">
        <h2>Contáctanos</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" placeholder="Tu nombre" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Tu correo" />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows={4} placeholder="Escribe tu mensaje" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </aside>
  )
}

function RightSide({ children }: { children?: React.ReactNode }) {
  const [visits, setVisits] = useState(0)
  useEffect(() => setVisits(bumpVisits()), [])
  return (
    <aside className="rightSide">
      {children}
      <div className="contador-visitas">
        <h3>📊 Estadísticas del Sitio</h3>
        <div className="visita-info">
          <span className="visita-numero">{visits}</span>
          <span className="visita-texto">Visitas totales</span>
        </div>
        <p className="visita-mensaje">¡Gracias por visitarnos!</p>
      </div>
    </aside>
  )
}

function Layout({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="layout">
        <LeftSide />
        <main className="body">{children}</main>
        <RightSide>{right}</RightSide>
      </div>
      <footer>
        <p>© 2025 Deporte Total. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

// ---- pages (ported content) ----
function HomePage() {
  useArticleHighlight()
  return (
    <Layout
      right={
        <>
          <img src="/img/futbol-deporte.gif" alt="movimiento" className="gif-move" />
          <table className="mod-data" aria-label="Tabla de posiciones">
            <thead>
              <tr><th>Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>DIF</th><th>PTS</th></tr>
            </thead>
            <tbody>
              <tr><td>Universitario</td><td>7</td><td>4</td><td>3</td><td>0</td><td>+7</td><td>15</td></tr>
              <tr><td>Sporting Cristal</td><td>6</td><td>4</td><td>2</td><td>0</td><td>+11</td><td>14</td></tr>
              <tr><td>Cusco FC</td><td>5</td><td>4</td><td>1</td><td>0</td><td>+6</td><td>13</td></tr>
              <tr><td>Deportivo Garcilaso</td><td>7</td><td>3</td><td>4</td><td>0</td><td>+5</td><td>13</td></tr>
              <tr><td>Alianza Lima</td><td>7</td><td>3</td><td>4</td><td>1</td><td>+2</td><td>12</td></tr>
            </tbody>
          </table>
        </>
      }
    >
      <h2>Últimas Noticias</h2>
      <div className="container">
        {/* Same articles as your index.html */}
        <article>
          <figure>
            <picture>
              <source srcSet="/img/clasicoUAL.jpeg 1x, /img/clasicoUAL.jpeg 2x" />
              <img src="/img/clasicoUAL.jpeg" alt="Raúl Ruidíaz" className="img-article" loading="lazy" />
            </picture>
            <figcaption>Clasico</figcaption>
          </figure>
          <h3>Clasico sin goles en el Monumental</h3>
          <p>Universitario y Alianza Lima empataron 0-0; Alianza terminó con 9 jugadores por expulsiones.</p>
        </article>

        <article>
          <figure>
            <picture>
              <source srcSet="/img/elpendiente.jpg 1x, /img/elpendiente.jpg 2x" />
              <img src="/img/elpendiente.jpg" alt="Cienciano" className="img-article" loading="lazy" />
            </picture>
            <figcaption>El pendiente</figcaption>
          </figure>
          <h3>Alianza Universidad vs Los Chankas, sábado 30/08 - 3:00 p.m.</h3>
          <p>El pendiente de la Fecha 6 se juega en Huánuco; TV por L1 MAX / L1 Play</p>
        </article>

        <article>
          <figure>
            <picture>
              <source srcSet="/img/Binacional.jpeg 1x, /img/Binacional.jpeg 2x" />
              <img src="/img/binacional.jpeg" alt="Cienciano" className="img-article" loading="lazy" />
            </picture>
            <figcaption>FPF toma dura decisión</figcaption>
          </figure>
          <h3>FPF excluye definitivamente a Binacional de la Liga 1 2025</h3>
          <p>Decisión oficial del 19 de agosto afecta el Clausura y el acumulado.</p>
        </article>

        <article>
          <figure>
            <picture>
              <source srcSet="/img/melgarempate.jpeg 1x, /img/melgarempate.jpeg 2x" />
              <img src="/img/melgarempate.jpeg" alt="Cienciano" className="img-article" loading="lazy" />
            </picture>
            <figcaption>Sorprendente empate</figcaption>
          </figure>
          <h3>ADT 2–2 Melgar en Tarma (Fecha 7)</h3>
          <p>Melgar rescató un empate agónico; partido vibrante en el Unión Tarma.</p>
        </article>
      </div>

      <section>
        <h2>Mapa interactivo de los países con ligas principales</h2>
        <figure>
          <img src="/img/mapa-mundial.svg" alt="Mapa Mundial" useMap="#worldmap" className="img-map" width={600} />
          <figcaption>Haz clic en una región para saber más.</figcaption>
          <map name="worldmap" id="worldmap">
            <area shape="rect" coords="286,24,524,140"
              href="https://en-m-wikipedia-org.translate.goog/wiki/Big_Five_(association_football)?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc"
              alt="Europa" title="Europa" target="_blank" />
            <area shape="circle" coords="25,28,213,181"
              href="https://es.wikipedia.org/wiki/Anexo:Liga_m%C3%A1s_fuerte_de_Norte,_Centro_Am%C3%A9rica_y_el_Caribe_del_Siglo_XXI"
              alt="América del Norte" title="América del Norte" target="_blank" />
            <area shape="rect" coords="108,179,213,314"
              href="https://es.wikipedia.org/wiki/Anexo:Liga_m%C3%A1s_fuerte_de_Sudam%C3%A9rica_del_Siglo_XXI"
              title="Sudamérica" alt="Sudamérica" target="_blank" />
            <area shape="rect" coords="227,148,355,274"
              href="https://es.wikipedia.org/wiki/Anexo:Liga_m%C3%A1s_fuerte_de_%C3%81frica_del_Siglo_XXI"
              title="Africa" alt="Africa" target="_blank" />
          </map>
        </figure>
      </section>
    </Layout>
  )
}

function NoticiasPage() {
  useArticleHighlight()
  return (
    <Layout>
      <h2>Últimas Noticias</h2>
      <div className="container">
        <article>
          <figure>
            <img src="/img/betodasilva.jpeg" alt="Beto da silva" className="img-article"/>
            <figcaption>Estadio Inca Garcilaso de la Vega</figcaption>
          </figure>
          <h3>Cienciano 1–0 Atlético Grau (Fecha 7)</h3>
          <p>Triunfo imperial en Cusco con gol de Beto Da Silva.</p>
          <a className="leer-mas" href="#"><span>→</span> Leer más</a>
        </article>

        <article>
          <figure>
            <img src="/img/piero.jpeg" alt="Refuerzo de Piero Cari" className="img-article"/>
            <figcaption>Eliminatorias</figcaption>
          </figure>
          <h3>Piero Cari será parte del Perú vs Uruguay por Eliminatorias</h3>
          <p>El volante de Alianza Lima sorprendió a Óscar Ibáñez en los entrenamientos de la blanquirroja.</p>
          <a className="leer-mas" href="#"><span>→</span> Leer más</a>
        </article>

        <article>
          <figure>
            <img src="/img/apagon.jpeg" alt="Multa por apagon" className="img-article"/>
            <figcaption>Indecopi Multa</figcaption>
          </figure>
          <h3>Indecopi multó a Alianza Lima por apagar las luces en la final del 2023 ante Universitario</h3>
          <p>La final del 2023 no acabó de la mejor manera y los blanquiazules tendrán que pagar una fuerte multa.</p>
          <a className="leer-mas" href="#"><span>→</span> Leer más</a>
        </article>

        <article>
          <figure>
            <img src="/img/pipo.jpeg" alt="Puso fin?" className="img-article"/>
            <figcaption>Pipo Gorosito puso fin ?</figcaption>
          </figure>
          <h3>Pipo Gorosito puso fecha límite para su renovación en Alianza Lima</h3>
          <p>El DT de los Íntimos habló en exclusiva con Equipo F sobre su presente y futuro en La Victoria.</p>
          <a className="leer-mas" href="#"><span>→</span> Leer más</a>
        </article>
      </div>
    </Layout>
  )
}

function TorneosPage() {
  return (
    <Layout right={
      <>
        <h2>Resultados recientes</h2>
        <table className="mod-data">
          <thead><tr><th>Partido</th><th>Resultado</th></tr></thead>
          <tbody>
            <tr><td>Universitario vs Alianza Lima</td><td>0 - 0</td></tr>
            <tr><td>Cienciano vs Atletico Grau</td><td>1 - 0</td></tr>
            <tr><td>ADT vs Melgar</td><td>2 - 2</td></tr>
          </tbody>
        </table>
        <h2>Publicidad</h2>
        <img src="/img/publicidad.gif" alt="Publicidad" className="gif-move" />
        <img src="/img/publicidad2.gif" alt="Publicidad" className="gif-move" />
      </>
    }>
      <h2>Torneos en curso</h2>

      <section>
        <h3>Liga 1 - Clausura 2025</h3>
        <img src="/img/liga1.png" alt="Liga 1" className="img-map" />
        <p>
          El Torneo Clausura entra en una etapa decisiva con una lucha muy pareja en los primeros lugares...
        </p>
      </section>

      <section>
        <h3>Tabla de Posiciones</h3>
        <table className="mod-data">
          <thead>
            <tr><th>#</th><th>Equipo</th><th>PTS</th><th>PJ</th><th>PG</th><th>PE</th><th>PP</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Universitario</td><td>15</td><td>4</td><td>3</td><td>3</td><td>0</td></tr>
            <tr><td>2</td><td>Sporting Cristal</td><td>14</td><td>6</td><td>4</td><td>2</td><td>0</td></tr>
            <tr><td>3</td><td>Cusco FC</td><td>13</td><td>5</td><td>4</td><td>1</td><td>0</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Próximos Partidos</h3>
        <div className="container">
          <article>
            <h3>Alianza Universidad vs Los Chankas</h3>
            <p>Fecha: 30 de agosto - 15:00<br/>Estadio: Heraclio Tapia</p>
          </article>
          <article>
            <h3>Atletico Grau vs ADT</h3>
            <p>Fecha: 31 de agosto - 15:00<br/>Estadio: Campeones del '36</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

function EstadisticasPage() {
  return (
    <Layout>
      <h2>Estadísticas de la Temporada</h2>

      <section>
        <h3>Máximos Goleadores</h3>
        <table className="mod-data">
          <thead><tr><th>Jugador</th><th>Equipo</th><th>Goles</th></tr></thead>
          <tbody>
            <tr><td>Facundo Callejo</td><td>Cusco FC</td><td>4</td></tr>
            <tr><td>Kevin Sandoval</td><td>Deportivo Garcilaso</td><td>4</td></tr>
            <tr><td>Ezequiel Naya</td><td>Deportivo Garcilaso</td><td>3</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Maximos asistidores</h3>
        <table className="mod-data">
          <thead><tr><th>Jugador</th><th>Equipo</th><th>Partidos jugados</th><th>Asistencias</th></tr></thead>
          <tbody>
            <tr><td>Martin Tavara</td><td>Sporting Cristal</td><td>6</td><td>5</td></tr>
            <tr><td>Marcos Lliuya</td><td>Alianza Universidad</td><td>6</td><td>3</td></tr>
            <tr><td>Pablo Erustes</td><td>Deportivo Garcilaso</td><td>7</td><td>3</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Fair Play del clausura</h3>
        <table className="mod-data">
          <thead><tr><th>Equipo</th><th>Amarillas</th><th>Rojas</th><th>Puntos</th></tr></thead>
          <tbody>
            <tr><td>Los Chankas</td><td>7</td><td>0</td><td>7</td></tr>
            <tr><td>Juan Pablo II</td><td>7</td><td>1</td><td>12</td></tr>
            <tr><td>Alianza atletico</td><td>9</td><td>1</td><td>14</td></tr>
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/noticias" element={<NoticiasPage />} />
      <Route path="/torneos" element={<TorneosPage />} />
      <Route path="/estadisticas" element={<EstadisticasPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
