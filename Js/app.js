// Specific range element using slice

var new_1 = [1 , 2 , 3 , 4 , 5]
var new_2 = new_1.slice(1 , 4)
document.write(`Specific range element using slice = ${new_2} <br><br>`)

// Removing some element from an array

var num_3 = [6 , 7 , 8 , 9 , 10]
var num_4 = num_3.splice(1 , 3)
document.write(`Removing some element from an array using splice = ${num_4} <br><br>`)

// Remove 1st element in an array using using shift

var num_5 = [11 , 12 , 13 , 14 , 15]
var num_6 = num_5.shift()
document.write(`Remove 1st element in an array using using shift = ${num_6} <br><br>`)

// Add element in an array using unshift 

var num_7 = [16 , 17 , 18 , 19 , 20]
var num_8 = num_7.unshift(21)
document.write(`Add element in an array using unshift = ${num_7} <br><br>`)

// Add element in an array using push

var num_9 = [21 , 22 , 23 , 24 , 25]
var num_10 = num_9.push(26)
document.write(`Add element in an array using push = ${num_9} <br><br>`)

// Remove element in an array using pop

var num_11 = [26 , 27 , 28 , 29 , 30]
var num_12 = num_11.pop()
document.write(`Remove element in an array using pop = ${num_12}<br><br>`)

// Orignal array 

var num_13 = [40 , 41 , 42 , 43 , 44 , 45]
document.write(`Orignal array = ${num_13}<br><br>`)

// Store some in new array using slice

var num_14 = num_13.slice(2 , 5)
document.write(`Store some in new array using slice = ${num_14} <br><br>`)

// Remove some element in an array using splice 

var num_15 = [46 , 47 , 48 , 49 , 50]
var num_16 = num_15.splice(2,2)
document.write(`Remove some element in an array using splice = ${num_16}<br><br>`)

// Remove elemets one by one in an array using shift

var num_17 = [51 , 52 , 53 , 54 , 55]
var num_18 = num_17.shift()
document.write(`Remove elemets one by one in an array using shift = ${num_17}<br><br>`)
var num_19 = num_17.shift()
document.write(`Remove elemets one by one in an array using shift = ${num_17}<br><br>`)
var num_20 = num_17.shift()
document.write(`Remove elemets one by one in an array using shift = ${num_17}<br><br>`)
var num_21 = num_17.shift()
document.write(`Remove elemets one by one in an array using shift = ${num_17}<br><br>`)

// Add multiple element together in array using push

var num_22 = [56 , 57 , 58 , 59 , 60]
var num_23 = num_22.push(61 , 62 , 63 , 64 , 65)
document.write(`Add multiple element together in array using push = ${num_22}`)


