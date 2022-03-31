
const checkoutTotal = (pizzaList) => {
    let total = 0;

    for (let pizza of pizzaList) {
        total += Number(pizza.price);
    }

    return total;
}


module.exports = checkoutTotal;