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
        await getKoders()
    }
    
    const deleteKoderById = async (koderkey) => {
        let response = await fetch(`https://javascript33g-cd62a-default-rtdb.firebaseio.com/koders/${koderkey}/.json`,{
            method: 'DELETE'
        })
        let data = await response.json()
        console.log(data);
    }


    // Empezamos por activar el botón
    let saveKoderBtn = document.getElementById('save-koder-button')
    saveKoderBtn.addEventListener('click', async () => {
    let inputs = document.querySelectorAll('#koder-form input')
    let koderObject  = {}
    inputs.forEach(({name, value}) => {
        koderObject[name] = value
    })
    console.log(koderObject)
    await postKoder(koderObject)
    await getKoders()
    // Y hacemos que al dar click se borre el formulario
    inputs.forEach((input) => (input.value=''))
})

// Crear un objeto de koder basado en un array
const  createKoder = (koderObject) => {
    let { name, lastname, key } = koderObject
    let koderItem = document.createElement('li')
    koderItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'gap-3')
    
    let koderName = document.createElement('span');
    koderName.classList.add('flex-grow-1')
    koderName.innerText = `${name} ${lastname}`    
    
    //boton editar koder
    let editButton = document.createElement('button');
    editButton.classList.add("btn", "btn-primary", "text-center")
    editButton.innerHTML="&#x270E"

    editButton.addEventListener( 'click', ()=> {
        console.log('hola')
    })

    //boton eliminar koder
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('btn','btn-danger', 'text-center')
    deleteButton.innerText="Borrar"

    deleteButton.addEventListener('click', async () => {
        console.log(key)
        await deleteKoderById(key)

    })

    koderItem.append(koderName, editButton, deleteButton)

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