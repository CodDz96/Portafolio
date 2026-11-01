// ===== Casos de estudio =====
// Cada proyecto tiene su texto en español (es) y en inglés (en).
// Para agregar un proyecto nuevo, copia uno de estos bloques y cambia los datos.
const casos = {
  esperanza: {
    mockup: 'esperanza.jpg',
    galeria: ['esperanza-6.jpg', 'esperanza-4.jpg', 'esperanza-5.jpg', 'esperanza-7.jpg'],
    palabra: ['ESPE', 'RAN', 'ZA'], relleno: 'esperanza-1.jpg', fondo: 'esperanza-2.jpg',
    animado: { fondo: '#f4efe9', color: '#3b2216', etiquetaFondo: '#8a4b2a', etiquetaColor: '#fff' },
    es: {
      cliente: 'Esperanza Handmade',
      cliente2: 'Una marca artesanal de cuero',
      sobre: 'Esperanza Handmade crea piezas de cuero genuino hechas a mano: bolsas, carteras, billeteras y accesorios. Cada pieza tiene marcas y tonos únicos, así que no hay dos iguales.',
      necesidad: 'Necesitaban vender en línea sin perder esa sensación de taller. La página tenía que transmitir calidad y confianza, y al mismo tiempo ser fácil de usar para comprar.',
      publico: 'Personas que buscan un regalo especial o una pieza que dure años, y que valoran lo hecho a mano.',
      galeriaPies: ['Foto de estilo de vida', 'Colección de regalos para él', 'Productos recomendados', 'Página de catálogo'],
      titulo: 'Esperanza Handmade: diseño y desarrollo de tienda en línea',
      herramientas: 'WordPress · Código (HTML y CSS) · Photoshop · Lightroom',
      habilidades: 'Tienda en línea · Código a la medida · Fotografía de producto y modelo',
      intro: 'Caso de estudio: una tienda en línea para piezas de cuero hechas a mano',
      contexto: 'Esperanza Handmade hace bolsas, carteras y accesorios de cuero a mano. Necesitaba una tienda en línea donde cada pieza se viera como lo que es: un trabajo artesanal, no un producto más. Su sitio ya existía en WordPress: yo creé la tienda, le di un toque moderno con código propio y tomé las fotos de producto y de modelo.',
      reto: ['Mostrar muchos productos sin que la página se sienta llena.', 'Que cada producto tenga claros su precio, medidas, peso y colores.', 'Ayudar a que la persona siga descubriendo más piezas.'],
      solucion: [['Diseño limpio', 'fondo claro, mucho espacio y una tipografía con serifa que se siente artesanal.'], ['Catálogo por categorías', 'bolsas, carteras, accesorios y regalos para él, con una foto de estilo de vida.'], ['Página de producto', 'galería de fotos, selector de color, medidas, peso y botón de compra.'], ['Recomendaciones', 'una sección de "También te puede gustar" al final de cada producto.']],
      destacado: [['Fotos grandes', 'para que el cuero sea el protagonista.'], ['Texto que se escribe solo', 'para contar la historia de cada pieza.']],
      etiqueta: 'Hecho a mano',
      frase: 'Cada pieza está hecha a mano con cuero genuino.',
      pieAnimado: 'Animación de texto que se escribe sola',
      figuras: [['esperanza-1.jpg', 'Catálogo con foto de estilo de vida'], ['esperanza-2.jpg', 'Página de producto con galería'], ['esperanza-3.jpg', 'Selector de color, medidas y peso']],
      resultado: 'Una tienda clara y elegante, donde el producto es el centro y comprar es fácil desde el celular o la computadora.'
    },
    en: {
      cliente: 'Esperanza Handmade',
      cliente2: 'A handmade leather brand',
      sobre: 'Esperanza Handmade makes genuine leather pieces by hand: bags, purses, wallets and accessories. Every piece has its own marks and tones, so no two are the same.',
      necesidad: 'They needed to sell online without losing that workshop feel. The site had to show quality and build trust, while staying easy to shop.',
      publico: 'People looking for a special gift or a piece that lasts for years, who value handmade work.',
      galeriaPies: ['Lifestyle photo', 'Gifts for him collection', 'Recommended products', 'Catalog page'],
      titulo: 'Esperanza Handmade: online store design and development',
      herramientas: 'WordPress · Code (HTML and CSS) · Photoshop · Lightroom',
      habilidades: 'Online store · Custom code · Product and model photography',
      intro: 'Case study: an online store for handmade leather pieces',
      contexto: 'Esperanza Handmade makes leather bags, wallets and accessories by hand. They needed an online store where each piece looks like what it is: craft work, not just another product. Their site already ran on WordPress: I built the store, gave it a modern look with custom code and shot the product and model photos.',
      reto: ['Show many products without the page feeling crowded.', 'Make price, size, weight and colors clear for every product.', 'Help people keep discovering more pieces.'],
      solucion: [['Clean design', 'light background, lots of space and a serif typeface that feels handmade.'], ['Catalog by category', 'bags, wallets, accessories and gifts for him, with a lifestyle photo.'], ['Product page', 'photo gallery, color picker, size, weight and a buy button.'], ['Recommendations', 'a "You may also like" section under every product.']],
      destacado: [['Big photos', 'so the leather takes center stage.'], ['Self-typing text', 'to tell the story of each piece.']],
      etiqueta: 'Handmade',
      frase: 'Each piece is handcrafted from genuine leather.',
      pieAnimado: 'Self-typing text animation',
      figuras: [['esperanza-1.jpg', 'Catalog with a lifestyle photo'], ['esperanza-2.jpg', 'Product page with gallery'], ['esperanza-3.jpg', 'Color picker, size and weight']],
      resultado: 'A clear, elegant store where the product is the focus and buying is easy on phone or computer.'
    }
  },
  love: {
    mockup: 'love.jpg',
    galeria: ['love-1.jpg', 'love-5.jpg', 'love-4.jpg', 'love-3.jpg'],
    palabra: ['LO', 'VE'], relleno: 'love-1.jpg', fondo: 'love-1.jpg',
    animado: { fondo: '#1c2a4a', color: '#d9b26a', etiquetaFondo: '#d9b26a', etiquetaColor: '#1c2a4a' },
    es: {
      cliente: 'Love Guatemala',
      cliente2: 'Un centro educativo en Guatemala',
      sobre: 'Love Guatemala es un centro educativo que forma jóvenes en carreras técnicas como panadería y computación, con acompañamiento y una comunidad que cree en ellos.',
      necesidad: 'Necesitaban un sitio que mostrara el lugar real, explicara por qué estudiar ahí y llevara a las familias a inscribirse en 2027 sin complicaciones.',
      publico: 'Jóvenes que buscan una carrera técnica y sus familias, que quieren saber cómo es el lugar y cómo inscribirse.',
      galeriaPies: ['Foto aérea del centro', '¿Por qué estudiar con nosotros?', 'Pie de página con logos y redes', 'Estudiantes y maestro'],
      titulo: 'Love Guatemala: diseño y desarrollo del sitio web',
      herramientas: 'Squarespace · Photoshop · Lightroom · Premiere Pro',
      habilidades: 'Diseño web · Fotografía · Video',
      intro: 'Caso de estudio: un sitio para inscribirse a estudiar',
      contexto: 'Love Guatemala es un centro educativo con carreras técnicas como panadería y computación. Necesitaba un sitio que presentara el lugar y guiara a las familias para inscribirse en 2027. Reconstruí todo el sitio, con mis propias fotos y video del centro.',
      reto: ['Explicar la oferta educativa de forma sencilla.', 'Que las familias sepan cómo inscribirse sin tener que llamar.', 'Mostrar el lugar y a los estudiantes reales.'],
      solucion: [['Portada con foto aérea', 'para que se vea el centro y los volcanes desde el primer segundo.'], ['Inscripciones 2027', 'una sección con los pasos explicados de forma simple.'], ['Perfil del estudiante', 'qué aprende cada estudiante y por qué estudiar ahí.'], ['Contacto a la mano', 'redes sociales y botón de WhatsApp en todas las páginas.']],
      destacado: [['Fotos reales', 'de estudiantes, maestros y del lugar.'], ['Textos con movimiento', 'para los mensajes más importantes.']],
      etiqueta: 'Inscripciones 2027',
      frase: 'Tu historia puede comenzar aquí.',
      pieAnimado: 'Animación de texto que se escribe sola',
      figuras: [['love-1.jpg', 'Portada con foto aérea del centro'], ['love-2.jpg', 'Sección de inscripciones 2027'], ['love-3.jpg', 'Perfil del estudiante con fotos reales']],
      resultado: 'Un sitio claro y cercano, que muestra el lugar como es y lleva a las familias paso a paso hasta la inscripción.'
    },
    en: {
      cliente: 'Love Guatemala',
      cliente2: 'A school in Guatemala',
      sobre: 'Love Guatemala is a school that trains young people in technical programs such as baking and computing, with mentoring and a community that believes in them.',
      necesidad: 'They needed a site that shows the real place, explains why to study there and leads families to enroll for 2027 without hassle.',
      publico: 'Young people looking for a technical career and their families, who want to see the place and know how to enroll.',
      galeriaPies: ['Aerial photo of the campus', 'Why study with us?', 'Footer with logos and social links', 'Students and teacher'],
      titulo: 'Love Guatemala: website design and development',
      herramientas: 'Squarespace · Photoshop · Lightroom · Premiere Pro',
      habilidades: 'Web design · Photography · Video',
      intro: 'Case study: a website to enroll in school',
      contexto: 'Love Guatemala is a school with technical programs such as baking and computing. They needed a site that presents the place and guides families through 2027 enrollment. I rebuilt the whole site, with my own photos and video of the school.',
      reto: ['Explain the programs in a simple way.', 'Let families know how to enroll without having to call.', 'Show the real place and real students.'],
      solucion: [['Aerial photo hero', 'so you see the campus and the volcanoes from the first second.'], ['2027 enrollment', 'a section with the steps explained simply.'], ['Student profile', 'what each student learns and why study there.'], ['Contact at hand', 'social links and a WhatsApp button on every page.']],
      destacado: [['Real photos', 'of students, teachers and the place.'], ['Moving text', 'for the most important messages.']],
      etiqueta: '2027 enrollment',
      frase: 'Your story can start here.',
      pieAnimado: 'Self-typing text animation',
      figuras: [['love-1.jpg', 'Hero with an aerial photo of the campus'], ['love-2.jpg', '2027 enrollment section'], ['love-3.jpg', 'Student profile with real photos']],
      resultado: 'A clear, friendly site that shows the place as it is and walks families step by step to enrollment.'
    }
  }
};

