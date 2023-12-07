// ADESIVOS SECTION
const footer=document.querySelector(".pie-de-pagina")


const productosSeccionCantidad=document.querySelector(".seccion-productos-cantidad")


const productosFotografias=document.querySelector(".productos-fotografias")
const productosSection=(categoria, section) =>{
    section.innerHTML = ``;
    categoria.forEach(producto => {
      const cardSeccion = document.createElement(`div`);
      cardSeccion.setAttribute(`class`, `card`);
      cardSeccion.id = `producto${producto.productId}`
      cardSeccion.innerHTML = `
      <img src=".${producto.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <p class="card-name">${producto.name}</p>
        <p class="card-text"> ${producto.price}$ pesos</p>
        <p>Stock disponible:${producto.stock}</p>
        <a href="">
          <h5 class="card-title">${producto.category}</h5>
        </a>
      </div>`;
      section.appendChild(cardSeccion);
    });
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  function extraerNumeroDeVariable(variable) {
    const numeroExtraido = parseInt(variable.slice(8));
    return isNaN(numeroExtraido) ? null : numeroExtraido;
  }
   function crearPagina(e) {
    const mainSection= document.querySelector(".main-section")
    const esteId = e.currentTarget.id
    const nuevoId = extraerNumeroDeVariable(esteId);
  
    fetch('../proddata.json')
      .then((res) => res.json())
      .then((datos) => {
        mainSection.innerHTML = ``
        const traerProducto = datos.filter(producto => producto.productId === nuevoId)
        traerProducto.forEach((producto) => {
          mainSection.innerHTML = `<button class="btn-volver">Volver</button>
          <section class="producto-section">
          <h3 class="producto-tit">${producto.name}</h3>
          <div class="dir-producto">
      
            <a href="/index.html">INICIO</a> >
            <a href="/pages/adhesivos.html">${producto.category}</a> >
            
            
            <a href="">${producto.name}!!</a> 
          </div>
      
          <div class="mostrador-producto">
      
          <img class="img-producto" src=".${producto.image}" alt="${producto.name}">
            <div class="prod-detail">
              <div class="producto-intro">
              <h5 class="intro-nombre">Arma tu Producto</h5>
              <form action="" class="prod-form">
               <div class="prod-tamanio prod-form-in">
                <label for="">Tamaño</label>
                <select name="" id="" aria-placeholder="posicion">
                    <option value="" class="">Normal</option>
                    <option value="">pequeño</option>
                    <option value="">grande</option>
                    <option value="">especifico</option>
                </select>
               </div>
               <div class="prod-tamanio prod-form-in">
                <label for="">Cantidad </label>
               <input type="number" name="" id="" placeholder="1">
               </div>
               
            </form>
              </div>
              <div class="prod-total-price">
                <h4>TU TOTAL: <span>IVA inc</span> : $ ${producto.price}</h4>
                
                <p>precio unitario: $ ${producto.price} </p>
              </div>
              <div class="contacto-producto">
                <h4>Contactanos</h4>
                <button>Haz tu pedido</button>
               
                  </div>
                 
                  <div class="info-producto">
                    <h5>Descripcion ${producto.name}</h5>
                    <p>${producto.name}</p>
                    <h4>Incluye:</h4>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptatum similique repreheveniam
                    </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptatum similique repreheveniam
                    </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptatum similique repreheveniam
                    </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptatum similique repreheveniam
                    </li>
                  </div>
            </div>
          </div>
          
              </section>
              <div class="related-prods">
              <h2>Productos Relacionados</h2>
              <div class="related-prod-sctn"></div>
                </div>
      `
        }
  
        )

        
        function productosRelacionados(nuevoId) {
          const relatedCardContainer = document.querySelector(".related-prod-sctn")
          const encontrarProducto = datos.find(producto => producto.productId === nuevoId)
          const relatedProducts = datos.filter(producto => producto.related === encontrarProducto.related)
          relatedProducts.forEach((producto) => {
            const cardRelated = document.createElement(`div`)
            cardRelated.setAttribute(`class`, `card-related`);
            cardRelated.id = `producto${producto.productId}`
            cardRelated.innerHTML = `
  <img src=".${producto.image}" alt="${producto.name}">
  <div class="related-info">
    <h3>${producto.name}</h3>
    <h5>${producto.category}</h5>
  <p>descripcion breve</p>`
  
            relatedCardContainer.appendChild(cardRelated)
  
          })
        }
        productosRelacionados(nuevoId)
  
        const relatedCards = document.querySelectorAll(".card-related");
        relatedCards.forEach(card => card.addEventListener("click", crearPagina))
  
  
  
       const btnVolver = document.querySelectorAll(".btn-volver")
btnVolver.forEach(boton => boton.addEventListener("click", volver))
        function volver() {
          location.reload()
        }
        scrollToTop()
  
      })
  }
  
  

fetch('../proddata.json')
.then((res) => res.json())
.then((datos) => {
    const cuadrosFilter = datos.filter(producto => producto.category === "Cuadros-Fotografias")
   
 productosSection(cuadrosFilter, productosFotografias);
 productosSeccionCantidad.innerHTML=`${cuadrosFilter.length} Productos`

const cardProducto = document.querySelectorAll(".card");
cardProducto.forEach(boton => boton.addEventListener("click", crearPagina))


function buscarProductos() {
  document.removeEventListener("mousedown", clickAfuera);
  const buscador = document.getElementById("buscador");
  const buscadorOpciones = document.querySelector(".buscador-opciones");

  function verificarClick(e) {
    const buscadorOpciones = document.querySelector(".buscador-opciones");
    const search = document.getElementById("search")
    if (search) {
      if (!buscadorOpciones.contains(e.target) && e.target !== search) {
        return true; // Se hizo clic fuera del buscador
      }
      return false; // El clic fue dentro del buscador
    }

  }

  function clickAfuera(e) {
    if (verificarClick(e)) {
      // Código que se ejecutará si se hace clic fuera del buscador
      limpiarBuscador()
      buscarProductos()
    }
  }

  buscador.addEventListener("click", desplegarBuscador)

  function limpiarBuscador() {
    const buscadorSctn = document.querySelector(".buscador")
    buscadorSctn.innerHTML =
      ` <div class="barra-buscar">
    <button  class="buscar" id="buscador">
      <img src="../imgs/magnifying-glass.png" alt="">
    </button>
  </div>
 
  <div class="buscador-opciones">
</div>`
    buscarProductos()
  }

  function desplegarBuscador() {
    const buscadorBarra = document.querySelector(".barra-buscar");
    buscadorBarra.innerHTML = `
    <button  class="buscar" id="buscador">
    <img src="../imgs/magnifying-glass.png" alt="">
  </button>`
    const buscadorInput = document.createElement("input")
    buscadorInput.type = "search"
    buscadorInput.id = "search"
    buscadorBarra.append(buscadorInput)
    const search = document.getElementById("search")
    search.addEventListener("input", filtrarProductos)
    search.focus();
    salir()

    function salir() {
      search.addEventListener("keydown", function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
          limpiarBuscador();
        }
      });
    }
    document.addEventListener("mousedown", clickAfuera);

    function filtrarProductos(e) {

      buscadorOpciones.innerHTML = ` <h5>TU RESULTADO :</h5>`
      const inputText = e.target.value.toUpperCase().trim()
      const productosFiltrados = datos.filter(producto =>
        producto.name.toUpperCase().startsWith(inputText) ||
        producto.category.toUpperCase().startsWith(inputText) ||
        producto.price.toString().startsWith(inputText)
      );

      if (productosFiltrados.length && search.value != "") {
        productosFiltrados.forEach(producto => {
          const opcionBusqueda = document.createElement("option")
          opcionBusqueda.setAttribute(`class`, `opcion-de-busqueda`)
          opcionBusqueda.id = `producto${producto.productId}`
          opcionBusqueda.innerText = `${producto.name} -Categoria: ${producto.category} - Precio: ${producto.price} `
          buscadorOpciones.appendChild(opcionBusqueda)
        })

        const opcionesBusqueda = document.querySelectorAll(".opcion-de-busqueda");
        opcionesBusqueda.forEach(opcion => opcion.addEventListener("click", crearPagina))
        opcionesBusqueda.forEach(opcion => opcion.addEventListener("click", limpiarBuscador))

      } else {
        const opcionBusqueda = document.createElement("option")
        opcionBusqueda.innerText = `Ningun elemento del catalogo coincide con tu busqueda, intenta de nuevo!`
        buscadorOpciones.appendChild(opcionBusqueda)
      }
    }
  }
}
buscarProductos()

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
  <div class="barra-buscar">
    <button  class="buscar" id="buscador">
      <img src="../imgs/magnifying-glass.png" alt="">
    </button>
  </div>
 
  <div class="buscador-opciones">
</div>
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
      <a href="mailto:imprilove@gmail.com">imprilove@gmail.com</a>
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