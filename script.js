function animateSection(section) {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 1s ease, transform 1s ease';
  
  requestAnimationFrame(() => {
    section.style.opacity = 1;
    section.style.transform = 'translateY(0)';
  });
}
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.page').forEach(sec => {
    if (!sec.hidden) animateSection(sec);
  });
});

function show(page) {
  pages.forEach(p => {
    const isActive = (p.id === page);
    p.hidden = !isActive;
    if (isActive) animateSection(p);
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('data-page') === page));
  history.replaceState(null, '', '#' + page);
  if (page === 'galeria') initGallery();
}

