// Ejercicios de js dia 2
let desafio = '30 días de JavaScript'
console.log(desafio)
console.log(desafio.length)
console.log(desafio.toUpperCase())
console.log(desafio.toLocaleLowerCase())
console.log(desafio.substring(5))
console.log(desafio.substr(11,10))
console.log(desafio.includes("JavaScript"))
console.log(desafio.split(" "))

let desafio2= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(desafio2.split(","))

console.log(desafio.replace("30","TREINTA"))
console.log(desafio.charAt(15))
console.log(desafio.charCodeAt("j"))
console.log(desafio.indexOf("a"))

let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.lastIndexOf("porque"))
console.log(oracion.search("porque"))

console.log("            hola              ".trim())

console.log(desafio.startsWith("30"))
console.log(desafio.endsWith("Script"))
console.log(desafio.match("a"))  //Devuelve un diccionario increible
console.log(("30 dias de ").concat("Javascript"),("again"))
console.log(desafio.repeat(2))
