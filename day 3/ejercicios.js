
let firstName = "roberto ", lastName = "carrillo", country = "Colombia", city="idk", age=16, isMarried=true, year= new Date();
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

// Esta parte es un ejercicio que se hizo en el dia 2 asi que no se que hace aca por tanto pongo el mismo 
console.log("///////////////////////////////////////////////////////////////////")
console.log(typeof("10")==10)   //falso
console.log(typeof 10==10)      //falso
console.log(typeof 10 == "number") //True
console.log(Number("10") == 10)  //True

console.log(parseFloat("9.8") == 10)  // es 9.8 string se pasa a number
console.log(Number(parseFloat("9.8")) == 10)  // es 9.8 inferior a 10 se aproxima
console.log(Math.round(Number(parseFloat("9.8"))) == 10 ) //True
console.log("///////////////////////////////////////////////////////////////////")
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3 ej de true
console.log(10==10)
console.log(typeof(lastName)==typeof(firstName))
console.log(isMarried)
// Ahora los falsos
console.log(10==11)
console.log(typeof(age)==typeof(isMarried))
console.log(false)
console.log("////////////////////////////////////////////////////////////////////////////")
console.log(4 > 3) 
console.log(4 >= 3) 
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log("////////////////////////////////////////////////////////////////////////////")
// Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
let Python="python",jargon= "jargon"
console.log(Python.length<jargon.length)

console.log("////////////////////////////////////////////////////////////////////////////")

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
// No hay 'on' tanto en dragon como en python
console.log(!("dragon".includes("on") && "python".includes("on")))
// el resultado al ser falso quiere decir que SI hay caracteres "on" en ambos caracteres
console.log("////////////////////////////////////////////////////////////////////////////")

// ¿Qué año es hoy?
// ¿Qué mes es hoy con un número?
// ¿Qué fecha es hoy?
// ¿Qué día es hoy con un número?
// ¿Cuál es la hora actual?
// ¿Cuántos minutos hay actualmente?
// Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.

console.log(year.getFullYear())
console.log(year.getMonth()+1)
console.log(year)
console.log(year.getDate())
console.log(year.getHours(),":",year.getMinutes())
console.log(year.getMinutes())
console.log(year.getTime())

