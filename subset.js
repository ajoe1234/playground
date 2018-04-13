// Test subset for array
var PlayerOne = ['B', 'C', 'A', 'D'];
var PlayerTwo = ['D', 'C','Z'];

var test = !PlayerTwo.some(val => {
    console.log(val)
    return PlayerOne.indexOf(val) === -1
})
console.log(test)
console.log('--------------------------------------------------')



var oldCam = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
var newCam = [{id: 1}, {id: 2}, {id: 3}, {id: 4},{id: 5},{id: 6}]

// Find index of object
var index = oldCam.map(function(d) { return d['id']; }).indexOf(4)    
console.log(index)
console.log('--------------------------------------------------')

// Find subset of object
var checkSubset = !newCam.some((e) =>{
    var index = oldCam.map(function(d) { return d['id']; }).indexOf(e.id)   
    return index === -1
})

console.log(checkSubset)