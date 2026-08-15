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

document.getElementById('contactForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById('formStatus').textContent = 'Message sent! Goods nayan! ';
      form.reset();
    } else {
      document.getElementById('formStatus').textContent = 'Wild ka ha!';
    }
  } catch (error) {
    document.getElementById('formStatus').textContent = 'Message porblem, try agian.';
  }
});
