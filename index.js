let usuario = prompt("Ingresar Usuario");

while (usuario =""){
    alert("intentalo de nuevo");
    usuario = prompt("Ingresa Usuario");
}

for (let i= 1; i<4; i ++){
    let usuario = prompt("Ingresar usuario");
    if (usuario =""){
        alert("Espera unos minutos y vuelve a intentar");
    }
}
if(usuario !=""){
    let contraseña = prompt("Ingresar contraseña");
    for (let i= 1; i<4; i++){
        let contraseña = prompt("Ingresar contraseña");
        alert("Escribenos para recuperar tu contraseña");
    }
}

let contraseña = prompt("Ingresar Contraseña");
let contraseña = prompt ("Ingresá contraseña");
const salida = usuario + " " + "Puedes comenzar a comprar";


if ((usuario !="") && (contraseña !="")){
    alert(salida);
}else if (usuario !=""){
    alert("Intentalo nuevamente");
    usuario = prompt("Ingresar usuario");
}
if (usuario !=""){
    console.log("Ingresa Contraseña");
    console.log(contraseña = prompt("Ingresa contraseña"));
}else if (usuario =""){
    console.log(alert("Intentalo Nuevamente"));
    console.log(usuario = prompt("Ingresar Usuario"));
}else if((usuario !="") && (contraseña ="")){
    console.log(alert("Intentalo Nuevamente"));
    console.log(contraseña = prompt("Ingresá Contraseña"));
}else{
    ((usuario !="") && (contraseña !=""))
    console.log(alert(salida));
}

if ((usuario !="") && (contraseña !="")){
    alert(salida);
}else if (usuario =""){
    alert("Intentalo Nuevamente");
    usuario = prompt("Ingresar Usuario");
}else if (usuario !=""){
    alert("Ingresa Contraseña");
    contraseña = prompt("Ingresa contraseña");
}else{
    ((usuario !="") && (contraseña =""))
    alert("Intentalo Nuevamente");
    contraseña = prompt("Ingresá Contraseña");
}

if ((usuario !="") && (contraseña !="")){
    alert(salida);
}else{
    ((usuario ="") || (contraseña =""))
    alert("Intentalo nuevamente");
    usuario = prompt("Ingresa Usuario");
    contraseña = prompt("Ingresa Contraseña");
}

let usuario = prompt("Ingrese usuario");
let contraseña = prompt("Ingrese contraseña");
let salida = usuario + " " + "Puedes comenzar a comprar";

if (usuario !=""){
    let contraseña = prompt("Ingrese contraseña");
    if (contraseña !=""){
        alert(salida);
    }
}else{
    alert("Error: ingresar usuario valido");
    usuario = prompt("Ingrese usuario");
}
