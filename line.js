// Q1
// function to make sum between 2 number
var sum = (left, right) => {
  // Create empty array for left and right
  let SIZE = 100000
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

// var left = "1234565934959685741234567890099765466"
// var right = "1234565969596966612345659695969666123456596959696661234565969596966612345659695969666123456596959696661234565969596966612345659695969661"
// var left = "9"
// var right = "8"
// console.log(sum(left, right))

// Declare
var n = 8181
var fn0 = 0
var fn1 = 1
var funcNum = 2
var start = (count, left, right, summary) => {
  left = left.toString()
  right = right.toString()
  summary = (summary ? summary.toString() : "")
  if (count < 0) throw ('n cannot be negative.')
  if (count != 0) {
    summary = sum(left, right)
    console.log(`f(${funcNum}) : ${summary}`)
    left = right
    right = summary
    funcNum++
    // Delay recursive to avoid Maximum call stack size exceeded
    setTimeout(function () {
      start(count - 1, left, right, summary)
    }, 0)
  } else {
    // console.log(summary)
  }
}

console.log(`f(0) : ${fn0}`)
console.log(`f(1) : ${fn1}`)
start(n - 1, fn0, fn1, null)