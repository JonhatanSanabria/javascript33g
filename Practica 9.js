const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      pais: "México",
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      pais: "Colombia",
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];

// 1.- Necesito conocer la edad promedio de todos los perros
const getAverageAge = (dogsArray) => {
    let total = dogsArray.reduce(
        (accum, current) => {
        return accum + current.edad
    },0)
    let averageAge = total / dogsArray.length;
        return averageAge;
}
console.log(getAverageAge(canes));
// O lo que es lo mismo
const getAverageAge2 = (dogsArray) =>
    dogsArray.reduce((accum, current) => accum + current.edad / dogsArray.length, 0)
console.log(getAverageAge2(canes));

// 2.- Necesito obtener una lista de perros basados en el pais al que pertenecen
const  getDogsByCountry = (dogsArray, country) => {
    let result = dogsArray.filter((dog) => dog.pais.toLowerCase() === country.toLowerCase());
    if (!result.length){
        return `No se encontraron perros que pertenezcan a ${country}`
    } else {
        return result;
    }
}
console.log(getDogsByCountry(canes,"Ecuador"));
console.log(getDogsByCountry(canes,"Ecuador"));

// 3.- Necesito una lista de los codigos postales de los perros
const zipCodeList = (dogsArray) => 
    dogsArray.map((dog)=>dog.direccion.codigoPostal)
console.log(zipCodeList(canes))

// 4.- Necesito una lista que contenga la lista de paises a los que pertenezcan los perros, pero sin repetidos
const getCountryList = (dataArray) => {
  let result = dataArray.reduce(
    (accum, current) => {
        return accum.includes(current.pais) ? accum : [...accum, current.pais]}, 
        []);
    return result;
}
console.log(getCountryList(canes));

// O lo que es lo mismo 
const getCountryList2 = (dataArray) =>
  dataArray.reduce(
    (accum, current) =>
      accum.includes(current.pais) ? accum : [...accum, current.pais], [])
console.log(getCountryList2(canes))