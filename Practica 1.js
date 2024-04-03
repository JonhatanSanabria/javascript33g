
// guardar el numero de ordenes
const numOrden = 3;
const montoPrevisto = 3
// determinar si las ordenes superan el monto previsto para asi incrementar su capacidad el dia siguiente
function proyeccionDeVentas() {
    if (numOrden > montoPrevisto) {
        console.log("Hay mas pedidos de los esperado, debes incrementar la capacidad al dia siguiente");
    // si por el contrario, la cantidad de ordenes fue menor, entonces reducir su capacidad al dia siguiente
    } else if(numOrden < montoPrevisto){
        console.log("Hay menos pedidos del que se esperaba, reduce la capacidad al dia siguiente")
    }else{
        console.log("Estoy a la par con lo que me toca")
    }
    // quiere saber si el dia si el dia es par o impar
    if  (new Date().getDay() % 2 == 0) {
        console.log('El día es Par');
      } else {
        console.log('El día es Impar')
      };   
}; 

proyeccionDeVentas()

// saber la proporcion de ordenes cumplidas vs no cumplidas
let ordenesCumplidas = 0;
let ordenesNoCumplidas = 0;

function cumpliendoOrdenes() {
    if (numOrden == montoPrevisto) {
        ordenesCumplidas = ordenesCumplidas + 1,
        console.log(ordenesCumplidas, "Ordenes cumplidas")
    } else {ordenesNoCumplidas = ordenesNoCumplidas + 1,
            console.log(ordenesNoCumplidas,"Ordenes No Cumplidas")}    
}

cumpliendoOrdenes()