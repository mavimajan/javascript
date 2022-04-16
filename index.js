// PRODUCTOS A LA VENTA

const array=[{id:1, conjunto: "Conjunto Berlín"},
            {id: 2, conjunto: "Conjunto Amsterdam"},
            {id: 3, conjunto: "Conjunto Roma"}];
console.log(array [1]);
array.push({id:4, conjunto:"Conjunto Venecia"});
console.log(array.length);
console.log(array);

for(const conjunto of array){
    console.log(conjunto);
    console.log(conjunto.array);
}


// PRODUCTOS VENDIDOS
class Producto{
    constructor(nombre, precio){
        this.nombre= nombre.toUpperCase();
        this.precio= parseInt(precio);
        this.vendido= false;
    }
    sumaIva(){
        this.precio= this.precio*1.21;
    }
    vender(){
        this.vendido= true;
    }
}

const producto1= new Producto ("conjunto Berlin","1400");
const producto2= new Producto ("conjunto Venecia","1500");
const producto3= new Producto ("conjunto Roma", "1800");
const producto4= new Producto ("conjunto Amsterdam", "1600");
producto1.sumaIva();
producto2.sumaIva();
producto3.sumaIva();
producto4.sumaIva();

console.log(producto1.vendido);
producto2.vender();
console.log (producto2. vendido);
producto3.vender();
console.log (producto3. vendido);
producto4.vender();
console.log (producto4. vendido);

// DOM

let ropaInterior =document.createElement("h3");
ropaInterior.innerHTML= "<h3> Ropa Interior </h3>";
document.body.append(ropaInterior);

let iniciarSesion = document.getElementById("iniciarSesion");
iniciarSesion.addEventListener("click", respuesta)
function respuesta(){
    let usuario= prompt ("Ingrese usuario");
    let contrasenia= prompt("Ingrese contraseña");
    if(!(usuario === '' && contrasenia === '')){
                alert("Bienvenida a nuestro sitio");
    }else{
        alert(`usuario o contraseña incorrectos, intentalo nuevamente`)
            usuario= prompt("Ingrese usuario");
            contrasenia= parseInt(prompt("Ingrese contraseña"));
    }
}

let id = document.getElementById("shop");
id.addEventListener("click", respuesta1)
function respuesta1(){
    alert("Puedes comenzar a comprar");
}

