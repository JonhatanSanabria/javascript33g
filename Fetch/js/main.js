const getKoders = async () => {
    let response = await fetch(`https://javascript33g-cd62a-default-rtdb.firebaseio.com/koders.json`)
    let koders = await response.json()
    let keys = Object.keys(koders)
    let kodersArray = keys.map((key) => {
            return {...koders[key], key}
        })
        console.log(kodersArray)
    }
getKoders()

const postKoder = async (koderObject) => {
    let response  =  await fetch('https://javascript33g-cd62a-default-rtdb.firebaseio.com/koders/.json',{
        method: 'POST',
        body: JSON.stringify(koderObject)
    })
    let data = await response.json();
    console.log(data)
}

// Se manda a llamar la funcion postKoders, agregando un nuevo Koder y enviandolo a la base de datos
// postKoder(name: "Nombre", lastname: "Apellido")
// Se creara la llave unica con el nuevo koder dentro