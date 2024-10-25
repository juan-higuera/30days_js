
// console.log("Dame la base y la altura");
// let a= Number(prompt("altura: "),("1"));
// let b= Number(prompt("base: "));
// let c= (a*b)/2
// console.log(c)

///////////////////////////////////////////////////////////////////////////////////////////


// console.log("Dame tus numeros");
// let a= Number(prompt("1: "));
// let b= Number(prompt("2: "));
// let c= Number(prompt("3: "));
// let d= (a+b+c)
// console.log(d)


///////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Dame el lado a y lado b");
// let a= Number(prompt("1: "));
// let b= Number(prompt("2: "));
// let c= (a*b)
// let d= (a+b)*2
// console.log("Tu area es de :  ",c)
// console.log("Tu perimetro es de :  ",d)

////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Dame el radio del circulo");
// let r= Number(prompt("1: "));

// area = Math.PI*r**2
// circunferencia = Math.PI*r*2

// console.log("Tu area es de :  ",area)
// console.log("Tu circunferencia es de :  ",circunferencia)

/////////////////////////////////////////////////////////////////////////////////////////////////
// Esta hecho para cumplir la orden sin embargo no sigue una que este en desorden :D 

// y=("2*x-2") //2*x-2
// a= y.search("x")
// b= y.search(/\*/)
// if (a>b){ex2=y.substring(0,a-1)} else {ex2=y.substring(b+1)}
// console.log(ex2)
// console.log("Corte con eje y: ", y.match(/([+-]\d+)/g))

// la de abajo encuentra la pendiente pero las 3 deben estar sin comentarios para que funcione-> up an down

// function pendiente(x1,y1,x2,y2) {
//     m = (y2-y1)/(x2-x1)
//     console.log(m)
//     return m
// }

// aca los comparo ////////////////////

// ex1 = pendiente(2,2,6,10);
// console.log(ex1==ex2) /* tener en cuenta que una es un string y la otra un int */

/////////////////////////////////////////////////////////////////////////////////////////////////////////
function operacion(nInicial){
    console.log(["x","y"])
    for (let x = nInicial,r=0;r<=6; x++,r++){
        y = x**2 + 6*x + 9
        console.log([x,y])
    }
}
operacion(-6)
console.log("//////////////////////////////////////////")
operacion(-3)

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// a diferencia de los anteriores este fue bueno... no se quizas me saltare estos tipos de ejercicios.. fin del dia 3

// console.log("Dame tus numeros");
// let b= Number(prompt("Ingrese horas: "));
// let c= Number(prompt("Introduce la tarifa por hora: "));
// let d= (b+c)
// console.log(d)
