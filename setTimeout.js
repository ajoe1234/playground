
var index = 1
var test = () => {
    var iTimeOKNewFound = getRandomInt(5000,10000)
    if(index === 3) {
        iTimeOKNewFound = getRandomInt(1000,4000)
    }
    console.log(` => Will wait ${iTimeOKNewFound} ms ${index}`)
    setTimeout(() => {
        console.log(` => Done wait ${iTimeOKNewFound} ms`)
        console.log(`------------------------------------------------------`)
        index++
        test()
    }, iTimeOKNewFound)
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

test()