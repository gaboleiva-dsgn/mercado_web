$(document).ready(function() {
    //Funcion para agregar productos al carrito
    $(function () {
      let selecCarrito = []
      let seleccion = []
      $(".card").each(function () {
          // Función click
        $(this).click(function () {
          $(this).css("opacity", "0.5")
          //Función de agregar el producto al carrito
          seleccion = $(this).attr("id")
          if (!selecCarrito.includes(seleccion)) {
              selecCarrito.push(seleccion)
          }
          inyectar()
        });
        //Función dobleclick
        $(this).dblclick(function () {
          $(this).css("opacity", "1")
          //Función de quitar el producto del carrito
          seleccion = $(this).attr("id")
          if (selecCarrito.includes(seleccion)) {
              let index = selecCarrito.indexOf(seleccion)
              selecCarrito.splice(index, 1)
          }
          inyectar()
        });
        //Fin
        //Función para inyectar en el modal
        function inyectar() {
          $(".boxProductos").empty();
          selecCarrito.forEach(function (seleccion) {
              $(".boxProductos").append(`<div class="col-3">
             <img src="/img/${seleccion}.png" class="card-img-top" alt="${seleccion}"/>
            </div>`);
          })
        }
      });
     });
  });
  