const titulos = {
  es: { proyecto: 'El proyecto', sobre: 'Sobre el cliente', necesidad: 'Qué necesitaban', publico: 'Para quién es', proceso: 'Mi proceso', galeria: 'Galería', pasos: [['Escuchar', 'Entender el negocio, su público y lo que quería lograr.'], ['Diseñar', 'Definir la estructura, el estilo y cada pantalla.'], ['Programar', 'Construir el sitio para que se vea bien en celular y computadora.'], ['Entregar', 'Revisar cada detalle y publicar el sitio.']], contexto: 'Contexto', reto: 'El reto', solucion: 'Cómo lo resolví', destacado: 'Lo más destacado', resultado: 'Resultado' },
  en: { proyecto: 'The project', sobre: 'About the client', necesidad: 'What they needed', publico: 'Who it’s for', proceso: 'My process', galeria: 'Gallery', pasos: [['Listen', 'Understand the business, its audience and its goals.'], ['Design', 'Define the structure, the style and every screen.'], ['Build', 'Code the site so it works on phone and computer.'], ['Deliver', 'Check every detail and publish the site.']], contexto: 'Background', reto: 'The challenge', solucion: 'The approach', destacado: 'Key highlights', resultado: 'Outcome' }
};

const id = new URLSearchParams(location.search).get('p');
const caso = casos[id] || casos.esperanza;
let escribiendo = null;

