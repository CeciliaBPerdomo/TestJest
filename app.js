// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

//from dolar to yen
const fromDollarToYen = function(valueInYen) {
    let valueInDollar = valueInYen * 106.6
    return valueInDollar
}

const fromYenToPound = function(valueInPound) {
    let valueInYen = valueInPound * 159.9
    return valueInYen
}

// app.js file content
console.log("Hello World")

// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};