const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<a href="https://todopeliculasflv.tk/"><img class="log" src="/images/logo2.png" alt="logo"></a>
<nav>
    <ul class="nav_links">
        <li> <a href="/index.html">Inicio</a></li>
        <li> <a href="/menu/peliculas.html">Peliculas</a></li>
        <li> <a href="/menu/series.html">Series</a></li>
    </ul>
</nav>
<a class="cta" href="https://t.me/+-4vHUMv4sN44Yjdh" target="_blank"><button
        class="bonto-1">Contacto</button></a>
<form id="form">
    <input type="search" placeholder="Buscar" id="input-search" class="search">
</form>
`;

footer.innerHTML = `
<div class="grupo-1">
<div class="box">
    <figure>
    <a href="index.php"><img class="log" src="/images/logo2.png" alt="logo"></a>
    </figure>
</div>
<div class="box"><H2>SOBRE NOSOTROS</H2>
<P>TodoPeliculasFLV, tiene como objetivo brindarte un amplio catálogo de peliculas que no son transmitidos en los canales de TV en señal abierta, teniendo como fin el compartir con todos nuestros seguidores la mayor cantidad de peliculas, episodios y series  que salen cada año.</P></div>
<div class="box"><h2>SIGUENOS</h2>
<div class="red-social">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
</div></div>



</div>
<div class="grupo-2">
    <small>&copy; 2022 <b>PeliculasFLV</b> - Ningún vídeo se encuentra alojado en nuestros servidores.</small>

</div>
`;