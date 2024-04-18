// Necesito un array con las vocales de la frase, contar el total de vocales

const somePhrase = "The evil that men do"

const countVowels = (phrase) => {
    const vowelsList = /[aeiouáéíóúäëïöüAEIOUÁÉÍÓÚÄËÏÖÜ]/g
    const phraseLength = phrase.length
    let total = 0
//for (inicio, condicion para terminar, incremento)
    for (let i = 0; i < phraseLength; i++){
    let isVowel = vowelsList.test(phrase.charAt(i))
    if(isVowel){
        total ++
    }
}
return total
}

console.log(countVowels(somePhrase))
