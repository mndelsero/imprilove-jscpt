



function scrollToTop() {
  window.scrollTo(0, 0);
}

function extraerNumeroDeVariable(variable) {
  const numeroExtraido = parseInt(variable.slice(8));
  return isNaN(numeroExtraido) ? null : numeroExtraido;
}
 function crearPagina(e) {
  const mainSection= document.querySelector(".main-section")
  const esteId = e.target.id
  const nuevoId = extraerNumeroDeVariable(esteId);

  fetch('../proddata.json')
    .then((res) => res.json())
    .then((datos) => {
      mainSection.innerHTML = ``
      const traerProducto = datos.filter(producto => producto.productId === nuevoId)
      traerProducto.forEach((producto) => {
        mainSection.innerHTML = `<button class="btn-volver">Volver</button>
    <section class="producto-section">
    <div class="mostrador-producto">
    <img class="img-producto" src=".${producto.image}" alt="${producto.name}">
      <div class="prod-detail">
        <div class="producto-intro">
        <h5 class="intro-nombre">Categoria : ${producto.category}</h5>
          <h5 class="intro-nombre">${producto.name}</h5>
          <h5 >${producto.price}</h5>
          <h5 >Stock :${producto.stock}</h5>
        </div>
        <div class="contacto-producto">
          <h4>Contactanos</h4>
          <button>Haz tu pedido</button>
          <button>Continuar Comprando</button>
            </div>
            <div class="cant-producto-sctn">
          <p>Cantidad: <span>${1}</span></p>
              <div class="contador">
                <button>+</button>
              <button>-</button>
              </div>
          </div>
            <div class="info-producto">
              <h5>Descripcion</h5>
              <p>Descripcion producto</p>
              <h4>Incluye:</h4>
              <li>tal</li>
              <li>tal</li>
              <li>tal</li>
              <li>tal</li>
            </div>
      </div>
    </div>
    
        </section>
    `
      }

      )


      const btnVolver = document.querySelector(".btn-volver")
      btnVolver.addEventListener("click", volver)
      function volver() {
        location.reload()
      }
      scrollToTop()

    })
}



// ADESIVOS SECTION
const productosSeccionCantidad=document.querySelector(".seccion-productos-cantidad")
const footer=document.querySelector(".pie-de-pagina")

const productosCumpleanios=document.querySelector(".productos-cumple")
const productosSection=(categoria, section) =>{
    section.innerHTML = ``;
    categoria.forEach(producto => {
      const cardSeccion = document.createElement(`div`);
      cardSeccion.setAttribute(`class`, `card`);
      cardSeccion.innerHTML = `
      <img src=".${producto.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <p class="card-name">${producto.name}</p>
        <p class="card-text"> ${producto.price}$ pesos</p>
        <p>Stock disponible:${producto.stock}</p>
        <a href="">
          <h5 class="card-title">${producto.category}</h5>
        </a>
        <button href="" class="btn-comprar" id="producto${producto.productId}">Comprar</button>
      </div>`;
      section.appendChild(cardSeccion);
    });
  }


fetch('../proddata.json')
.then((res) => res.json())
.then((datos) => {
    const cumpleFilter = datos.filter(producto => producto.category === "Para Cumpleaños")
    
 productosSection(cumpleFilter, productosCumpleanios);
 productosSeccionCantidad.innerHTML=`${cumpleFilter.length} Productos`

 const btnComprar = document.querySelectorAll(".btn-comprar");
 btnComprar.forEach(boton => boton.addEventListener("click", crearPagina))

})

const header=document.querySelector(".header")

function crearHeader(){
  let headerContent=document.createElement('div')
  headerContent.setAttribute(`class`, `header-content`);
  headerContent.innerHTML=
  `<div class="compras-contacto">
  <h5>Compras al Whatsapp +569 2204 3628. Envíos a todo Chile - Retiros en taller previa coordinación.</h5>
</div>
<div class="center-menu-section row">
  <div class="redes col-4 text-center">
      <a href="https://www.facebook.com/imprilove.cl/" target="_blank" class="face-link">
          <img src="../imgs/facebook-app-symbol.png" alt="">
      </a>
      <a href="https://wa.me/56922043628" target="_blank" class="wsp-link">
          <img src="../imgs/whatsapp (1).png" alt="">
      </a>
      <a href="https://www.instagram.com/imprilove.cl/" target="_blank"><img src="../imgs/instagram (1).png" alt=""></a>
  </div>
  <section class="logo col-4 text-center">
      <a href="../index.html" class="logo-link">
          <img src="../imgs/logo.jpg" alt="">
      </a>
  </section>
  <section class="buscador col-4 text-center">
      <a href="" class="buscar"><img src="../imgs/magnifying-glass.png" alt=""></a>
  </section>
</div>
  `


  header.appendChild(headerContent)
}
crearHeader()



function crearFooter(){
  let footerContent=document.createElement('div')
  footerContent.setAttribute(`class`, `footer-content`);
  footerContent.innerHTML=
  `<div class="datos">
  <section class="sobre-nosotros">
      <h5>SOBRE NOSOTROS</h5>
      <p>
          Tienda de productos exclusivos <br> diseñados y elaborados con mucho <br> amor y dedicación. <br>
          Contamos con
          una linea de
          productos <br> personalizados, para regalar y otros <br> especiales para emprendedores.</p>
  </section>
  <section class="contacto">
      <h5>CONTACTO</h5>
      <a href="mailto:mndelsero@gmail.com">.laddetallitosamadosyloy@gmail.com</a>
      <a href="https://wa.me/56922043628" target="_blank">+56922043628</a>
  </section>
  <section class="menu-pie">
      <h5>MENU</h5>
      <a href="./contacto.html">CONTACTO</a>
      <a href="./adhesivos.html">ADHESIVOS</a>
      <a href="./agendas-papeleria.html">AGENDAS Y PAPELERIA</a>
      <a href="./como-comprar.html">COMO COMPRAR</a>
      <a href="./fotografias-cuadros.html">FOTOGRAFÍAS Y CUADROS</a>
      <a href="./kit-cumpleanios.html">KIT PARA CUMPLEAÑOS</a>
      <a href="./marketing.html"> MARKETING</a>
      <a href="./regalos.html">REGALOS</a>
      <a href="./tarjeteria.html">TARJETERÍA</a>
      <a href="../index.html">INICIO</a>
  </section>
  <section class="siguenos">
      <h5>SIGUENOS</h5>
      <div class="siguenos-redes"><a href="https://www.facebook.com/imprilove.cl/" target="_blank" class="face-link">
              <img src="../imgs/facebook-app-symbol.png" alt="">
          </a>
          <a href="https://wa.me/56922043628" target="_blank" class="wsp-link">
              <img src="../imgs/whatsapp (1).png" alt="">
          </a>
          <a href="https://www.instagram.com/imprilove.cl/" target="_blank"><img src="../imgs/instagram (1).png" alt=""></a>
      </div>
</div>
<section class="pie-final">
  <p> © 2023 Tienda LadyLoy . <br>
      Todos los derechos reservados. Powered by Jumpseller.</p>
  <a href="../index.html" class="logo-link">
      <img src="../imgs/logo.jpg" alt="">
  </a>
</section>`
footer.appendChild(footerContent)

}
crearFooter()