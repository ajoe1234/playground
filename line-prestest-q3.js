// ==============================================================================
//                                      QUESTION 1 
// Where n is a positive integer, the function f(n) satisfies the following.
//        f(0) = 0
//        f(1) = 1
//        f(n) = f(n-1) + f(n-2)
// 
// (1) Please create a program to find. (You can write in any language that you are good at.)
// (2) What is the result of f(8181).s
// ==============================================================================

// function to make sum between 2 number
// var sum = (left, right) => {
//   // Create empty array for left and right
//   let SIZE = 10000
//   var arr1 = new Array(SIZE)
//   var arr2 = new Array(SIZE)

//   // Convert String to Array
//   var lArr = left.split('')
//   var rArr = right.split('')

//   // Swap array if digit of left less than right 
//   if (lArr.length < rArr.length) {
//     var temp = rArr
//     rArr = lArr
//     lArr = temp
//   }

//   // Initiate digit of left side value to float right on empty array
//   // Parse String to Int by multiple by 1
//   lArr.forEach((e, i) => {
//     arr1[(arr1.length - 1) - (lArr.length - 1) + i] = e * 1
//   })


//   // Initiate digit of right side value to float right on empty array
//   // Parse String to Int by multiple by 1
//   rArr.forEach((e, i) => {
//     arr2[(arr2.length - 1) - (rArr.length - 1) + i] = e * 1
//   })

//   // Start addition
//   var output = []
//   var carry = 0
//   for (var i = arr1.length - 1; i >= 0; i--) {
//     if (arr1[i] || arr1[i] == 0) {
//       var sum = arr1[i] + (arr2[i] ? arr2[i] : 0) + carry

//       // Check is last loop of first input digit or not
//       // Example : 
//       //    [null,null,null,2,4,5,6,7]
//       // - Normally this loop make looping from tail to head like 7,6,5,4,2,... 
//       // - Check is this round working on last digit or not. As 2 of example array
//       if (i == arr1.length - lArr.length) {
//         // add last digit of sum to output array
//         output.push((sum % 10))

//         // adding carry to output array if first digit of sum not equal zero
//         if (Math.floor(sum / 10) != 0) {
//           output.push(Math.floor(sum / 10))
//         }
//       } else {
//         output.push((sum % 10))
//         carry = Math.floor(sum / 10)
//       }
//     }
//   }

//   return output.reverse().join('')
// }

// =======================================
//              Test Value
// =======================================
// var left = "1234565934959685741234567890099765466"
// var right = "1234565969596966612345659695969666123456596959696"
// var left = "9"
// var right = "8"
// console.log(sum(left, right))
// =======================================

// ===========================================================
//                       Q1 : Solution 1
// ===========================================================

// // Declare
// var n = 8181
// var fn0 = 0
// var fn1 = 1
// var funcNum = 2
// var start = (count, left, right, summary) => {
//   left = left.toString()
//   right = right.toString()
//   summary = (summary ? summary.toString() : "")
//   if (count < 0) throw ('n cannot be negative.')
//   if (count != 0) {
//     summary = sum(left, right)
//     console.log(`f(${funcNum}) : ${summary}`)
//     left = right
//     right = summary
//     funcNum++
//     // Delay recursive to avoid Maximum call stack size exceeded
//     setTimeout(function () {
//       start(count - 1, left, right, summary)
//     }, 0)
//   } else {
//     // console.log(summary)
//   }
// }

// console.log(`f(0) : ${fn0}`)
// console.log(`f(1) : ${fn1}`)
// start(n-1,fn0,fn1,null)

// ===========================================================
//                       Q1 : Solution 2
// ===========================================================


