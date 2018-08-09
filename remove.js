// id want to remove
REMOVE = [1,2,3,4,5,6]

// Objects
obj = [{
    id : 1
},{
    id : 5
},{
    id : 10
},{
    id : 18
}]

// remove element that contain id in REMOVE array
var newArry2 = obj.filter((e,i) => {
    return !REMOVE.includes(e.id) 
})


console.log(newArry2)