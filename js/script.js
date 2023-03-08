// const header = document.querySelector("header");
const footer = document.querySelector("footer");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");
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



$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});






const ul = document.querySelector('ul');
let allPages = 15;

function elem(allPages, page){
    let li = '';

    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;

    if(page > 1){
        li += `<li class="btn" onclick="elem(allPages, ${page-1})" ><i class="fas fa-angle-left"></i></li>`;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){

        if(pageLength > allPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            liActive = 'active';
        }else{
            liActive = '';
        }

        li += `<li class="numb ${liActive}" onclick="elem(allPages, ${pageLength})" ><span>${pageLength}</span></li>`
    }

    if(page < allPages){
        li += `<li class="btn" onclick="elem(allPages, ${page+1})" ><i class="fas fa-angle-right"></i></li>`;
    }

    ul.innerHTML = li;
}
elem(allPages, 2);