/*
// Input
var n = 8181
// Constant of fn0 and fn1 and variable declaration
const fn0 = 0
const fn1 = 1
var current = 2

var calculate = (n, left, right, summary, current) => {
  return new Promise((resolve, reject) => {
    left = left.toString()
    right = right.toString()
    summary = (summary ? summary.toString() : "")
    if (n < 0) reject('n cannot be negative.')

    summary = sum(left, right)
    // See output
    console.log(`f(${current}) : ${summary}`)
    if (current == n) {
      // Finish
      resolve(summary)
    } else {
      left = right
      right = summary
      // Delay recursive to avoid Maximum call stack size exceeded
      setTimeout(function () {
        resolve(calculate(n, left, right, summary, current + 1))
      }, 0)
    }
  })
}

// console.log(`f(0) : ${fn0}`)
// console.log(`f(1) : ${fn1}`)
calculate(n, fn0, fn1, null, current).then((result) => {
  console.log(` >> f(${n}) : ${result}`)
})
*/



// ==============================================================================
//                                      QUESTION 2 
// ==============================================================================


// ==============================================================================
//                                      QUESTION 3
// 
// (1) Imagine you are playing a board game. You roll a 6-faced dice and move 
//     forward the same number of spaces that you rolled. If the finishing
//     point is “n” spaces away from the starting point, please implement 
//     a program that calculates how many possible ways there are to arrive 
//     exactly at the finishing point.
// 
// (2) If n=610, how many possible ways are there to arrive exactly at the 
//     finishing point?
// ==============================================================================

// Solution will be this equation : 2^(n-1) 
//    when n = spaces away from starting point

var MultipleBySum = (left, right) => {
  // Create empty array for left and right
  let SIZE = 10000
  var arr1 = new Array(SIZE)
  var arr2 = new Array(SIZE)

  // Convert String to Array
  var lArr = left.split('')
  var rArr = right.split('')

  // Swap array if digit of left less than right 
  if (lArr.length < rArr.length) {
    var temp = rArr
    rArr = lArr
    lArr = temp
  }

  // Initiate digit of left side value to float right on empty array
  // Parse String to Int by multiple by 1
  lArr.forEach((e, i) => {
    arr1[(arr1.length - 1) - (lArr.length - 1) + i] = e * 1
  })


  // Initiate digit of right side value to float right on empty array
  // Parse String to Int by multiple by 1
  rArr.forEach((e, i) => {
    arr2[(arr2.length - 1) - (rArr.length - 1) + i] = e * 1
  })

  // Start addition
  var output = []
  var carry = 0
  for (var i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] || arr1[i] == 0) {
      var sum = arr1[i] + (arr2[i] ? arr2[i] : 0) + carry

      // Check is last loop of first input digit or not
      // Example : 
      //    [null,null,null,2,4,5,6,7]
      // - Normally this loop make looping from tail to head like 7,6,5,4,2,... 
      // - Check is this round working on last digit or not. As 2 of example array
      if (i == arr1.length - lArr.length) {
        // add last digit of sum to output array
        output.push((sum % 10))

        // adding carry to output array if first digit of sum not equal zero
        if (Math.floor(sum / 10) != 0) {
          output.push(Math.floor(sum / 10))
        }
      } else {
        output.push((sum % 10))
        carry = Math.floor(sum / 10)
      }
    }
  }

  return output.reverse().join('')
}

// User Power Math Operation
var findPossibleWay = (n) => {
  // Declare BASE
  const BASE = 2
  return new Promise((resolve, reject) => {
    if (n < 0) reject('n cannot be negative.')
    if (n == 0 || n == 1) resolve(Math.pow(BASE,n).toString())
    n--
    var keep = new Array(n*2).fill(BASE.toString())
    var output
    while(keep.length>0){
      var res_sum = '0'
      for(var j=0;j<keep[1];j++){
        res_sum = MultipleBySum(res_sum,keep[0])
      }
      keep.shift()
      keep[0] = res_sum
      output = keep[0]
      keep.length--
    }
    resolve(output)
  })
}

// Input spaces away from starting point
var n = 610

// Exponent value of power 
var exponent = n-1
findPossibleWay(exponent).then((result) => {
  console.log(`Possible ways to arrive the finishing point when ${n} spaces away from starting point is ${result}`)
})
