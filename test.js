// importar la función sum del archivo app.js
const {
    sum
} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a 
    //nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function() {
    // importo la funcion desde app.js
    const {
        fromEuroToDollar
    } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

//Convertir de dolares a yen
test("One dollar should be 106.6 yenes", function() {
    // importo la funcion desde app.js
    const {
        fromDollarToYen
    } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(373.09999999999997);
    /* 1 euro son 1.2 dolares, 
     1 euro = 127.9 yenes
     1.2 dolares = 127.9 yenes
     1 dolar = 106.6 yenes
     */
})


// Convertir yenes en pounds
/*  1 euro = 127.9 yenes 
    1 euro = 0.8 pounds
    127.9 yenes = 0.8 pounds
    1 yen = 159.9 pounds 
*/
test("One yen should be 159.9 pounds", function() {
    const {
        fromYenToPound
    } = require('./app.js');
    expect(fromYenToPound(3.5)).toBe(559.65);
})