
var index = 1
var test = () => {
    var iTimeOKNewFound = 5000
    if(index === 3) {
        iTimeOKNewFound = 10000
    }
    console.log(` => Will wait ${iTimeOKNewFound} ms ${index}`)
    setTimeout(() => {
        console.log(` => Done wait ${iTimeOKNewFound} ms`)
        console.log(`------------------------------------------------------`)
        index++
        test()
    }, iTimeOKNewFound)
}

test()