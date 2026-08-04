const header = document.getElementById('site-header');
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');

const setScrolled = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
};
setScrolled();
window.addEventListener('scroll', setScrolled, { passive: true });

const closeMenu = () => {
  menu.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
};

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  document.body.classList.toggle('nav-open', open);
  toggle.setAttribute('aria-expanded', String(open));
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const links = [...menu.querySelectorAll('a[href^="#"]')];
const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
  );
  sections.forEach((section) => observer.observe(section));
}

const revealTargets = [...document.querySelectorAll('[data-reveal]')];
if ('IntersectionObserver' in window && revealTargets.length) {
  document.documentElement.classList.add('reveal-ready');
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = [...entry.target.parentElement.children].filter((el) => el.hasAttribute('data-reveal'));
        const index = Math.max(0, siblings.indexOf(entry.target));
        entry.target.style.transitionDelay = `${Math.min(index, 5) * 80}ms`;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  revealTargets.forEach((target) => revealObserver.observe(target));
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
