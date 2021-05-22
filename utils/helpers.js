module.exports = {
    calculateTotal: (array) => {
        let total = 0;
        array.forEach((item) => total += parseFloat(item.value))
        return total;
    }
}