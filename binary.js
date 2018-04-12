
var test = 15

// console.log((test >>> 0).toString(2))
var binary = (test >>> 0).toString(2)

console.log(binary)

var findFirst  = false
var findSecond
var result = []
var count = 0
for (var i = 0; i < binary.length; i++) {
    // console.log(binary.charAt(i));
    if(binary.charAt(i) === '1' && findFirst){
        findFirst = false
        // console.log(`${count}`)
        result.push(count)
        count = 0
    }
    if(binary.charAt(i) === '1' && !findFirst) {
        // console.log(binary.charAt(i))
        findFirst = true
        count = 0 
    }
    if(binary.charAt(i) === '0' && findFirst){
        count++
    }
}
console.log(result.length)
console.log(Math.max.apply(null, result))
