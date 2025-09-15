
// scripts.js — small UI interactions
document.addEventListener('DOMContentLoaded', function(){
  // Highlight current nav link
  const links = document.querySelectorAll('.main-nav .nav-link');
  links.forEach(l => {
    l.addEventListener('click', () => {
      links.forEach(x => x.classList.remove('active'));
      l.classList.add('active');
    });
  });

  // Contact form demo - show a success message (no backend)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const msg = form.querySelector('.form-msg');
      msg.textContent = 'Thanks! Your message has been received (demo). We will reply within 48 hours.';
      form.reset();
      setTimeout(()=> msg.textContent='', 7000);
    });
  }
});