function lista(items) {
  return '<ul>' + items.map((i) => Array.isArray(i) ? `<li><b>${i[0]}:</b> ${i[1]}</li>` : `<li>${i}</li>`).join('') + '</ul>';
}

function pintar(idioma) {
  const t = caso[idioma];
  const h = titulos[idioma];
  const a = caso.animado;
  const en = idioma === 'en';
  document.title = `${t.cliente} | Pabel López`;
  const [f1, f2, f3] = t.figuras;
  const num = (i) => String(i + 1).padStart(2, '0');

  document.getElementById('c-diapos').innerHTML = `
    <!-- 1. Portada del proyecto -->
    <section class="diapo d-portada">
      <img class="d-fondo" src="Imagenes/${caso.mockup}" alt="">
      <div class="d-velo"></div>
      <div class="d-columnas"><span></span><span></span><span></span><span></span></div>
      <div class="d-vidrio"></div>
      <a class="d-volver" href="index.html#proyectos">${en ? '← Back to projects' : '← Volver a proyectos'}</a>
      <div class="d-marca"><b>${t.cliente}</b><small>${en ? 'Case study' : 'Caso de estudio'}</small></div>
      <div class="d-titulo">
        <h1>${t.titulo}</h1>
        <span class="d-corchete">[ ${t.habilidades} ]</span>
      </div>
      <div class="d-pies">
        <span>${en ? 'Tools' : 'Herramientas'}<br>${t.herramientas}</span>
        <span>${en ? 'Skills' : 'Habilidades'}<br>${t.habilidades}</span>
        <span class="d-autor"><img src="Imagenes/avatar.jpg" alt="">Pabel López</span>
      </div>
    </section>

    <!-- 2. Contexto y reto: palabra gigante con foto -->
    <section class="diapo d-dividida aparecer">
      <div class="d-gigante" style="background-image:url(Imagenes/${caso.relleno})">${caso.palabra.map((p) => `<span>${p}</span>`).join('')}</div>
      <div class="d-clara">
        <div class="d-celda d-celda-ancha">
          <h2>${h.contexto}</h2>
          <p>${t.contexto}</p>
        </div>
        ${t.reto.map((r, i) => `<div class="d-celda"><b>${num(i)}</b><p>${r}</p></div>`).join('')}
        <div class="d-celda d-celda-foto"><img src="Imagenes/${f1[0]}" alt=""></div>
      </div>
    </section>

    <!-- 2b. El proyecto: más contexto -->
    <section class="diapo d-proyecto aparecer">
      <div class="d-cabeza"><h2>${h.proyecto}</h2><span class="d-corchete">[ ${t.cliente2} ]</span></div>
      <div class="d-tres">
        <div class="d-celda"><b>${h.sobre}</b><p>${t.sobre}</p></div>
        <div class="d-celda"><b>${h.necesidad}</b><p>${t.necesidad}</p></div>
        <div class="d-celda"><b>${h.publico}</b><p>${t.publico}</p></div>
      </div>
      <div class="d-proceso">
        <div class="d-celda d-proceso-titulo"><h3>${h.proceso}</h3></div>
        ${h.pasos.map(([p, d], i) => `<div class="d-celda"><b>${num(i)}</b><h3>${p}</h3><p>${d}</p></div>`).join('')}
      </div>
    </section>

    <!-- 3. Cómo lo resolví -->
    <section class="diapo d-oscura aparecer">
      <div class="d-cabeza"><h2>${h.solucion}</h2><span class="d-corchete">[ ${t.solucion.length} ${en ? 'key decisions' : 'decisiones clave'} ]</span></div>
      <div class="d-rejilla">
        ${t.solucion.map(([titulo, texto], i) => `<div class="d-celda"><b>${num(i)}</b><h3>${titulo}</h3><p>${texto}</p></div>`).join('')}
      </div>
      <figure class="d-figura"><img src="Imagenes/${f2[0]}" alt="${f2[1]}"><figcaption>${f2[1]}</figcaption></figure>
    </section>

    <!-- 4. Misión con movimiento -->
    <section class="diapo d-mision aparecer" style="--m-fondo:${a.fondo};--m-color:${a.color}">
      <div class="d-fantasma">${t.cliente}</div>
      <img class="d-fondo" src="Imagenes/${caso.fondo}" alt="">
      <div class="d-mision-velo"></div>
      <div class="d-mision-texto">
        <span class="bloque-etiqueta" style="background:${a.etiquetaFondo};color:${a.etiquetaColor}">${t.etiqueta}</span>
        <div class="bloque-frase"><span id="frase"></span><span class="cursor"></span></div>
      </div>
      <div class="d-pies">
        ${t.destacado.map(([titulo, texto]) => `<span><b>${titulo}</b><br>${texto}</span>`).join('')}
        <span>${t.pieAnimado}</span>
      </div>
    </section>

    <!-- 4b. Galería -->
    <section class="diapo d-galeria aparecer">
      <div class="d-cabeza"><h2>${h.galeria}</h2><span class="d-corchete">[ ${caso.galeria.length} ${en ? 'images' : 'imágenes'} ]</span></div>
      <div class="d-mosaico">
        ${caso.galeria.map((g, i) => `<figure class="m${i + 1}"><img src="Imagenes/${g}" alt="${t.galeriaPies[i]}"><figcaption><b>${num(i)}</b> ${t.galeriaPies[i]}</figcaption></figure>`).join('')}
      </div>
    </section>

    <!-- 5. Detalle -->
    <section class="diapo d-detalle aparecer">
      <figure><img src="Imagenes/${f3[0]}" alt="${f3[1]}"></figure>
      <div class="d-clara d-una">
        <div class="d-celda"><span class="d-corchete d-oscuro">[ ${en ? 'Detail' : 'Detalle'} ]</span><h2>${f3[1]}</h2></div>
        <div class="d-celda"><h2>${h.resultado}</h2><p>${t.resultado}</p></div>
      </div>
    </section>

    <!-- 6. Cierre -->
    <section class="diapo d-cierre aparecer">
      <div class="d-gigante-fino">Pabel López</div>
      <h2>${en ? 'Let’s build your<br>next project' : 'Hagamos tu<br>próximo proyecto'}</h2>
      <div class="d-pies">
        <span>${en ? 'Photography, video, design<br>and websites' : 'Fotografía, video, diseño<br>y páginas web'}</span>
        <span>${en ? 'Tell me about your project<br>and I’ll reply within 24 hours' : 'Cuéntame de tu proyecto<br>y te respondo en 24 horas'}</span>
        <a class="pildora pildora-llena" href="index.html#contacto">${en ? 'Work with me' : 'Trabajemos'}</a>
      </div>
    </section>`;

  document.getElementById('c-mas').innerHTML = Object.entries(casos)
    .filter(([clave]) => casos[clave] !== caso)
    .map(([clave, c]) => `<a href="caso.html?p=${clave}"><div class="mas-foto"><img src="Imagenes/${c.mockup}" alt=""></div><span>${c[idioma].cliente}</span><small>${c[idioma].habilidades}</small></a>`)
    .join('');

  escribirFrase(t.frase);
  observar();
}

