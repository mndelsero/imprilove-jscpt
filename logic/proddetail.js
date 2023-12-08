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
      <img class="img-producto" src=".${producto.image}" alt="${producto.name}">
    <div class="prod-detail">
      <div class="producto-intro">
      <h5 class="intro-nombre">Arma tu Producto</h5>
      <form action=""  class="prod-form">
       <div class="prod-tamanio prod-form-in">
        <label for="">Tamaño</label>
        <select name="sizes" id="prod-size" aria-placeholder="posicion" required>
            <option value="normal" class="">Normal</option>
            <option value="pequeño">pequeño</option>
            <option value="grande">grande</option>
        </select>
       </div>
       <div class="prod-tamanio prod-form-in">
        <label for="">Cantidad </label>
       <input type="number" name="cantidad" id="prod-cantidad" placeholder="1" value="1" required>
       </div>
        
       <div class="prod-total-price">
        <h4 id="precio-actual">TU TOTAL: <span>IVA inc</span> : $ ${producto.price}</h4>
                      <p>precio unitario: $ ${producto.price} </p>
      </div>
      <div class="contacto-producto">
        <h4>Contactanos</h4>
        <button  id="pre-form">Haz tu pedido</button>
                       </div>
     </form>
    
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
      </div>`;

let indicadorPrecio=document.getElementById("precio-actual")
let input=document.getElementById("prod-cantidad")
let select=document.getElementById("prod-size")
let multiplicadoresTamanio = {
normal: 1,
pequeño: 0.8,
grande: 1.2
};
function actualizarPrecio() {
let nuevaCantidad = input.value;
let tamanioSeleccionado = select.value;
let multiplicadorTamanio = multiplicadoresTamanio[tamanioSeleccionado];
let prodPrice = nuevaCantidad * producto.price * multiplicadorTamanio;
indicadorPrecio.innerHTML =  ` TU TOTAL: <span>IVA inc</span> : $ ${prodPrice}`
return prodPrice
}
input.addEventListener("input", actualizarPrecio);
select.addEventListener("change", actualizarPrecio);

const preForm =document.getElementById("pre-form")
preForm.addEventListener("click",(e)=>{
e.preventDefault()
const select=document.getElementById("prod-size")
const prodSize=select.value;
const input=document.getElementById("prod-cantidad")
const prodCantidad=input.value;
const productoName=producto.name;
let precioPedido=actualizarPrecio()
const userForm=document.createElement("div")
userForm.setAttribute("class","user-form")
const contactoProd=document.querySelector(".contacto-producto")
userForm.innerHTML=`
<p>Pediste ${productoName}, tamaño ${prodSize},  te saldra en total $${precioPedido} por ${prodCantidad} unidad(es)</p>
<p>Solo necesitamos tus datos para enviar tu pedido!! Rellena el formulario por favor!</p>
<form action="https://formsubmit.co/imprilove@gmail.com" method="POST" class="contacto-form">
<input type="hidden" name="cantidad" id="prod-cantidad" placeholder="1" value="${prodCantidad}" required>
<input type="hidden" name="sizes" id="prod-size"  value="${prodSize}" required>
<label for="">Nombre : <br> <input type="text" name="nombre" placeholder="Ingresa Tu Nombre" required></label>
<label for="">Telefono :<br><input type="tel" name="telefono" placeholder="Ingresa Tu Telefono" required></label>
<label for="">E-Mail :<br><input type="email" name="email" id="" placeholder="Ingresa Tu Mail" required></label> 
<input class="comentar" name="pedido" id="" cols="160" rows="5" placeholder="Dejanos tu pedido o comentario" type="hidden"></input>
<button type="submit">ENVIAR</button> 
</form>`
contactoProd.innerHTML=` <h4>Contactanos</h4>`
contactoProd.appendChild(userForm)
})
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