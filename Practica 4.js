
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
/*
function  countCharacters(phrase){
    let characters = phrase.length
    return characters
}
*/

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

/*
se requiere:
    1.- conocer la cantidad de letras de una palabra dentro de la frase, la palabra se debe seleccionar por su posicion, saber la longitud de la palabra,
    si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que devuelve un error
    2.- de la frase, necesitamos eliminar una palabra en base a su posicion y recibir una frase sin la palabra borrada
    3.- eliminar todas las palabras cortas de la frase considerando que una palabra corta tiene 3 caracteres o menos y debemos obtener la nueva frase sin palabras cortas
*/
const amountLetters = (phrase) => {
    let array = phrase.split(" ")
    return array
}
console.log(amountLetters(phrase))
console.log(amountLetters(phrase)[5].length)
if (amountLetters(phrase) != [0,6]){
    console.log(`La posicion de la palabra no existe en la frase`)
}else{
    console.log(`Hay un total de ${amountLetters(phrase).length} letras en esa palabra`)
}
    
