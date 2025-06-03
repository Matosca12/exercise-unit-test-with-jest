let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Convierte de dólares a yenes
function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs["USD"];
    let yen = euro * oneEuroIs["JPY"];
    return yen;
}

// Convierte de euros a dólares
function fromEuroToDollar(euro) {
    return euro * oneEuroIs["USD"];
}

// Convierte de yenes a libras
function fromYenToPound(yen) {
    let euro = yen / oneEuroIs["JPY"];
    let pound = euro * oneEuroIs["GBP"];
    return pound;
}

// Exporta las funciones para usarlas en otros archivos
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };