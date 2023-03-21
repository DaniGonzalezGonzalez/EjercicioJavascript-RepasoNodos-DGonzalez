// Pasos que he seguido
// 1º - Coger form, inputs y contenedores que vamos a usar
// 2º - Probar que funciona lo siguiente: (1º - Prevent default, 2º - Coger values, crear elementos (createElement) y almacenarlos (con appendChild))
// 3º - Aplicar filtros con expresiones regulares

const form = document.querySelector('#formulario')
const nombreProducto = document.querySelector('#nombre')
const precioProducto = document.querySelector('#precio')
const contenedorInfo = document.querySelector('#tbody')
const expRegNombre = /[a-zA-ZÀ-ÿ\u00d1]+[0-9]*/
const expRegPrecio = /^[0-9]+([.][0-9]{1,2})?$/

function guardarValores() {
  let nombreValue = nombreProducto.value.trim()
  let precioValue = precioProducto.value.trim()

  if (!expRegNombre.test(nombreValue) || !expRegPrecio.test(precioValue)) return

  const contenedorValues = document.createElement('tr')
  const contenedorNombre = document.createElement('td')
  const contenedorPrecio = document.createElement('td')

  contenedorNombre.innerHTML += nombreValue
  contenedorPrecio.innerHTML += `${Number(precioValue)}€`
  contenedorInfo.appendChild(contenedorValues)
  contenedorValues.appendChild(contenedorNombre)
  contenedorValues.appendChild(contenedorPrecio)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  guardarValores()
})