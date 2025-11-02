// ...existing code...

const grid = document.getElementById('tools-grid');
const cards = Array.from(grid.querySelectorAll('.tool-card'));
const paginationEl = document.getElementById('tools-pagination');
const prevBtn = document.getElementById('prevPage');
const nextBtn = document.getElementById('nextPage');
const searchInput = document.getElementById('searchInput');

let currentPage = 1;
const itemsPerPage = 6; // fixo em 6 por página
let filtered = cards.slice();

function renderPage(page = 1){
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / itemsPerPage));
    currentPage = Math.min(Math.max(1, page), pages);

    // hide all
    cards.forEach(c => c.style.display = 'none');

    // show current page slice
    const start = (currentPage - 1) * itemsPerPage;
    const pageItems = filtered.slice(start, start + itemsPerPage);
    pageItems.forEach(c => c.style.display = '');

    renderPagination(pages);
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === pages;
}

function renderPagination(totalPages){
    paginationEl.innerHTML = '';
    for(let i=1;i<=totalPages;i++){
        const btn = document.createElement('button');
        btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
        btn.textContent = i;
        btn.dataset.page = i;
        paginationEl.appendChild(btn);
    }
}

/* events (mantém o comportamento anterior) */
paginationEl.addEventListener('click', (e)=>{
    const btn = e.target.closest('.page-btn');
    if(!btn) return;
    const p = Number(btn.dataset.page);
    renderPage(p);
});
prevBtn.addEventListener('click', ()=> renderPage(currentPage - 1));
nextBtn.addEventListener('click', ()=> renderPage(currentPage + 1));

if(searchInput){
    searchInput.addEventListener('input', (e)=>{
        const q = e.target.value.trim().toLowerCase();
        if(!q) filtered = cards.slice();
        else filtered = cards.filter(c=>{
            const title = c.querySelector('.tool-title')?.textContent?.toLowerCase() || '';
            const excerpt = c.querySelector('.tool-excerpt')?.textContent?.toLowerCase() || '';
            return title.includes(q) || excerpt.includes(q);
        });
        renderPage(1);
    });
}

/* inicializa a primeira página */
renderPage(1);

// ...existing code...