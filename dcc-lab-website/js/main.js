// ====== MOBILE MENU ======
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('mainNav');

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  mobileToggle.classList.toggle('active');
});

// Close menu when link clicked (mobile)
document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    if(nav.classList.contains('nav-open')){
      nav.classList.remove('nav-open');
      mobileToggle.classList.remove('active');
    }
  });
});

// ====== STATS COUNT-UP ======
const counters = document.querySelectorAll('.stat-num');

counters.forEach(counter => {
  const animateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if(count < target) {
      counter.innerText = Math.min(count + increment, target);
      setTimeout(animateCount, 20);
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) animateCount();
    });
  }, { threshold: 0.5 });

  observer.observe(counter);
});

// ====== GITHUB / WHATSAPP LINKS ======
// WhatsApp buttons (hero & CTA)
document.querySelectorAll('#waHero, #waCta, #waContact').forEach(btn => {
  if(btn){
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(btn.href, '_blank');
    });
  }
});

// Placeholder links for Gumroad & Telegram
document.getElementById('gumroadFooter').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://gumroad.com/', '_blank');
});
document.getElementById('telegramFooter').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://t.me/', '_blank');
});

// ====== HERO FLOATING ANIMATION ======
// Already handled via CSS keyframes (.float & .rotate)

// ====== OPTIONAL: SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
