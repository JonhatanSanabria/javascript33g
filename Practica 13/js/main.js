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
    }
]

const getKodersList = (koderObject) => {
    let {name, lastName} = koderObject
    let  koderFullName = `${name} ${lastName}`;

    let koderListItem = document.createElement('li');
    let koderItemText = document.createTextNode(koderFullName);
    koderListItem.append(koderItemText);
    
    return koderListItem;
}

let listWrapper = document.getElementById('list-wrapper')

koders.forEach(koder => {
    let newKoder = getKodersList(koder)
    listWrapper.append(newKoder)
});