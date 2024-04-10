
function myFunction () {
    return 'Hello There!'
}
console.log(myFunction())

const myFunction2 = () => {
    return 'Hello World!'
}
console.log(myFunction2()) // Hello World!

function sumaDosNumeros(num1, num2) {
    let resultado = num1 + num2
    return resultado
} 
let prueba = sumaDosNumeros(3, 4)
console.log(prueba)

const addTwoNumbers = (a, b) => a + b
let prueba2 = addTwoNumbers(5,6)
console.log(prueba2)

let foo = {
    name: "John",
    greeting: function(){
        console.log(`Hi ${this.name}`);
    }
}
foo.greeting(); // Hi John

//Prototype
const someString = "hola mundo"
const someOtherString = "Hola Mundo";

console.log(someString)
console.log(someString.length)   //accediendo al valor de la propiedad 

console.log(someOtherString)
console.log(someOtherString.toLowerCase())   // llamar a la funcion
console.log(someOtherString.toUpperCase())
console.log(someOtherString.split())
console.log(someOtherString.split)    // devuelve la definicion de la funcion(metodo)

const phrase = "la mejor manera de aprender es practicando";
console.log(phrase.length)
console.log(phrase.split(" ").length)
console.log(phrase.toUpperCase())
console.log(phrase.replaceAll("a", "4"))

/* 
se requiere: 
    saber cuantos caracteres tiene la frase
    saber cuantas letras tiene la frase
    saber cuantas palabras tiene la frase
    obtener la misma frase pero en mayusculas
    obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
*/

const countCharacters = (phrase) => {return phrase.length}

const countLetters = (phrase) => {
    let words = phrase.split(' ')
    let lettersCount = 0
    for (let word of words){
        lettersCount+=word.length
    }
    return lettersCount
}

const countWords = (phrase) => {return phrase.split(' ').length}

const toMayus = (phrase) => {return phrase.toUpperCase()}

const replaceAWithFour = (phrase) => {return phrase.replaceAll("a", "4")}

console.log(countCharacters(phrase))
console.log(countLetters(phrase))
console.log(countWords(phrase))
console.log(toMayus(phrase))
console.log(replaceAWithFour(phrase))