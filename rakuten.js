var K = 1
var L = 1
var M = 6
var N = 4

var P = 5
var Q =-1
var R = 7
var S = 3

var x5 = Math.max(K,P);
var y5 = Math.max(L,Q);
var x6 = Math.min(M,R);
var y6 = Math.min(N,S);

console.log(`(${x5},${y5}) - (${x6},${y6}) `)
var diffX = Math.abs(x5 - x6)
var diffY = Math.abs(y5 - y6)
var area = diffX * diffY
console.log(area)