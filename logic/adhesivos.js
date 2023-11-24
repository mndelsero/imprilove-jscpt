// ADESIVOS SECTION
const productosSeccionCantidad = document.querySelector(".seccion-productos-cantidad")
const productosAdhesivos = document.querySelector(".productos-adhesivos")
const productosSection = (categoria, section) => {
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
    const adhesivosFilter = datos.filter(producto => producto.category === "Adhesivos")

    productosSection(adhesivosFilter, productosAdhesivos);
    productosSeccionCantidad.innerHTML = `${adhesivosFilter.length} Productos`


  })
  


// GENERAMOS SECCIONES EN INDEX





