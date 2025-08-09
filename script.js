// Accessible mobile nav toggle
const btnNav = document.getElementById('btnNav');
const nav = document.getElementById('primaryNav');
btnNav.addEventListener('click', () => {
  const expanded = btnNav.getAttribute('aria-expanded') === 'true';
  btnNav.setAttribute('aria-expanded', String(!expanded));
  nav.setAttribute('aria-expanded', String(!expanded));
});

// IntersectionObserver untuk reveal animations
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
reveals.forEach(el => io.observe(el));

// Simple settings loader - ambil dari localStorage
function loadSiteData(){
  try {
    const raw = localStorage.getItem('siteData');
    if(!raw) return;
    const data = JSON.parse(raw);
    if(data.title) document.getElementById('hero-title').textContent = data.title;
    if(data.description) document.getElementById('hero-desc').textContent = data.description;
    if(data.brand) document.getElementById('brand-name').textContent = data.brand;
    if(data.aboutTitle) document.getElementById('about-title').textContent = data.aboutTitle;
    if(data.aboutDesc) document.getElementById('about-desc').textContent = data.aboutDesc;
    if(data.footer) document.getElementById('footer-text').textContent = data.footer;
    // warna accent
    if(data.accent) {
      document.documentElement.style.setProperty('--accent', data.accent);
      // update button color box-shadow
      const btn = document.querySelector('.btn');
      if(btn){ btn.style.background = data.accent; }
    }
    // title tag
    if(data.siteTitle) document.getElementById('site-title').textContent = data.siteTitle;
  } catch(e){
    console.error('Gagal load siteData', e);
  }
}

// jalankan saat load
window.addEventListener('load', loadSiteData);
