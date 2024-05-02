const getKoders = async () => {
    let response = await fetch(`https://javascript33g-cd62a-default-rtdb.firebaseio.com/koders.json`)
    let koders = await response.json()
    let keys = Object.keys(koders)
    // Aqui obtenemos el array listo para trabajar con el
    let kodersArray = keys.map((key) => {
            return {...koders[key], key}
        })
        console.log(kodersArray)
        printKoders(kodersArray, "koders-list")
    }
    
    const postKoder = async (koderObject) => {
        let response  =  await fetch('https://javascript33g-cd62a-default-rtdb.firebaseio.com/koders/.json',{
            method: 'POST',
            body: JSON.stringify(koderObject)
        })
        let data = await response.json();
        console.log(data)
        getKoders()
    }
    
    
    // Empezamos por activar el botón
    let saveKoderBtn = document.getElementById('save-koder-button')
    saveKoderBtn.addEventListener('click', () => {
    let inputs = document.querySelectorAll('#koder-form input')
    let koderObject  = {}
    inputs.forEach(({name, value}) => {
        koderObject[name] = value
    })
    console.log(koderObject)
    postKoder(koderObject)
    // Y hacemos que al dar click se borre el formulario
    inputs.forEach((input) => (input.value=''))
})

// Crear un objeto de koder basado en un array
const  createKoder = (koderObject) => {
    let { name, lastname } = koderObject
    let koderItem = document.createElement('li')
    koderItem.classList.add('list-group-item')
    koderItem.innerText=`${name} ${lastname}`
    
    return  koderItem;
}

// Recibe el array que extraemos de la base de datos
const printKoders = (kodersArray, wrapperId) => {
    let wrapper  = document.getElementById(wrapperId);
    wrapper.innerHTML = ""

    kodersArray.forEach((koder) =>
       wrapper.append(createKoder(koder)))
}

getKoders()