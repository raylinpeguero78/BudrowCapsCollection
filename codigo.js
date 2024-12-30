
let toglee = document.querySelector('.fa-solid');
let menu = document.querySelector(' .nav__ul')

toglee.addEventListener('click', ()=>{
menu.classList.toggle('active');

 
  
 

  //visibility: hidden visible;


  console.log("mmg");


})




/* incrementar */
/*let cantidades = document.querySelectorAll('.cantidad');

// Recorre cada sección de cantidad y agrega los event listeners
cantidades.forEach(cantidad => {
    let i = 0;
    let aumentar = cantidad.querySelector('.incrementar');
    let bajar = cantidad.querySelector('.decrementar');
    let contador = cantidad.querySelector('.contador');

    aumentar.addEventListener('click', () => {

      if(i<10){
        wao++;
        i++
       
        contador.innerHTML = i;
        icon.innerHTML = wao;
       
       

  
}
    });

    bajar.addEventListener('click', () => {
        if (i > 0) {
          wao--;
          icon.innerHTML = wao;
          i--;
        }
        contador.innerHTML = i;
          
});*/




// Pelota flotadora
let pelota = document.querySelector('.caja');

// Asegúrate de que la pelota tenga posición absoluta
pelota.style.position = 'absolute';

// Desplazamiento suave al hacer clic en la pelota
pelota.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        
    });
});








/*
codigo anterior
let icon = document.getElementById("icono-carrito");
let wao = 0;
let conectar = document.querySelector(".cafe-2");
let carro_2 = document.querySelectorAll(".producto-ver");

carro.forEach((boton) => {
  boton.addEventListener('click', () => {
    let dataName = boton.getAttribute('data-name');
    
    // Incrementar el contador del carrito
    wao++;
    icon.innerHTML = wao;

    // Buscar el producto correspondiente al data-name
    carro_2.forEach((producto) => {
      let target = producto.getAttribute('data-target');
      
      if (dataName === target) {
        // Crear el contenedor del producto para el carrito
        let can = document.createElement('div');
        can.innerHTML = 
          <img src="${producto.querySelector('img').src}" alt="Imagen de una gorra">
          <h2>${producto.querySelector('h2').innerText}</h2>
          <p>${producto.querySelector('p').innerText}</p>
          <small>${producto.querySelector('small').innerText}</small>
        ;

        // Agregar el producto al contenedor del carrito
        conectar.appendChild(can);
      }
    });
  });
});
*/













// Variables
let carro = document.querySelectorAll(".agregar-carrito");
let icon = document.getElementById("icono-carrito");
let wao = 0;
let conectar = document.querySelector(".mini-cart-popup");
let carro_2 = document.querySelectorAll(".producto-ver");
let cantidades = document.querySelectorAll('.cantidad');
let totalElement = document.querySelector('.total-amount');

// Variable para acumular el total
let total = 0.00;

cantidades.forEach(cantidad => {
  let i = 0;
  let aumentar = cantidad.querySelector('.incrementar');
  let bajar = cantidad.querySelector('.decrementar');
  let contador = cantidad.querySelector('.contador');
  let precio = parseFloat(cantidad.getAttribute('data-price')); // Obtener el precio del atributo data-price

  aumentar.addEventListener('click', () => {
      if (i < 10) { // Ajusta este límite según tus necesidades
          i++;
          contador.innerHTML = i;
          wao++;
          icon.innerHTML = wao;

          // Sumar el precio del producto al total
       total += total
       totalElement.textContent = `£${total.toFixed(2)}`;

      }
  });

  bajar.addEventListener('click', () => {
      if (i > 0) { // Evitar cantidades negativas
          i--;
          contador.innerHTML = i;
          wao--;
          icon.innerHTML = wao;

          // Restar el precio del producto del total
          total -= total;
          totalElement.textContent = `£${i.toFixed(2)}`;
      }
  });
});

// Evento de clic para cada botón de "Añadir al carrito"
carro.forEach((boton) => {
    boton.addEventListener('click', () => {
        let dataName = boton.getAttribute('data-name');

        // Incrementar el contador del carrito
        wao++;
        icon.innerHTML = wao;

        // Buscar el producto correspondiente al data-name
        carro_2.forEach((producto) => {
            let target = producto.getAttribute('data-target');
            let dataprecio = producto.getAttribute('data-price');

            if (dataName === target) {
                // Crear el contenedor del producto para el carrito
                let can = document.createElement('div');
                
                can.style.display = "flex";
                can.style.alignItems = "center";

                // Obtener la imagen y el precio del producto
                let img = producto.querySelector('img');
                let imgSrc = img ? img.src : 'default-img.png';
                let imgAlt = img ? img.alt : 'Imagen de una gorra';
                let precio = parseFloat(dataprecio.replace('£', ',').replace(',', ''));

                // Establecer el contenido HTML del producto en el carrito
                can.innerHTML = `
                  <img style="width: 30%; margin-right: 10px;" src="${imgSrc}" alt="${imgAlt}">
                  <p class="costo">£${precio.toFixed(2)}</p>

                  <button class="delete-btn">🗑️</button>
               
                `;

                // Agregar el producto al contenedor del carrito
                conectar.appendChild(can);

                // Actualizar el total después de agregar un producto
                total += precio;
                totalElement.textContent = `£${total.toFixed(2)}`;

                // Añadir evento de clic para eliminar el producto
                let eliminar = can.querySelector('.delete-btn');
                eliminar.addEventListener('click', () => {
                    can.remove(); // Eliminar el contenedor del producto
                    wao--;
                    icon.innerHTML = wao;

                    // Restar el precio del producto al total
                    total -= precio;
                    totalElement.textContent = `£${total.toFixed(2)}`;
                });
            }
        });
    });
});

// Evento de clic para mostrar el carrito
icon.addEventListener('click', () => { 
  conectar.style.display = 'inline-block';
});

// Evento de clic para cerrar el carrito
let cerrar = document.querySelector('.close-btn');
cerrar.addEventListener('click', () => {
  conectar.style.display = 'none';
});











  

   
    
  










/*



carro.forEach(carrito => {
    carrito.addEventListener('click', () => {
        // Obtener el data-name del botón clicado
        let dataName = carrito.getAttribute('data-name');
        
        
        // Iterar sobre cada sección de detalles
        carro_2.forEach(detalle => {
            // Verificar si el data-target del detalle coincide con el data-name del botón
            if (detalle.getAttribute('data-target') === dataName) {

                detalle.style.color = 'black';
            
          
            } else {
              if (detalle.getAttribute('data-target') === dataName) 
                detalle.style.display= 'none';
            
          }
        });
    });
});


const totalElement = document.querySelector('.total-amount');

// Función para calcular y actualizar el total
function calcularTotal() {
                                                                                                                                                              
  // Obtener todos los elementos con la clase 'costo'
  const precios = document.querySelectorAll('.costo');
  precios.forEach(precioElement => {
    // Obtener el valor numérico del precio (asumiendo que el precio está en el atributo 'textContent')
    const precio = parseFloat(precioElement.textContent.replace('£', ''));
    total += precio;
  
  });
  // Actualizar el contenido del elemento total
  totalElement.textContent = `£${total.toFixed(2)}`;
}

// ... resto de tu código

// Dentro del evento 'click' del botón de agregar al carrito:
// ...
// Llamar a la función calcularTotal después de agregar el producto
calcularTotal();























*/