// ===== Frase que se escribe y se borra sola =====
function escribirFrase(frase) {
  clearTimeout(escribiendo);
  const el = document.getElementById('frase');
  let i = 0;
  let borrando = false;
  function paso() {
    if (!borrando) {
      i++;
      el.textContent = frase.slice(0, i);
      if (i === frase.length) { borrando = true; escribiendo = setTimeout(paso, 2600); return; }
      escribiendo = setTimeout(paso, 70);
    } else {
      i--;
      el.textContent = frase.slice(0, i);
      if (i === 0) { borrando = false; escribiendo = setTimeout(paso, 600); return; }
      escribiendo = setTimeout(paso, 28);
    }
  }
  paso();
}

// ===== Aparecer al bajar =====
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observador.unobserve(e.target); } });
}, { threshold: 0.15 });
function observar() { document.querySelectorAll('.aparecer:not(.visible)').forEach((el) => observador.observe(el)); }

// ===== Barra de progreso =====
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  document.getElementById('progreso').style.width = (scrollY / max) * 100 + '%';
});

// ===== Español / English =====
const traducibles = document.querySelectorAll('[data-en]');
traducibles.forEach((el) => { el.dataset.es = el.innerHTML; });
function cambiarIdioma(nuevo) {
  document.documentElement.lang = nuevo;
  traducibles.forEach((el) => { el.innerHTML = el.dataset[nuevo]; });
  document.body.classList.toggle('ingles', nuevo === 'en');
  try { localStorage.setItem('idioma', nuevo); } catch (e) {}
  pintar(nuevo);
}
document.getElementById('idioma').addEventListener('click', () => cambiarIdioma(document.documentElement.lang === 'es' ? 'en' : 'es'));
let guardado = null;
try { guardado = localStorage.getItem('idioma'); } catch (e) {}
cambiarIdioma((guardado || (navigator.language.startsWith('es') ? 'es' : 'en')) === 'en' ? 'en' : 'es');
