const users = [
    {name: "Alice", lastname: "Johnson", age: 28, gender: "Female", country:"USA"},
    {name: "Bob", lastname: "Smith", age: 32, gender: "Male", country: "Canada"},
    {name: "Carlos", lastname: "Gomez", age: 24, gender: "Male", country: "Mexico"},
    {name: "Daniela", lastname: "Martinez", age: 30, gender: "Female", country: "Colombia"},
    {name: "Erik", lastname: "Svensson", age: 29, gender: "Male", country: "Sweden"},
    {name: "Fiona", lastname: "O'Donnell", age: 35, gender: "Female", country: "Ireland"},
    {name: "Gautam", lastname: "Patel", age: 27, gender: "Male", country: "India"},
    {name: "Hana", lastname: "Kim", age: 22, gender: "Female", country: "South Korea"},
    {name: "Ivan", lastname: "Petrov", age: 34, gender: "Male", country: "Russia"},
    {name: "Julia", lastname: "Santos", age: 25, gender: "Female", country: "Brazil"}    
]

/*
1.- Necesitamos una lista con unicamente los nombres completos de cada usuario
2.- Necesitamos una lista con unicamente aquellos usuarios con genero "Male"
3.- Necesitamos una lista con unicamente aquellos usuarios con genero "Female"
4.- Necesitamos saber la edad promedio de los usuarios
5.- Necesitamos saber la mayor edad
6.- Necesitamos saber la menor edad
*/

let fullNames = users.map(user => user.name + ' '+ user.lastname)
let maleUsers = users.filter(user => user.gender === 'Male')
let femaleUsers = users.filter(user => user.gender === 'Female')
let sumAge=users.reduce((sum, user) => sum + user.age ,0)
let maxAge=Math.max(...users.map(user=>user.age))
let minAge=Math.min(...users.map(user=>user.age))

console.log(fullNames)
console.log("Males users list: ", maleUsers)
console.log("Females users list: ", femaleUsers)
console.log(`Promedio de edades: ${sumAge/users.length}`)
console.log(`Mayor Edad: ${maxAge} años`)
console.log(`Menor Edad: ${minAge} años`)



