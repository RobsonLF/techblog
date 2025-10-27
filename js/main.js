const track = document.getElementById('track');
const carousel = document.getElementById('carousel');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');
let isDragging = false, startX = 0, currentTranslate = 0, prevTranslate = 0, animationID=0;

function getCardWidth(){
    const card = track.querySelector('.card');
    const style = getComputedStyle(track);
    const gap = parseInt(getComputedStyle(track).gap || 20);
    return card.offsetWidth + gap;
}

function moveToIndex(index){
    const cardWidth = getCardWidth();
    const maxIndex = track.children.length - 1;
    index = Math.max(0, Math.min(index, maxIndex));
    const x = -index * cardWidth;
    track.style.transform = `translateX(${x}px)`;
    currentIndex = index;
}

let currentIndex = 0;
prevBtn.addEventListener('click', ()=> moveToIndex(currentIndex - 1));
nextBtn.addEventListener('click', ()=> moveToIndex(currentIndex + 1));

window.addEventListener('resize', ()=> moveToIndex(currentIndex));

/* Dragging for desktop/touch */
track.addEventListener('pointerdown', startDrag);
track.addEventListener('pointermove', onDrag);
track.addEventListener('pointerup', endDrag);
track.addEventListener('pointerleave', endDrag);
track.addEventListener('pointercancel', endDrag);

function startDrag(e){
    isDragging = true;
    startX = e.clientX;
    track.style.transition = 'none';
}
function onDrag(e){
    if(!isDragging) return;
    const dx = e.clientX - startX;
    track.style.transform = `translateX(${ -currentIndex * getCardWidth() + dx }px)`;
}
function endDrag(e){
    if(!isDragging) return;
    isDragging = false;
    const dx = (e.clientX || 0) - startX;
    const threshold = getCardWidth() / 4;
    if (dx < -threshold) moveToIndex(currentIndex + 1);
    else if (dx > threshold) moveToIndex(currentIndex - 1);
    else moveToIndex(currentIndex);
    track.style.transition = '';
}

/* Keyboard */
window.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft') moveToIndex(currentIndex - 1);
    if(e.key === 'ArrowRight') moveToIndex(currentIndex + 1);
});

/* Autoplay (pauses on hover) */
let autoplay = setInterval(()=> moveToIndex(currentIndex + 1), 5000);
carousel.addEventListener('mouseenter', ()=> clearInterval(autoplay));
carousel.addEventListener('mouseleave', ()=> autoplay = setInterval(()=> moveToIndex(currentIndex + 1), 5000));