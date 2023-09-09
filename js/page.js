var items = $('.card-content .movie');
var numItems = items.length;
var perPage = 32;

items.slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "<",
    nextText: ">",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();

        // Obtener el índice de página actual
        var currentPageIndex = pageNumber - 1;

        // Actualizar automáticamente los IDs de los enlaces de página
        $('#pagination-container .page-link').each(function (index, element) {
            var newID = 'page-' + (currentPageIndex * perPage + index + 1);
            $(element).attr('id', newID);
        });
    }
});

$(document).ready(function () {
    // Verificar si hay una ancla en la URL y desplazar la página
    if (window.location.hash) {
        var target = window.location.hash.substring(1);
        if ($('#' + target).length) {
            $('html, body').animate({
                scrollTop: $('#' + target).offset().top
            }, 1000);
        } // 1000 milisegundos (1 segundo) para la animación de desplazamiento
    }

    // Almacenar la ubicación actual en el almacenamiento local del navegador
    $('a').click(function () {
        var target = $(this).attr('href');
        if (target.charAt(0) === '#') {
            localStorage.setItem('currentPage', target);
        }
    });

    // Recuperar y restaurar la ubicación actual al cargar la página
    var currentPage = localStorage.getItem('currentPage');
    if (currentPage) {
        window.location.hash = currentPage;
        localStorage.removeItem('currentPage'); // Limpiar después de restaurar
    }
});