/* ============================================================
   D VENKATARAMANA PORTFOLIO — SCRIPT
   ============================================================ */

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ── HAMBURGER ── */
const burger   = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  const [a, b, c] = burger.querySelectorAll('span');
  a.style.cssText = open ? 'transform:rotate(45deg) translate(5px,5px)' : '';
  b.style.cssText = open ? 'opacity:0;transform:scaleX(0)' : '';
  c.style.cssText = open ? 'transform:rotate(-45deg) translate(5px,-5px)' : '';
});

mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.querySelectorAll('span').forEach(s => s.style.cssText = '');
}));

/* ── ACTIVE NAV ── */
const allSections = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');

new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    }
  });
}, { threshold: 0.3 }).observe && allSections.forEach(s =>
  new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    }
  }), { threshold: 0.3 }).observe(s)
);

/* ── TYPED ROLE EFFECT ── */
const roles = [
  'SEO Executive',
  'Technical SEO Specialist',
  'AI-Powered Growth Marketer'
];
const typedEl = document.getElementById('typedRole');
let ri = 0, ci = 0, deleting = false;

function typeRole() {
  if (!typedEl) return;
  const word = roles[ri];
  typedEl.textContent = deleting ? word.slice(0, --ci) : word.slice(0, ++ci);
  if (!deleting && ci === word.length) { deleting = true; setTimeout(typeRole, 2200); return; }
  if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  setTimeout(typeRole, deleting ? 45 : 95);
}
typeRole();

/* ── SCROLL REVEAL ── */
const revealAll = document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right');

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = parseInt(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('in'), delay);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealAll.forEach(el => revealObs.observe(el));

/* ── COUNTER ANIMATION ── */
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el  = e.target;
    const to  = parseFloat(el.dataset.to);
    const suf = el.dataset.suffix || '';
    const dur = 1800;
    const t0  = performance.now();
    const run = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round((1 - Math.pow(1 - p, 4)) * to) + suf;
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
    counterObs.unobserve(el);
  });
}, { threshold: 0.3 });

document.querySelectorAll('[data-to]').forEach(el => counterObs.observe(el));

/* ── EMAILJS INIT ── */
// Public key only — private key must never be in frontend code
emailjs.init({ publicKey: 'jtjhN7XHpbOIrNbar' });

const EMAILJS_SERVICE  = 'YOUR_SERVICE_ID';   // replace after step 2 below
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID';  // replace after step 3 below
const OWNER_WA         = '917981632581';

/* ── CONTACT FORM ── */
const cForm   = document.getElementById('contactForm');
const cSuccess= document.getElementById('formSuccess');

function validate(id, fn) {
  const el = document.getElementById(id);
  if (!el) return true;
  const g = el.closest('.fg');
  const ok = fn(el.value.trim());
  g.classList.toggle('has-error', !ok);
  return ok;
}

['f-name','f-email','f-subject','f-msg'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => el.closest('.fg').classList.remove('has-error'));
});

if (cForm) {
  cForm.addEventListener('submit', ev => {
    ev.preventDefault();
    const name  = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const phone = document.getElementById('f-phone')?.value.trim() || '';
    const subj  = document.getElementById('f-subject').value.trim();
    const msg   = document.getElementById('f-msg').value.trim();

    let ok = true;
    ok = validate('f-name',    v => v.length >= 2)                         && ok;
    ok = validate('f-email',   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) && ok;
    ok = validate('f-subject', v => v.length > 0)                          && ok;
    ok = validate('f-msg',     v => v.length >= 20)                        && ok;

    if (!ok) {
      const first = cForm.querySelector('.has-error');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const btn   = document.getElementById('submitBtn');
    const label = document.getElementById('btn-label');
    const load  = document.getElementById('btn-loading');
    btn.disabled = true;
    label.style.display = 'none';
    load.style.display  = 'inline';

    // Send email via EmailJS (goes directly to your Gmail inbox)
    emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
      from_name:    name,
      from_email:   email,
      from_phone:   phone || 'Not provided',
      subject:      subj,
      message:      msg,
    })
    .then(() => {
      // Also open WhatsApp with the message
      const waText = [
        '👋 *New Portfolio Message*',
        '',
        '*From:* ' + name,
        '*Email:* ' + email,
        phone ? '*Phone:* ' + phone : '',
        '*Subject:* ' + subj,
        '',
        '*Message:*',
        msg,
      ].filter(Boolean).join('\n');

      const waAnchor = document.createElement('a');
      waAnchor.href = 'https://wa.me/' + OWNER_WA + '?text=' + encodeURIComponent(waText);
      waAnchor.target = '_blank';
      waAnchor.rel = 'noopener noreferrer';
      document.body.appendChild(waAnchor);
      waAnchor.click();
      document.body.removeChild(waAnchor);

      cForm.style.display = 'none';
      cSuccess.style.display = 'flex';
    })
    .catch(err => {
      console.error('EmailJS error:', err);
      alert('Message failed to send. Please email me directly at venkat.digitalseo@gmail.com');
    })
    .finally(() => {
      btn.disabled = false;
      label.style.display = 'inline';
      load.style.display  = 'none';
    });
  });
}

window.resetForm = function () {
  if (cForm)    { cForm.reset(); cForm.style.display = 'flex'; }
  if (cSuccess)   cSuccess.style.display = 'none';
};

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
