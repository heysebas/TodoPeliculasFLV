

// const header = document.querySelector("header");



const footer = document.querySelector("footer");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");
footer.innerHTML = `
<div class="grupo-1">
<div class="box">
    <figure>
    <a href="/index.html"><img class="log" src="/images/logo2.png" alt="logo"></a>
    </figure>
</div>
<div class="box"><H2>SOBRE NOSOTROS</H2>
<P>TodoPeliculasFLV, tiene como objetivo brindarte un amplio catálogo de peliculas que no son transmitidos en los canales de TV en señal abierta, teniendo como fin el compartir con todos nuestros seguidores la mayor cantidad de peliculas, episodios y series  que salen cada año.</P></div>
<div class="box"><h2>SIGUENOS</h2>
<div class="red-social">
    <a href="https://www.tiktok.com/@todopeliculasflv"><img class="red-social-img" src="/images/tik-tok.png" alt=""></a>
    <a href="https://www.facebook.com/todopeliculasflv"><img class="red-social-img" src="/images/facebook.png" alt=""></a>
    <a href="#"></a>
    <a href="#"></a>
</div></div>



</div>
<div class="grupo-2">
    <small>&copy; 2022 <b>PeliculasFLV</b> - Ningún vídeo se encuentra alojado en nuestros servidores.</small>

</div>
`;

$(document).ready(function () {

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    // FILTRANDO PRODUCTOS  ============================================

    $('.category_item').click(function () {
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        // OCULTANDO PRODUCTOS =========================
        $('.product-item').css('transform', 'scale(0)');
        function hideProduct() {
            $('.product-item').hide();
        } setTimeout(hideProduct, 400);

        // MOSTRANDO PRODUCTOS =========================
        function showProduct() {
            $('.product-item[category="' + catProduct + '"]').show();
            $('.product-item[category="' + catProduct + '"]').css('transform', 'scale(1)');
        } setTimeout(showProduct, 400);
    });

    // MOSTRANDO TODOS LOS PRODUCTOS =======================

    $('.category_item[category="all"]').click(function () {
        function showAll() {
            $('.product-item').show();
            $('.product-item').css('transform', 'scale(1)');
        } setTimeout(showAll, 400);
    });
});



//--------------------------------------------------------------------//


function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
    var sideWidth = maxLength < 9 ? 1 : 2;
    var lefWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rigtWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rigtWidth) {
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth - 1 - rigtWidth) {
        return renge(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rigtWidth - lefWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - lefWidth, page + rigtWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

// $(function () {
//     var numberOfItems = $(".card-content .movie").length;
//     var limitPerPage = 32;
//     var totalPages = Math.ceil(numberOfItems / limitPerPage);
//     var paginationSize = 2
//     var currentPage;

//     function showPage(whichPage) {
//         if (whichPage < 1 || whichPage > totalPages) return false;

//         currentPage = whichPage;

//         $(".card-content .movie").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

//         // $(".pagination li").slice(1, -1).remove();

//         getPageList(totalPages, currentPage, paginationSize).forEach(item => {
//             $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
//                 .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
//                     .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
//         });

//         $(".previous-page").toggleClass("disable", currentPage === 1);
//         $(".next-page").toggleClass("disable", currentPage === totalPages);
//         return true;
//     }

//     $(".pagination").append(
//         // $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
//         // $("<li>").addClass("page-item").addClass("netx-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
//     );

//     $(".card-content").show();
//     showPage(1);

//     $(document).on("click", ".pagination li.current-page:not(.active)", function () {
//         return showPage(+$(this).text());
//     });

//     $(".next-page").on("click", function () {
//         return showPage(currentPage + 1);
//     });

//     $(".previous-page").on("click", function () {
//         return showPage(currentPage - 1);
//     });
// });


// var items = $('.card-content .movie');
// var  numItems = items.length;
// var perPage = 30; //cantida de cards mostrados

// items.slice(perPage).hide();

// $('#pagination-container').pagination({
//     items: numItems,
//     itemsOnPage : perPage,
//     prevText: "Prev",
//     netxText: "Next",
//     onPageClick: function (pageNumber) {
//         var showFrom = perPage * (pageNumber - 1);
//         var showTo = showFrom + perPage;
//         items.hide(),slice(showFrom, showTo).show();

//     }
// });




const temporadas = document.querySelectorAll('.temporada');
temporadas.forEach(temporada => {
    temporada.addEventListener('click', () => {
        const capitulos = temporada.nextElementSibling;
        if (capitulos.style.display === 'none' || capitulos.style.display === '') {
            capitulos.style.display = 'block';
        } else {
            capitulos.style.display = 'none';
        }
    });
});






let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    currentSlide = index;
}

function changeSlide(index) {
    showSlide(index);
}

function autoChangeSlide() {
    if (currentSlide === slides.length - 1) {
        showSlide(0);
    } else {
        showSlide(currentSlide + 1);
    }
}

// Asigna un evento clic a cada punto para cambiar la diapositiva
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index);
    });
});

// Cambiar automáticamente las diapositivas cada 5 segundos (5000 ms)
setInterval(autoChangeSlide, 5000);

// Mostrar la primera diapositiva al cargar la página
showSlide(0);

