const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
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
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];


//1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos
//( 1 año humano = 7 años perrunos)
const getDogYears = (dogsArray) =>
dogsArray.map((dog) => ({...dog, edad: dog.edad * 7}));
console.log(getDogYears(canes))

//2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
const  dogsVaccinated = (dogsArray) => {
    let total = 0
    dogsArray.forEach((dog) => {
        if (dog.vacunado === true) total++
    })
   return total;
   }
console.log(dogsVaccinated(canes))

//3.- Necesitamos una lista que contenga el nombre y la direccion completa de cada perro, en el siguiente formato:
//        "{nombre: }, {calle: },  {numero: },  {colonia: },  {codigoPostal: }"
const dogAddress = (dogsArray) => {
    return dogsArray.map((dog) => {
        let { nombre, direccion } = dog
        let { calle, numero, colonia, codigoPostal } = direccion
        return `${nombre}: ${calle} #${numero} ${colonia} ${codigoPostal}`
    })
}
console.log(dogAddress(canes))

//4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
const averageDogAge = (dogsArray) => 
Math.round(dogsArray.reduce((totalAge, obj) => totalAge + obj.edad ,0)/dogsArray.length)
console.log(`La edad promedio en años humanos es de: ${averageDogAge(canes)}`)

//5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado",
//        a "si || no" (si el valor viene en true, cambiarlo a "si", si el valor viene en false, cambiarlo a "no")
const vaccinateValue = (dogsArray) => 
dogsArray.map((dog) => ({...dog, vacunado: dog.vacunado  ? 'Si' : 'No'}))
console.log(vaccinateValue(canes))

//6.- Necesitamos una nueva lista con unicamente el nombre de cada perro
const dogsNameList = (dogsArray) => dogsArray.map(({ nombre }) => nombre)
console.log(dogsNameList(canes))

//7.- Entregar una lista con los perros cuyos nombres tengan mas de 3 letras
const longNamesList = (dogsArray) => {
let result = dogsArray.filter(({ nombre }) => nombre.length > 3 )
return result
}
console.log(longNamesList(canes))

//8.- Necesitamos una lista de los canes que han sido vacunados y otra lista de canes no vacunados
const transformData = (dogsArray) => {
    let newData = 
     vaccinated = [];
     notVaccinated = [];
     dogsArray.forEach((dog) => {
      if (dog.vaccinated){
        newData.vaccinated = [...newData.vaccinated, dog]
 } else {
   newData.notVaccinated = [...newData.notVaccinated, dog];
 }})
 return newData
}
transformData(canes)

// O lo que puede ser lo mismo...
const transformData2 = (dogsArray) => {
  newData = 
  {
   vaccinated: [],
   notVaccinated: [], 
  }
   dogsArray.forEach((dog) => 
    dog.vaccinated 
    ? newData.vaccinated = [...newData.vaccinated, dog]
    : newData.notVaccinated = [...newData.notVaccinated, dog])
return newData
}
transformData2(canes)

//9.-Ahora utilizamos reduce para mostrar una lista de perros vacunados y no vacunados
const reduceData = (dogsArray) => {
  let result =  dogsArray.reduce(
    (accum, current, index, array) => {
      if  (current.vaccinated) {
        return {...accum, vaccinated: [...accum.vaccinated, current]}
      } else{
        return {...accum,notVaccinated: [...accum.notVaccinated, current]}
}
    } ,{vaccinated:[], notVaccinated: []})
  return result;
}
console.log(reduceData(canes));

// O lo que puede ser lo mismo...
const reduceData2 = (dogsArray) =>
  dogsArray.reduce(
    (accum, current) => 
      current.vaccinated 
      ? {...accum, vaccinated: [...accum.vaccinated, current]}
      : {...accum,notVaccinated: [...accum.notVaccinated, current]}
      , {vaccinated:[], notVaccinated: []}
    )
console.log(reduceData2(canes));