function calcularIMC (peso, altura) {
    const imc  = peso / (altura ** 2);
    if (imc < 18.5){
        return `${peso}Kg de ${altura}m de altura, o IMC es de: ${imc.toFixed(2)} - Bajo peso.`;
    } else if (imc >=  18.5 && imc <  24.9) {
        return `${peso}Kg de ${altura}m de altura, o IMC es de: ${imc.toFixed(2)} - Peso saludable.`;
    }else if (imc >=  23.9 && imc <    27.9) {
        return `${peso}Kg de ${altura}m de altura, o IMC es de: ${imc.toFixed(2)} - Sobrepeso.`;
    }else if (imc >=    27.9 && imc <=  32.2) {
        return `Obesidad grado I: ${imc.toFixed(2)}`;
    }else if (imc >          32.2) {
        return `Obesidad grado II/III: ${imc.toFixed(2)}` ;
    }
};

const resultado = calcularIMC(60, 1.70);
console.log(resultado);
