let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos la función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor dado de euros a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // retornamos el valor en dólares
    return valueInDollar;
}

// Convierte de dólares a yenes
function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs["USD"];
    let yen = euro * oneEuroIs["JPY"];
    return yen;
}

// Convierte de yenes a libras
function fromYenToPound(yen) {
    let euro = yen / oneEuroIs["JPY"];
    let pound = euro * oneEuroIs["GBP"];
    return pound;
}

// Exportamos las funciones para usarlas en otros archivos
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };