'use strict';
const sections = [...document.querySelectorAll('main section')];
const links = [...document.querySelectorAll('#index a')];
const previous = document.querySelector('#prev');
const next = document.querySelector('#next');
const position = document.querySelector('#position');
let active = 0;
function update(index) {
  active = index;
  links.forEach((link, i) => {
    if (i === index) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  previous.disabled = index === 0;
  next.disabled = index === sections.length - 1;
  position.textContent = `${String(index + 1).padStart(2, '0')} / ${sections.length}`;
  const nav = document.querySelector('#index');
  if (nav.scrollWidth > nav.clientWidth) {
    const link = links[index];
    nav.scrollLeft = link.offsetLeft - nav.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2;
  }
}
function go(index) {
  if (index < 0 || index >= sections.length) return;
  location.hash = sections[index].id;
  update(index);
}
previous.addEventListener('click', () => go(active - 1));
next.addEventListener('click', () => go(active + 1));
links.forEach((link, i) => link.addEventListener('click', () => update(i)));
let scheduled = false;
function onScroll() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    const threshold = matchMedia('(max-width:850px)').matches ? 115 : 80;
    let index = 0;
    sections.forEach((section, i) => { if (section.getBoundingClientRect().top <= threshold) index = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) index = sections.length - 1;
    if (index !== active) update(index);
    scheduled = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
window.addEventListener('hashchange', () => {
  const index = sections.findIndex(section => `#${section.id}` === location.hash);
  if (index >= 0) update(index);
});
update(Math.max(0, sections.findIndex(section => `#${section.id}` === location.hash)));
document.querySelector('.reader-controls').hidden = false;
