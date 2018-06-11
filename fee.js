var feeRate = (original) => {
    var num = parseFloat(original)
    return (num - (num * .0025))
}

console.log(feeRate(100))