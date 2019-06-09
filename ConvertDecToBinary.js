var n = 31

var convertDecToBinary = (num) => {
    var result = []
    for(var i=num ; i>0 ; i = Math.floor(i/2) ){
        result.push(i % 2)
    }
    
    return (result.reverse().join(''))
}

console.log(convertDecToBinary(n))