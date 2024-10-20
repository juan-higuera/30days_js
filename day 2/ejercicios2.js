// EJERCICIOS PARTE 2
////////////////////////////////////////////////////////////////////
let desafio = '30 días de JavaScript'

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'")


console.log(typeof("10")==10)   //falso
console.log(typeof 10==10)      //falso
console.log(typeof 10 == "number") //True
console.log(Number("10") == 10)  //True

console.log(parseFloat("9.8") == 10)  // es 9.8 string se pasa a number
console.log(Number(parseFloat("9.8")) == 10)  // es 9.8 inferior a 10 se aproxima
console.log(Math.round(Number(parseFloat("9.8"))) == 10 ) //True

let prueba = "Espero que este curso no esté lleno de jerga"
console.log(prueba.search("jargon"))  // no esta :b
console.log(Math.random()*100 + 1)
console.log(Math.random()*(100-50+1)+50)  // math.random()*(max-min+1)+min  realmente la gente es muy inteligente
console.log(Math.random()* 255+1)
let example = 'JavaScript'
console.log(example.substring(0))
console.log(desafio.substring(11))

for (i=1;i<=5;i++){console.log(i,1,i,i**2,i**3)}

let example2 = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(example2.substring(35))

let example3 = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'

console.log(example3.search("amor"))

console.log(example2.match(/porque/g)) 

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentence.replace(/[%$@&#;]/g,""))

const sentence2= 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'

console.log(sentence2.match(/(\d+)/g)) // explico pal futuro 
// \d busca digitos del 0 al 9,  
// el + busca un grupo de numeros para no tomar solo un digito y ya 
// se encierra en parentesis para que el /g lo tome completo  y asi se hace