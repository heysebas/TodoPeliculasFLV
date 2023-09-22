var buscador = $("#table").DataTable();

// Función para normalizar una cadena de texto eliminando acentos
function normalizeString(input) {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var searchTerm = normalizeString($("#input-search").val());

    // Normalizar y eliminar acentos de la cadena en la fila de datos
    var rowData = data.join(' ').toLowerCase();
    rowData = normalizeString(rowData);

    return rowData.includes(searchTerm);
});

$("#input-search").keyup(function () {
    buscador.draw();
    if ($(this).val() === "") {
        $(".content-search").fadeOut(300);
    } else {
        $(".content-search").fadeIn(300);
    }
});
