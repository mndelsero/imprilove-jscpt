// ADESIVOS SECTION
const productosSeccionCantidad=document.querySelector(".seccion-productos-cantidad")

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


})