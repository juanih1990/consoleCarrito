const productos = [
    {
        codigo: 1,
        producto: "remera",
        precio: 2500,
        cantidad: 2 
    },
    {
        codigo: 2,
        producto: "Jean",
        precio: 13500,
        cantidad: 5 
    },
    {
        codigo: 3,
        producto: "buzo",
        precio: 4500,
        cantidad: 1 
    }
]
const carrito = []

function listarProductos(array){
    let listar = ""
    array.forEach(element =>{

       listar = listar + "-------------------------------\n" + "codigo: " + element.codigo + "\nPRODUCTO: " + element.producto + "\nPRECIO: " + element.precio + "\nCANTIDAD: " + element.cantidad  + "\n"
    })
   return  alert(listar)
}
function agregarCarrito(objeto){
    let agotado = false
    if(carrito.find(ele => ele.codigo == objeto.codigo)){
        //Resto uno en cantidad en los productos en existencia
        let positionProducto = productos.findIndex((index)  => index.codigo == objeto.codigo)       
         if(productos[positionProducto].cantidad > 0){
             //Sumo uno en cantidad en el carro si la cantidad en existencia es mayor a cero.
             let position = carrito.findIndex((index)  => index.codigo == objeto.codigo)
             carrito[position].cantidad++
             agotado = false
             productos[positionProducto].cantidad--
         } 
         else{
            alert("Stock agotado!!!")
            agotado = true
         }  
        
    }
    else if(productos.find(ele => ele.codigo == objeto.codigo)){
        carrito.push({      //Sumo uno en cantidad al carrito
            codigo: objeto.codigo,
            producto: objeto.producto,
            precio: objeto.precio,
            cantidad: 1
       })
       //resto uno en cantidad a los productos en existencia
       let positionProducto = productos.findIndex((index)  => index.codigo == objeto.codigo)  
       productos[positionProducto].cantidad--
    }  
    if(agotado === false){
        alert("producto agregado... ")  
    }    
}
function mostrarCarrito(){
    if(carrito.length > 0){
        listarProductos(carrito)
    }
    else{
        alert("Carrito vacio, comience a comprar")
    }   
}
function vaciarCarro(){
     carrito.splice(0,carrito.length)  // Para eliminar todo el carrito.  desde la posicion 0 hasta el final del array
     alert("Carrito vacio !!!")
}
function quitarCarrito(posicion){
    // le paso la posicion de array del objeto que quiero quitar
    if(carrito[posicion].cantidad > 1){           // si tienen mas de un objeto del mismo tipo en existencia, saco uno del carrito, ej 2 remeras saco una , me queda una en carro
        carrito[posicion].cantidad--
        alert("Se retiro una unidad del producto " + carrito[posicion].producto + " del carrito")
    }
    else{                                        // si hay cantidad es igual a 1 , lo saco del carro.
        carrito.splice(posicion,posicion + 1)
        alert("El producto se retiro del carrito")
    }
    
}
function menuDeOpciones(){
    let salir = false
    do{
       
        let opciones = Number(prompt("1: Listar Productos \n2: Agregar al carrito \n3: Mostrar carrito \n4: Vaciar carrito \n5: Quitar producto del carrito \n6: Para salir del programa"))
        if(opciones=== 1){
            listarProductos(productos)
        }
        else if(opciones === 2){
            let codigoOption = Number(prompt("Ingrese el codigo del producto que desea agregar"))
            if(productos.find(ele => ele.codigo == codigoOption)){
                let position = productos.findIndex((index)  => index.codigo == codigoOption) 
                agregarCarrito(productos[position])
            }
            else{
                alert("Error: el objeto que intenta agregar no esta en existencia")
            }
            
        }
        else if( opciones === 3){
            mostrarCarrito()
        }
        else if( opciones === 4){
            vaciarCarro()
        }
        else if( opciones === 5){   
            let cod = Number(prompt("Ingrese el codigo del producto que desea retirar del carrito"))  
            if(carrito.find(ele => ele.codigo == cod)){
                let position = carrito.findIndex((index)  => index.codigo == cod) 
                quitarCarrito(position)
            }
            else{
                alert("Error: el objeto que intenta quitar no esta en el carrito")
            }      
            
        }
        else if( opciones === 6){
            alert("Gracias por usar nuestro programita...")
            salir = true
        }
        else{
            alert("Error intente nuevamente, ingrese solo opciones que figuran en el menu")
        }
  
  }while(salir===false)
}

menuDeOpciones()
    