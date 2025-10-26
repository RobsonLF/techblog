const main = (function(){

    const $ = sel => document.querySelector(sel);
    const $$ = sel => Array.from(document.querySelectorAll(sel));

    function renderHome(){
        if(!window.postsData) return;
        const featuredGrid = $('#featuredGrid');
        const postsList = $('#postsList');
        const categoryList = $('#categoryList');

        featuredGrid.innerHTML = postsData.slice(0,3).map(p => `
            <article class="hero-card">
                <div class="hero-thumb" style="background-image:url('${p.thumb}')"></div>
                <h4>${p.title}</h4>
                <p>${p.excerpt}</p>
                <a class="read-btn" href="post.html?id=${p.id}">Leia Mais</a>
            </article>
        `).join('');
    }

}
)
