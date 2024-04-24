const koders = [
    {
        name: "Felipe",
        lastName: "Garcia"
    },
    {
        name: "Guadalupe",
        lastName: "Torres"
    },
    {
        name: "Juan",
        lastName: "Perez"
    },
    {
        name: "Julia",
        lastName: "Reynaga"
    }, 
    {
        name: "Santiago",
        lastName: "Olivares"
    }, 
    {
        name: "Isabel",
        lastName: "Torres"
    }
]
const koders2 = [
    {
        name: "Charles",
        lastName: "Silva"
    },
    {
        name: "Brenda",
        lastName: "Santos"
    },
    {
        name: "Ramiro",
        lastName: "Gonzalez"
    },
    {
        name: "Javier",
        lastName: "Soto"
    }, 
    {
        name: "Oliver",
        lastName: "Castillo"
    }, 
    {
        name: "Berenice",
        lastName: "Prado"
    }
]

const getKodersList = (koderObject) => {
    let {name, lastName} = koderObject
    let  koderFullName = `${name} ${lastName}`;

    let koderListItem = document.createElement('li');
    koderListItem.classList.add( 'list-group-item' )
    let koderItemText = document.createTextNode(koderFullName);
    koderListItem.append(koderItemText);
    
    return koderListItem;
}

const printKoders = (kodersArray, wrapperId) => {
kodersArray.forEach(koder => {
    let listWrapper = document.getElementById(wrapperId)
    let newKoder = getKodersList(koder)
    listWrapper.append(newKoder)
    console.log(newKoder)
})
}
printKoders(koders, 'list-wrapper')
printKoders(koders2, 'second-list-wrapper')
