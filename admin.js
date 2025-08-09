// Password sederhana — jangan simpan password sensitif di client-side
const ADMIN_PASSWORD = 'putra123';

const loginBox = document.getElementById('login-box');
const editor = document.getElementById('editor');
const btnLogin = document.getElementById('btnLogin');
const pw = document.getElementById('pw');
const msg = document.getElementById('msg');

function showEditor(){
  loginBox.style.display = 'none';
  editor.style.display = 'block';
  document.getElementById('admin-heading').textContent = 'Panel Admin';
  loadForm();
}

// cek password
btnLogin.addEventListener('click', () => {
  if(pw.value === ADMIN_PASSWORD){
    showEditor();
  } else {
    msg.textContent = 'Password salah.';
  }
});

// form elements
const siteTitle = document.getElementById('siteTitle');
const brand = document.getElementById('brand');
const title = document.getElementById('title');
const description = document.getElementById('description');
const aboutTitle = document.getElementById('aboutTitle');
const aboutDesc = document.getElementById('aboutDesc');
const accent = document.getElementById('accent');
const footer = document.getElementById('footer');
const btnSave = document.getElementById('btnSave');
const btnReset = document.getElementById('btnReset');
const btnLogout = document.getElementById('btnLogout');

function getDefault(){
  return {
    siteTitle: 'Website Responsive Animasi — Siap Deploy',
    brand: 'MyWeb',
    title: 'Selamat Datang — Website Responsive & Animasi',
    description: 'Contoh website ringan: HTML, CSS, JavaScript. Responsive, smooth-scroll, dan animasi saat elemen muncul.',
    aboutTitle: 'Tentang Website',
    aboutDesc: 'Halaman ini dibuat agar mudah dikembangkan. Struktur file simple — cocok untuk GitHub Pages, Netlify, atau Vercel.',
    accent: '#0072ff',
    footer: '© 2025 MyWeb — Siap deploy'
  };
}

function loadForm(){
  const raw = localStorage.getItem('siteData');
  const data = raw ? JSON.parse(raw) : getDefault();
  siteTitle.value = data.siteTitle || '';
  brand.value = data.brand || '';
  title.value = data.title || '';
  description.value = data.description || '';
  aboutTitle.value = data.aboutTitle || '';
  aboutDesc.value = data.aboutDesc || '';
  accent.value = data.accent || '#0072ff';
  footer.value = data.footer || '';
  msg.textContent = '';
}

btnSave.addEventListener('click', () => {
  const data = {
    siteTitle: siteTitle.value || getDefault().siteTitle,
    brand: brand.value || getDefault().brand,
    title: title.value || getDefault().title,
    description: description.value || getDefault().description,
    aboutTitle: aboutTitle.value || getDefault().aboutTitle,
    aboutDesc: aboutDesc.value || getDefault().aboutDesc,
    accent: accent.value || getDefault().accent,
    footer: footer.value || getDefault().footer
  };
  localStorage.setItem('siteData', JSON.stringify(data));
  msg.textContent = 'Tersimpan — buka halaman utama untuk melihat perubahan (atau refresh).';
});

btnReset.addEventListener('click', () => {
  localStorage.removeItem('siteData');
  loadForm();
  msg.textContent = 'Di-reset ke default.';
});

btnLogout.addEventListener('click', () => {
  editor.style.display = 'none';
  loginBox.style.display = 'block';
  pw.value = '';
  msg.textContent = 'Logged out.';
});
