// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const thumbs = Array.from(document.querySelectorAll('.carousel-thumbs .thumb'));
  let current = 0;
  let autoplayTimer = null;
  const AUTOPLAY_MS = 5000;

  if(!track) return;

  function updateThumbs(idx){
    thumbs.forEach(t => t.classList.toggle('active', Number(t.dataset.index) === idx));
  }

  function showIndex(idx){
    const slides = track.querySelectorAll('.card');
    if(!slides.length) return;
    if(idx < 0) idx = slides.length - 1;
    if(idx >= slides.length) idx = 0;
    current = idx;
    // calcula deslocamento com a largura do primeiro slide
    const slideWidth = slides[0].clientWidth + parseInt(getComputedStyle(track).gap || 0);
    const scrollLeft = slideWidth * idx;
    track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    updateThumbs(idx);
  }

  function next(){ showIndex(current + 1); }
  function prev(){ showIndex(current - 1); }

  if(nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });
  if(prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });

  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      const idx = Number(t.dataset.index || 0);
      showIndex(idx);
      resetAutoplay();
    });
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft'){ prev(); resetAutoplay(); }
    if(e.key === 'ArrowRight'){ next(); resetAutoplay(); }
  });

  function startAutoplay(){
    stopAutoplay();
    autoplayTimer = setInterval(() => next(), AUTOPLAY_MS);
  }
  function stopAutoplay(){ if(autoplayTimer){ clearInterval(autoplayTimer); autoplayTimer = null; } }
  function resetAutoplay(){ stopAutoplay(); startAutoplay(); }

  const carousel = document.getElementById('mainCarousel');
  if(carousel){
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
  }

  // atualiza posição se redimensionar
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => showIndex(current), 150);
  });

  // iniciar
  showIndex(0);
  startAutoplay();
});