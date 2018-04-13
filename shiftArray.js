var A = [1, 2, 3, 4]
var N = 4

console.log(A)
for(var i=0; i<N; i++){
    A.unshift(A.pop())
}

console.log(A)