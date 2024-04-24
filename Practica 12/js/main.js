const koders = ['Jason',  'Matthew', 'John', 'Cindy', 'Lilly']

// Funcion para generar una card por cada koder
const  generateCardKoder = (title) => {
    let cardBody = document.createElement( "div" )
    cardBody.classList.add('card', 'mb-3')

    let cardElement =  document.createElement("div")
    cardElement.classList.add('card-body')

    let cardTitle =  document.createElement('h5')
    let cardTitleText = document.createTextNode(title);
    cardTitle.append(cardTitleText)

    let cardParagraph  = document.createElement('p')
    let cardParagraphText = document.createTextNode("Este es el parrafo de la card.")
    cardParagraph.append(cardParagraphText)

    let cardButton = document.createElement('button')
    let cardButtonText = document.createTextNode("Ver mas...")
    cardButton.classList.add("btn", "btn-dark");
    cardButton.append(cardButtonText)

    cardElement.append(cardTitle, cardParagraph, cardButton)
    cardBody.append(cardElement)

    return  cardBody;
}

let cardWrapper  = document.getElementById("card-wrapper");

koders.forEach((koder)=>{
let newCard = generateCardKoder(koder)
cardWrapper.append(newCard)
})