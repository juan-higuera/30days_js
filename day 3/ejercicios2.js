
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
// Esta hecho para cumplir la orden sin embargo se requiere mejora :D 

y=prompt("Dame la ecuacion expresada") //2*x -2
a= y.search("x")
b= y.search(/\*/)
if (a>b){c=y.substring(0,a-1)} else {c=y.substring(b+1)}
console.log(c)
console.log("Corte con eje y: ", y.match(/([+-]\d+)/g))