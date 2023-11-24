

// const btnComprar = document.querySelectorAll(".btn-comprar");
// btnComprar.forEach(boton => boton.addEventListener("click", () => {
// }))
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


    function crearPagina(e) {
      console.log("hola")
console.log(e.target.id)
      const mainIndex=document.querySelector(".main-index")
      mainIndex.innerHTML=``
      mainIndex.innerHTML=`<button class="btn-volver">Volver</button>`
      const btnVolver=document.querySelector(".btn-volver")
      btnVolver.addEventListener("click", volver)
      function volver(){
        location.reload()
      }
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
  btnComprar.forEach(boton => boton.addEventListener("click",crearPagina ))
  

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
