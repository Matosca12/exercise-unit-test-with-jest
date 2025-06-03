test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 146.26168224299065 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    // 1 USD -> EUR: 1 / 1.07 = 0.9345794392523364 EUR
    // 0.9345794392523364 EUR -> JPY: 0.9345794392523364 * 156.5 = 146.26168224299065 JPY
    expect(fromDollarToYen(1)).toBeCloseTo(146.26168224299065);
});

test("156.5 yenes should be 0.87 libras", function() {
    const { fromYenToPound } = require('./app.js');
    // 156.5 JPY -> EUR: 156.5 / 156.5 = 1 EUR
    // 1 EUR -> GBP: 1 * 0.87 = 0.87 GBP
    expect(fromYenToPound(156.5)).toBeCloseTo(0.87);
});