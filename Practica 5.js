/*
1.- Necesitamos entregar las iniciales del nombre de una persona, 
considerando unicamente primer nombre, apellido paterno y apellido materno...
input: Jonhatan Javier Sanabria Soto
output: J. S. S.
*/
const name = "Jonhatan Javier Sanabria Soto"

const getInitials = () => {
    let names = name.split(" ");
    let mappingName = names.map(word => word[0]);
    return [mappingName[0], '. ', mappingName[2], '. ', mappingName[3], '. '].join('');
}
console.log(getInitials());

/*
2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres debemos poder obtener algun nombre al azar.
El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta.

Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.
*/
let namesList = [name]

const deleteRandomName = () => {
    const randomName = Math.floor(Math.random() * namesList.length)
    console.log(`Se elimina el nombre ${namesList[randomName]}`)
    if (namesList.length ===  0) {
        console.log('Ya no hay nombres en la lista')
    } else{
        namesList = namesList.filter((item) => item !== namesList[randomName])
    }
}
deleteRandomName();

console.log(namesList)