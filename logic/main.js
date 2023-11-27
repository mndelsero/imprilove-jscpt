// INDEX SECTIONS
const productosDestacadosIndex = document.querySelector(".productos-destacados-index");
const adhesivosIndex = document.querySelector(".section-adhesivos");
const tarjeteriaIndex = document.querySelector(".section-tarjeteria");
const cumpleIndex = document.querySelector(".section-cumple");
const marketingIndex = document.querySelector(".section-marketing");
const cuadrosIndex = document.querySelector(".section-cuadros");
const agendasIndex = document.querySelector(".agendas-section");

function productosIndex(categoria, section) {
  section.innerHTML = ``
  categoria.forEach(producto => {
    const cardSeccion = document.createElement(`div`);
    cardSeccion.setAttribute(`class`, `card`);
    cardSeccion.innerHTML = `
        <img src="${producto.image}" class="card-img-top" alt="...">
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

function extraerNumeroDeVariable(variable) {
  const numeroExtraido = parseInt(variable.slice(8));
  return isNaN(numeroExtraido) ? null : numeroExtraido;
}

function crearPagina(e) {
  const mainIndex = document.querySelector(".main-index")
  const esteId = e.target.id
  const nuevoId = extraerNumeroDeVariable(esteId);

  fetch('./proddata.json')
    .then((res) => res.json())
    .then((datos) => {
      mainIndex.innerHTML = ``
      const traerProducto = datos.filter(producto => producto.productId === nuevoId)
      traerProducto.forEach((producto) => {
        mainIndex.innerHTML = `<button class="btn-volver">Volver</button>
    <section class="producto-section">
    <div class="mostrador-producto">
    <img class="img-producto" src="${producto.image}" alt="${producto.name}">
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

    })
}

fetch('./proddata.json')
  .then((res) => res.json())
  .then((datos) => {
    const cumpleFilter = datos.filter(producto => producto.category === "Para Cumpleaños")
    const agendasFilter = datos.filter(producto => producto.category === "Agendas-Papeleria")
    const cuadrosFilter = datos.filter(producto => producto.category === "Cuadros-Fotografias")
    const marketingFilter = datos.filter(producto => producto.category === "Marketing")
    const tarjeteriaFilter = datos.filter(producto => producto.category === "Tarjeteria")
    const adhesivosFilter = datos.filter(producto => producto.category === "Adhesivos")
    // GENERAMOS SECCIONES EN INDEX
    productosIndex(cumpleFilter, cumpleIndex)
    productosIndex(adhesivosFilter, adhesivosIndex)
    productosIndex(marketingFilter, marketingIndex)
    productosIndex(tarjeteriaFilter, tarjeteriaIndex)
    productosIndex(cuadrosFilter, cuadrosIndex)
    productosIndex(agendasFilter, agendasIndex)
    productosIndex(datos, productosDestacadosIndex)

    const btnComprar = document.querySelectorAll(".btn-comprar");
    btnComprar.forEach(boton => boton.addEventListener("click", crearPagina))
})






















// fetch('./proddata.json')
//   .then((res) => res.json())
//   .then((datos) => {
//     datos.forEach(producto => {
//       const cardProducto = document.createElement(`div`);
//       cardProducto.setAttribute(`class`, `card`);
//       cardProducto.innerHTML = `
//             <img src="${producto.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//             <p class="card-name">${producto.name}</p>
//               <p class="card-text"> ${producto.price}$ pesos</p>
//               <a href="">
//                 <h5 class="card-title">${producto.category}</h5>
//               </a>
//               <button href="" class="btn-comprar" id="producto${producto.productId}">Comprar</button>
//             </div>`;
//       productosDestacadosIndex.appendChild(cardProducto);
//     });
//     //  const btnComprar = document.querySelectorAll(`.btn-comprar`);
//     // btnComprar.forEach(este => {
//     //     este.addEventListener(`click`, (e) => { agregarAutoCarrito(e.currentTarget.id) })
//     // })
//   })
