'use strict';
const sections = [...document.querySelectorAll('main section')];
const picker = document.querySelector('#section-select');
const previous = document.querySelector('#prev');
const next = document.querySelector('#next');
let active = 0;
function indexFromHash() {
  return Math.max(0, sections.findIndex(section => '#' + section.id === location.hash));
}
function render(index, focus = false) {
  active = index;
  sections.forEach((section, i) => { section.hidden = i !== index; });
  picker.value = sections[index].id;
  const count = `${index + 1} / ${sections.length}`;
  document.querySelector('#position').textContent = count;
  document.querySelector('#top-position').textContent = count;
  previous.disabled = index === 0;
  next.textContent = index === sections.length - 1 ? '처음으로' : '다음';
  next.setAttribute('aria-label', index === sections.length - 1 ? '처음 섹션으로' : '다음 섹션');
  if (focus) {
    sections[index].querySelector('h2').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
function go(index) {
  if (index < 0 || index >= sections.length) return;
  history.pushState(null, '', '#' + sections[index].id);
  render(index, true);
}
previous.addEventListener('click', () => go(active - 1));
next.addEventListener('click', () => go(active === sections.length - 1 ? 0 : active + 1));
picker.addEventListener('change', () => go(sections.findIndex(section => section.id === picker.value)));
window.addEventListener('popstate', () => render(indexFromHash(), true));
window.addEventListener('hashchange', () => render(indexFromHash(), true));
render(indexFromHash());
document.querySelector('.section-picker').hidden = false;
document.querySelector('.page-controls').hidden = false;
