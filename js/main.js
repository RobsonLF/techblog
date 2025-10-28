const track = document.getElementById('track');
const carousel = document.getElementById('carousel');
const trackWrap = document.querySelector('.carousel-track-wrap');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');

let currentIndex = 0;
let isDragging = false;
let startX = 0;

function getCardWidth(){
    const card = track.querySelector('.card');
    if(!card) return 0;
    // gap pode vir de CSS custom property ou computed style
    const gap = parseInt(getComputedStyle(track).gap) || parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap')) || 20;
    return card.offsetWidth + gap;
}

function getVisibleCount(){
    const wrapWidth = trackWrap.clientWidth;
    const cw = getCardWidth();
    if(!cw) return 1;
    return Math.max(1, Math.floor(wrapWidth / cw));
}

function getMaxIndex(){
    return Math.max(0, track.children.length - getVisibleCount());
}

function moveToIndex(index, animate = true){
    const maxIndex = getMaxIndex();
    // wrap-around behavior
    if(index > maxIndex) index = 0;
    if(index < 0) index = maxIndex;
    currentIndex = index;
    track.style.transition = animate ? 'transform .35s ease' : 'none';
    const x = -index * getCardWidth();
    track.style.transform = `translateX(${x}px)`;
}

/* Buttons */
prevBtn.addEventListener('click', ()=> moveToIndex(currentIndex - 1));
nextBtn.addEventListener('click', ()=> moveToIndex(currentIndex + 1));

/* resize -> recalc position sem animação */
window.addEventListener('resize', ()=> moveToIndex(currentIndex, false));

/* Drag (pointer events) */
track.addEventListener('pointerdown', (e)=>{
    isDragging = true;
    startX = e.clientX;
    track.style.transition = 'none';
    try{ track.setPointerCapture(e.pointerId); }catch{}
});
track.addEventListener('pointermove', (e)=>{
    if(!isDragging) return;
    const dx = e.clientX - startX;
    const base = -currentIndex * getCardWidth();
    track.style.transform = `translateX(${base + dx}px)`;
});
track.addEventListener('pointerup', (e)=>{
    if(!isDragging) return;
    isDragging = false;
    const dx = e.clientX - startX;
    const threshold = getCardWidth() / 4;
    if(dx < -threshold) moveToIndex(currentIndex + 1);
    else if(dx > threshold) moveToIndex(currentIndex - 1);
    else moveToIndex(currentIndex);
});
track.addEventListener('pointercancel', ()=>{
    if(isDragging){ isDragging = false; moveToIndex(currentIndex); }
});

/* Keyboard */
window.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft') moveToIndex(currentIndex - 1);
    if(e.key === 'ArrowRight') moveToIndex(currentIndex + 1);
});

/* Inicializa posição */
moveToIndex(0, false);

/* Autoplay with pause on hover/focus 
function startAutoplay(){
    stopAutoplay();
    autoplayId = setInterval(()=> moveToIndex(currentIndex + 1), 4500);
}
function stopAutoplay(){
    if(autoplayId) { clearInterval(autoplayId); autoplayId = null; }
}
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);
carousel.addEventListener('focusin', stopAutoplay);
carousel.addEventListener('focusout', startAutoplay);

startAutoplay();*/