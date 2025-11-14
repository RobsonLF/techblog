# Artigos de sobre HTML E CSS para iniciantes em desenvolvimento

# *****************************************************************************************************************************************
# Artigo 1
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML e CSS: A Base da Web para Iniciantes</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
      color: #333;
    }
    h1, h2 {
      color: #222;
    }
    img {
      width: 100%;
      border-radius: 8px;
      margin: 20px 0;
    }
    code {
      background: #f3f3f3;
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 0.95rem;
    }
    pre {
      background: #f3f3f3;
      padding: 12px;
      border-radius: 6px;
      overflow-x: auto;
    }
  </style>
</head>
<body>

<h1>HTML e CSS: A Base da Web para Iniciantes</h1>
<img src="featured-img" alt="Imagem principal do artigo">

<h2>Introdução</h2>
<p>Se você está começando no desenvolvimento web, aprender <strong>HTML</strong> e <strong>CSS</strong> é o primeiro passo para criar qualquer site. Enquanto o HTML define a estrutura e o conteúdo da página, o CSS é responsável pela aparência: cores, espaçamentos, layouts e estilos visuais.</p>
<p>Neste artigo, você vai entender o que cada tecnologia faz, como funcionam juntas e por que são essenciais no aprendizado de quem está entrando no mundo front-end.</p>
<img src="image-1" alt="Exemplo visual de HTML e CSS">

<h2>O que é HTML?</h2>
<p>O <strong>HTML (HyperText Markup Language)</strong> é a linguagem usada para estruturar páginas na web. Com ele você cria:</p>
<ul>
  <li>Títulos</li>
  <li>Parágrafos</li>
  <li>Imagens</li>
  <li>Links</li>
  <li>Seções</li>
  <li>Formulários</li>
  <li>Estruturas completas do site</li>
</ul>

<pre><code>&lt;h1&gt;Bem-vindo ao meu site&lt;/h1&gt;
&lt;p&gt;Este é um parágrafo de apresentação.&lt;/p&gt;
&lt;img src="foto.jpg" alt="Foto de exemplo"&gt;
</code></pre>

<img src="image-2" alt="Representação gráfica de HTML">

<h2>O que é CSS?</h2>
<p>O <strong>CSS (Cascading Style Sheets)</strong> controla o visual das páginas feitas em HTML. É com ele que você estiliza:</p>
<ul>
  <li>cores</li>
  <li>fontes</li>
  <li>tamanhos</li>
  <li>espaçamentos</li>
  <li>layouts</li>
  <li>efeitos</li>
  <li>design responsivo</li>
</ul>

<pre><code>h1 {
  color: #4a4a4a;
  font-size: 2.5rem;
}

p {
  line-height: 1.6;
  color: #666;
}
</code></pre>

<img src="image-3" alt="Representação visual de CSS">

<h2>Como HTML e CSS funcionam juntos</h2>
<p>O HTML fornece a estrutura. O CSS fornece o estilo. Imagine o HTML como os tijolos de uma casa, e o CSS como a pintura, decoração e acabamento.</p>

<h3>Exemplo:</h3>
<pre><code>&lt;button class="btn"&gt;Clique aqui&lt;/button&gt;
</code></pre>

<pre><code>.btn {
  background: #0077ff;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
</code></pre>

<img src="image-4" alt="Exemplo de HTML + CSS">

<h2>Semântica: escrevendo HTML da forma correta</h2>
<p>A semântica no HTML melhora acessibilidade, organização, SEO e manutenção do código.</p>

<pre><code>&lt;header&gt;
&lt;nav&gt;
&lt;section&gt;
&lt;article&gt;
&lt;footer&gt;
</code></pre>

<img src="image-5" alt="Exemplo de semântica no HTML">

<h2>CSS moderno e responsivo</h2>
<p>Hoje, o CSS oferece ferramentas muito mais poderosas para layouts:</p>
<ul>
  <li>Flexbox</li>
  <li>Grid Layout</li>
  <li>Media Queries</li>
</ul>

<pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</code></pre>

<img src="image-6" alt="Exemplo de layout responsivo">

<h2>Por que aprender HTML e CSS primeiro</h2>
<ul>
  <li>Base do desenvolvimento front-end</li>
  <li>Permite criar projetos reais desde o início</li>
  <li>Prepara você para frameworks (React, Vue, Angular)</li>
  <li>Ajuda a entender como a web funciona</li>
</ul>

<img src="image-7" alt="Imagem ilustrando HTML e CSS juntos">

<h2>Conclusão</h2>
<p>HTML e CSS são as linguagens fundamentais para quem está começando no desenvolvimento web. HTML cria a estrutura. CSS dá o estilo. E juntos formam tudo o que você vê em qualquer site moderno.</p>
<p>Pratique criando páginas simples, brincando com diferentes layouts, cores e elementos — é o melhor caminho para evoluir rápido.</p>

</body>
</html>

# *****************************************************************************************************************************************