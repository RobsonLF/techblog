const track = document.getElementById('track');
const carousel = document.getElementById('carousel');
const trackWrap = document.querySelector('.carousel-track-wrap');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');

let currentIndex = 0;
let autoplayId = null;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;

function getCardWidth(){
    const card = track.querySelector('.card');
    if(!card) return 0;
    const gap = parseInt(getComputedStyle(track).gap) || 20;
    return card.offsetWidth + gap;
}

function getVisibleCount(){
    const wrapWidth = trackWrap.clientWidth;
    const cw = getCardWidth();
    return Math.max(1, Math.floor(wrapWidth / cw));
}

function getMaxIndex(){
    return Math.max(0, track.children.length - getVisibleCount());
}

function moveToIndex(index, animate = true){
    const maxIndex = getMaxIndex();
    // wrap around
    if(index > maxIndex) index = 0;
    if(index < 0) index = maxIndex;
    currentIndex = index;
    if(animate) track.style.transition = 'transform .35s ease';
    else track.style.transition = 'none';
    const x = -index * getCardWidth();
    track.style.transform = `translateX(${x}px)`;
}

prevBtn.addEventListener('click', ()=> moveToIndex(currentIndex - 1));
nextBtn.addEventListener('click', ()=> moveToIndex(currentIndex + 1));

window.addEventListener('resize', ()=> moveToIndex(currentIndex, false));

/* Drag (pointer events) */
track.addEventListener('pointerdown', (e)=>{
    isDragging = true;
    startX = e.clientX;
    track.style.transition = 'none';
    track.setPointerCapture(e.pointerId);
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
track.addEventListener('pointercancel', ()=> {
    if(isDragging) { isDragging = false; moveToIndex(currentIndex); }
});

/* Keyboard */
window.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft') moveToIndex(currentIndex - 1);
    if(e.key === 'ArrowRight') moveToIndex(currentIndex + 1);
});

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