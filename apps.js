const pages = document.querySelectorAll('.page');
const navBtns = document.querySelectorAll('.nav-btn');

function goTo(pageId){
  pages.forEach(p => p.classList.toggle('active', p.id === pageId));
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.page === pageId));
}

navBtns.forEach(btn => {
  btn.addEventListener('click', () => goTo(btn.dataset.page));
});

document.querySelectorAll('[data-goto]').forEach(btn => {
  btn.addEventListener('click', () => goTo(btn.dataset.goto));
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formStatus').textContent = 'Message sent! (demo lang, wala pang backend)';
  this.reset();
});