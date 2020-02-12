/*Convert from Celsius to Fahrenheit: algorithm = the temperature in Celsius times 9/5, plus 32*/
function convertToF(celsius) {
    let fahrenheit = celsius*(9/5)+32
    return fahrenheit
  }
  console.log(convertToF(0))

/*Reverse a String:  Step1: convert string into an array
                     Step2: split() method splits a String object into an array of strings by separating the string into sub strings.
                     Step3: reverse() method reverses an array in place, first array element becomes the last and the last becomes the first.
                     Step4: join() method joins all elements of an array into a string.
                     Step5: return variables 
*/
function reverseString(str) {
   
  let stringSplit = str.split('') //returns an array of substrings ['B', 'r', 'a', 'd'].  stringSplit = Brad.split('')
  let stringReverse = stringSplit.reverse() //reverses stringSplit in place ['d', 'a', 'r', 'B']
  let joinString = stringReverse.join('') // joinString = ['d', 'a', 'r', 'B'].join('')

  return  joinString 
}
console.log(reverseString("Brad"))

/*Reverse a String: Succinct Solution */

function ReverseString(str){
  return str.split('').reverse().join('')
}
console.log(ReverseString('You Are The Best!'))

/*Factorialize a Number*/
function factorialize(num) {
  let arr = []
  let product =1
  for(let i =0; i<num; i++){
    arr.push(num-i)  //put numbers into an array
    product = product * arr[i] //running total of multiplication 
  }
  return product
}
console.log(factorialize(5))

/*Return the length of the longest word in the provided sentence.
Go through each word and figure out which one is the longest and return not the word, but how many characters it has.
*/
function findLongestWordLength(str) {
  let length = str.split(' ').length //str.split(' ') creates an array with with each word separated by comma. ('') and (' ') returns different results
  let wordLength = 0 //keeping track of length of each work 
  for (let i =0; i<length; i++){ //looping thru each word
    if (wordLength < str.split(' ')[i].length) //compares the length of wordLength and word in sentence at current position i
     {wordLength = str.split(' ')[i].length}  //if wordLength is smaller than current word, wordLength is replaced with larger number    
    }  
    return wordLength //return length of largest word 
  }    
console.log(findLongestWordLength("I am feeling so much more comfortable with JavaScript...yaay!...woohoo!"))

/* Return Largest Numbers in Arrays

  create an array to store results
  create outer loop to iterate thru outer array 
  create a bignum variable to hold largest number for each array and set to 1st element in 1st subarray. Keep outside inner loop so wont be reasigned until larger # found. 
  create an inner loop to iterate over elements in subarrys
  compare elements within subarrays are larger than currently stored largest number. if so, bignum variable
  after inner loop, save largest number in corresponding positions inside results array. 
  return results array
 */
function largestOfFour(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var largeNumber = arr[i][0];
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largeNumber) {
        largeNumber = arr[i][j]
      }
    }
    results[i] = largeNumber
  }
  return results
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

/* Check if a string (first argument, str) ends with the given target string (second argument, target).

The slice() method returns the selected elements in an array, as a new array object. 
1st parameter is the starting index, 2nd parameter is the ending index but does not include, the given end argument. 
Excluding a parameter will copy everything from the starting index, ie  str.slice()
Substracting the length of str and the length of target equals the last remaining characters equivalent to the target's length.
Meaning if the target argument has 3 letters, slice will return the last 3 letters of the str argument

=== checks to see if the last letter(s) in str match last letter(s) in target
 */

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
  
}
console.log(confirmEnding("As the world turns into dust", "dust"))


