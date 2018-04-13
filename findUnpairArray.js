var arr = [9,9,9,9,9,9]

var result =[]
for (var i=0; i<arr.length; i++){
    var check = result.filter((e)=>{
        return e === arr[i]
    })
    if(check.length === 0){
        result.push(arr[i])
    } else {
        result = result.filter((e) =>{
            return e !== arr[i]
        })
    }
}

console.log(result)