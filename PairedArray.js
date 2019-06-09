var a = [9, 3, 9, 3, 9, 7, 9, 7,5]

var FindUnPairedElement = (A) => {
    var temp = []
    A.forEach((e) => {
        if(!temp.includes(e)) {
            temp.push(e)
        } else {
            // paired, them remove
            temp = temp.filter((num) => num !== e )
        }
    })
    return temp.length > 0 ? temp[0] : 0 
}

console.log(FindUnPairedElement(a))