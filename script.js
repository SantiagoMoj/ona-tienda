const WHATSAPP_NUMBERS = ['3507748968', '3008806606'];
function openWhatsApp(message) {
  const localNumber = WHATSAPP_NUMBERS[Math.floor(Math.random() * WHATSAPP_NUMBERS.length)];
  const internationalNumber = `57${localNumber}`;
  const url = `https://wa.me/${internationalNumber}?text=${encodeURIComponent(message)}`;
  // Navigate the current tab so mobile browsers and popup blockers allow the chat to open.
  window.location.href = url;
}
document.querySelectorAll('.order').forEach(button => button.addEventListener('click', () => {
  const { product, price } = button.dataset;
  openWhatsApp(`¡Hola! 😊 Estoy interesado(a) en ${product} (${price}). ¿Me pueden contar qué tallas y colores están disponibles?`);
}));
document.querySelectorAll('[data-general], .whatsapp-float').forEach(button => button.addEventListener('click', event => {
  event.preventDefault();
  openWhatsApp('¡Hola! 😊 Quiero conocer más sobre las pijamas ONA para toda la familia. ¿Me pueden ayudar?');
}));
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active')?.classList.remove('active'); button.classList.add('active');
  document.querySelectorAll('.product').forEach(product => product.hidden = button.dataset.filter !== 'todos' && product.dataset.category !== button.dataset.filter);
}));
const menuButton = document.querySelector('.menu-toggle');
menuButton.addEventListener('click', () => { const open = document.querySelector('.nav').classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => { document.querySelector('.nav').classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
