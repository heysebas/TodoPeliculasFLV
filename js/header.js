const header = document.querySelector("header");
header.innerHTML = `

<a href="/index.html"><img class="log" src="/images/logo2.png" alt="logo"></a>
<nav>
    <ul class="nav_links">
        <li> <a href="/index.html">Inicio</a></li>
        <li> <a href="/menu/peliculas.html">Peliculas</a></li>
        <li> <a href="/menu/series.html">Series</a></li>
    </ul>

</nav>
<a class="cta" href="https://t.me/+-4vHUMv4sN44Yjdh" target="_blank"><button class="bonto-1">Contacto</button></a>
<form id="form">
    <input type="search" placeholder="Buscar" id="input-search" class="search">
</form>
<div class="bx bx-menu" id="menu-icon"> <img src="/images/menu-line.png" alt=""></div>
<div id="content-footer">
    <div id="lbl-footer" class="content-search">
        <div class="content-table">
            <table id="table">
                <thead>
                    <tr>
                        <td></td>
                    </tr>
                </thead>
                <tbody>


                    <tr>
                        <td>
                            <a href="/peliculas/Arde-Notre-Dame.html">
                                <div>Arde Notre Dame</div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/Arde-Notre-Dame.html">
                                <div>Notre-Dame On Fire</div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/Huesera.html">
                                <div>Huesera</div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/Identidad-desbloqueda.html">
                                <div>Identidad desbloqueada</div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/El-ultimo-baile-de-Magic-Mike.html">
                                <div>El último baile de Magic Mike</div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/El-ultimo-baile-de-Magic-Mike.html">
                                <div>Magic Mike's Last Dance</div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/Sharper-Un-plan-perfecto.html">
                                <div>Sharper: Un plan perfecto</div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/Un-vecino-grunon.html">
                                <div>Un vecino gruñón</div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/Un-vecino-grunon.html">
                                <div> A Man Called Otto</div>
                            </a>
                        </td>
                    </tr>

                    <tr>

                        <td>
                            <a href="/peliculas/Pantera-Negra-Wakanda-por-siempre.html">
                                <div>Pantera Negra: Wakanda por siempre</div>
                            </a>
                        </td>

                    </tr>
                    <tr>

                        <td>
                            <a href="/peliculas/Pantera-Negra-Wakanda-por-siempre.html">
                                <div>Black Panther: Wakanda Forever</div>
                            </a>
                        </td>

                    </tr>

                    <tr>

                        <td>
                            <a href="/Series/Peacemaker/Peacemaker.html">
                                <div>Peacemaker</div>
                            </a>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <a href="/peliculas/Encanto.html">
                                <div>Encanto</div>
                            </a>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <a href="/Series/Hawkeye/Hawkeye.html">
                                <div>Hawkeye</div>
                            </a>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <a href="/Series/Falcon-Y-El-Soldado-Del-Invierno/Falcon-Y-El-Soldado-Del-Invierno.html">
                                <div>Falcon Y El Soldado Del Invierno</div>
                            </a>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <a href="/Series/Falcon-Y-El-Soldado-Del-Invierno/Falcon-Y-El-Soldado-Del-Invierno.html">
                                <div>The Falcon and the Winter Soldier</div>
                            </a>
                        </td>

                    </tr>



                </tbody>
            </table>
        </div>


    </div>

</div>





`;


let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.nav_links');

menu.onclick = () => {
menu.classList.toggle('.bx-menu');
navbar.classList.toggle('open');
}
