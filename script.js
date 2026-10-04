'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
const search = document.querySelector('#publication-search');
let activeYear = 'all';
function filterPublications() {
  const term = search.value.toLowerCase().trim();
  let count = 0;
  document.querySelectorAll('.publication').forEach(publication => {
    const match = (activeYear === 'all' || publication.dataset.year === activeYear) && publication.dataset.search.includes(term);
    publication.hidden = !match;
    if (match) count++;
  });
  document.querySelector('#no-results').hidden = count !== 0;
  document.querySelector('#publication-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  activeYear = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(other => { const selected = other === button; other.classList.toggle('active', selected); other.setAttribute('aria-pressed', String(selected)); });
  filterPublications();
}));
search.addEventListener('input', filterPublications);

// Native video retains 60 fps detail and pauses on the current frame.
const animationVideo = document.querySelector('#night-globe');
const animationToggle = document.querySelector('#animation-toggle');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
animationVideo.muted = true;
animationVideo.controls = false;
animationToggle.hidden = false;
function updateAnimationControl() {
  const playing = !animationVideo.paused;
  animationToggle.textContent = playing ? 'Pause animation Ⅱ' : 'Play animation ▷';
  animationToggle.setAttribute('aria-label', playing ? 'Pause nighttime light animation' : 'Play nighttime light animation');
}
async function playAnimation() {
  try { await animationVideo.play(); }
  catch { /* Autoplay may be blocked; leave a working Play button. */ }
  updateAnimationControl();
}
animationVideo.addEventListener('play', updateAnimationControl);
animationVideo.addEventListener('pause', updateAnimationControl);
animationToggle.addEventListener('click', () => {
  if (animationVideo.paused) playAnimation();
  else animationVideo.pause();
});
motionPreference.addEventListener('change', event => {
  if (event.matches) animationVideo.pause();
  else playAnimation();
});
updateAnimationControl();
if (!motionPreference.matches) playAnimation();
