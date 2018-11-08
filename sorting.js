
// Bubble Sort
// Performance : O(n^2)
var sorting = (arry) => {
    for (var j = arry.length; j > 0; j--) {
        for (var i = 0; i < j; i++) {
            if (arry[i] > arry[i + 1]) {
                var temp = arry[i]
                arry[i] = arry[i + 1]
                arry[i + 1] = temp
            }
        }
    }
    return arry
}

// Bubble Sort with Recursive technique 
// Performance : O(logN)
var sortingRecursive = (arry, j, i) => {
    if (j == 1) {
        console.timeEnd("Bubble Sort with Recursive")
        process.exit(0)
    }

    if ((j - 1) > i) {
        if (arry[i] > arry[i + 1]) {
            var temp = arry[i]
            arry[i] = arry[i + 1]
            arry[i + 1] = temp
            sortingRecursive(arry, j, i + 1)
        } else {
            sortingRecursive(arry, j, i + 1)
        }
    } else {
        sortingRecursive(arry, j - 1, 0)
    }
}

var printArray = (arry) => {
    var result = ''
    arry.forEach(element => {
        result = result + element
    })
    console.log(result)
}

var runBubbleSort = () => {
    // Test Data
    var testArry = [4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9,
        8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8,
        8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8]

    console.time("Bubble Sort")
    sorting(testArry)
    console.timeEnd("Bubble Sort")
}

var runBubbleSortWithRecursive = () => {
    // Test Data
    var testArry2 = [4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9,
        8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8,
        8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 6, 8, 7, 6, 4, 9, 8, 6, 5, 4, 4, 6, 8]

    console.time("Bubble Sort with Recursive")
    sortingRecursive(testArry2, testArry2.length, 0)
}

runBubbleSort()
runBubbleSortWithRecursive()