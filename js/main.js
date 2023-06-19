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
    if(carrito.find(ele => ele.codigo == objeto.codigo)){
        //Sumo uno en cantidad en el carro
        let position = carrito.findIndex((index)  => index.codigo == objeto.codigo)
        carrito[position].cantidad++
        //Resto uno en cantidad en los productos en existencia
        let positionProducto = productos.findIndex((index)  => index.codigo == objeto.codigo)
        productos[positionProducto].cantidad--
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
     alert("producto agregado... ")  
}

function mostrarCarrito(){
    if(carrito.length > 0){
        listarProductos(carrito)
    }
    else{
        alert("Carrito vacio, comience a comprar")
    }   
}
function menuDeOpciones(){
    let salir = false
    do{
       
        let opciones = Number(prompt("1: Listar Productos \n2: Agregar al carrito \n3: Mostrar carrito \n4: Para salir del programa"))
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
            alert("Gracias por usar nuestro programita...")
            salir = true
        }
        else{
            alert("Error intente nuevamente, ingrese solo opciones que figuran en el menu")
        }
  
  }while(salir===false)
}

menuDeOpciones()
    