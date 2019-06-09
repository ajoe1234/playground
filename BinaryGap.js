var N = 1041

var max = (N) => {
    if (N < 0) return 0
    
    var binary = []
    var count = 0
    var result = []
    
    // Convert Dec to Binary
    for(var i=N ; i>0 ; i = Math.floor(i/2) ){
        binary.push(i % 2)
    }
    
    // Get Binary
    binary = binary.reverse().join('').split('')
    
    // Find max
    binary.forEach((e,i) => {
        if(e !== '1') {
            count++
        } else {
            if(i !== 0) result.push(count)
            count = 0
        }
    });

    return result.sort().length > 0 ? result.sort().pop() : 0
}

console.log(max(N))