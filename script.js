// ===== Español / English =====
const traducibles = document.querySelectorAll('[data-en]');
traducibles.forEach((el) => { el.dataset.es = el.innerHTML; });

function cambiarIdioma(nuevo) {
  document.documentElement.lang = nuevo;
  traducibles.forEach((el) => { el.innerHTML = el.dataset[nuevo]; });
  document.body.classList.toggle('ingles', nuevo === 'en');
  try { localStorage.setItem('idioma', nuevo); } catch (e) {}
}
document.getElementById('idioma').addEventListener('click', () => {
  cambiarIdioma(document.documentElement.lang === 'es' ? 'en' : 'es');
});
let guardado = null;
try { guardado = localStorage.getItem('idioma'); } catch (e) {}
if ((guardado || (navigator.language.startsWith('es') ? 'es' : 'en')) === 'en') cambiarIdioma('en');

// ===== Palabra que cambia en la portada =====
const rota = document.getElementById('rota');
if (rota) {
  const palabras = { es: ['páginas web', 'fotografías', 'videos', 'diseños'], en: ['websites', 'photos', 'videos', 'designs'] };
  let n = 0;
  const idiomaActual = () => (document.documentElement.lang === 'en' ? 'en' : 'es');
  rota.textContent = palabras[idiomaActual()][0];
  document.getElementById('idioma').addEventListener('click', () => { rota.textContent = palabras[idiomaActual()][n]; });
  setInterval(() => {
    rota.classList.add('sale');
    setTimeout(() => {
      n = (n + 1) % palabras.es.length;
      rota.textContent = palabras[idiomaActual()][n];
      rota.classList.remove('sale');
      rota.classList.add('entra');
      setTimeout(() => rota.classList.remove('entra'), 450);
    }, 350);
  }, 2200);
}

// ===== Aparecer al bajar =====
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observador.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.aparecer').forEach((el) => observador.observe(el));

// ===== Barra de progreso arriba =====
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  document.getElementById('progreso').style.width = (scrollY / max) * 100 + '%';
});

// ===== Formulario de contacto (envía sin salir de la página) =====
const formulario = document.getElementById('formulario');
if (formulario) {
  formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const estado = document.getElementById('form-estado');
    const en = document.documentElement.lang === 'en';
    estado.textContent = en ? 'Sending…' : 'Enviando…';
    try {
      const r = await fetch(formulario.action, { method: 'POST', body: new FormData(formulario), headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error();
      formulario.reset();
      estado.textContent = en ? 'Thanks! I’ll reply soon.' : '¡Gracias! Te respondo pronto.';
    } catch (err) {
      estado.textContent = en ? 'It didn’t send. Please try again.' : 'No se pudo enviar. Intenta de nuevo.';
    }
  });
}
