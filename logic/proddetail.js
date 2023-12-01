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

  export default crearPagina