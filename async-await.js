
var shows = (input) => {
    return new Promise((resolve,reject) => {
        if(!input) {
            reject('Input is null')
        }
        resolve(input)
    })
}

var printingC = async () => {
    try {        
        var a = await shows('a')
        var b = await shows('b')
        var c = await shows('c')
        return (a  + b + c)
    } catch (err) {
        return (err)
    }
}

var printingN = async () => {
    try {        
        var a = await shows('1')
        var b = await shows('2')
        var c = await shows('3')
        return (a  + b + c)
    } catch (err) {
        return (err)
    }
}

var printAll = async () => {
    var number = await printingN()
    var cha = await printingC()
    console.log(number + cha )
}

printAll()
