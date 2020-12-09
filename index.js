//var j = JSON.parse(s);


//var contenid

// Hover Dropown effect:
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

// Parse JSON
var data = '{"titulo": "Bienvenido", "content": "hola Bienvenido a mi pagina", "tituloNovedades": "Ultimas noticias", "contentNovedades": "novedades novedades novedades novedades"}';

var json = JSON.parse(data);

var hTitulo, pContent, hTituloNovedades, pContentNovedades;

hTitulo = document.getElementById("titulo_contenido").innerHTML = json.titulo;
pContent = document.getElementById("content").innerHTML = json.content;
hTituloNovedades = document.getElementById("tituloNovedades").innerHTML = json.tituloNovedades;
pContentNovedades = document.getElementById("contentNovedades").innerHTML = json.contentNovedades;




// On hover funtions
function mouseOver(position) {
    var x = document.getElementsByClassName("novedad");
    x[position].style.background = "#bdbfbd";
}

function mouseOut(position) {
  var x = document.getElementsByClassName("novedad");
  x[position].style.background = "white";
}


// On click para mostras el contenido en el menu principal
function showNovedad(tituloAnyadir,contenidoAnyadir){
  var tituloContent = document.getElementById("titulo_contenido");
  var contenidoPrincipal = document.getElementById("content");
  
  tituloContent.innerHTML = tituloAnyadir;
  contenidoPrincipal.innerHTML = contenidoAnyadir;


}
