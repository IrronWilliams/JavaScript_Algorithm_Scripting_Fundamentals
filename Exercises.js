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
Excluding a parameter will copy everything from the starting index, ie  str.slice().

Substracting the length of str and the length of target equals the last remaining characters equivalent to the target's length.
Meaning if the target argument has 3 letters, slice will return the last 3 letters of the str argument

=== checks to see if the last letter(s) in str match last letter(s) in target

*/

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
  
}
console.log(confirmEnding("As the world turns into dust", "dust"))

//Can also use endsWith() method
function confirmEnding2(str, target) {
  return str.endsWith(target)
}
console.log(confirmEnding2("As the world turns into dust", "dustZ"))

/*
Repeat a variable into one single string based upon a certain amount of times. 

Create an empty string variable to store the accumulated variable 
Use a loop to repeat the code as many times needed based upon num
Add the string to the accumulated variable

*/
function repeatStringNumTimes(str, num) {
  let repeatStr = ''
  for(let i=0; i<num; i++){
    repeatStr += str
  }
  return repeatStr
}
console.log(repeatStringNumTimes("abc", 3))

//can also use repeat() method
console.log('abc'.repeat(3))

/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

Strings are immutable in JavaScript so will need a new variable to store the truncated string.
Can use the slice() method to return new variable, specify where to start and where to stop (can use num for stop argument)
Create an if statement that checks whether str length is greater than num. If so, use slice method to truncate str,
starting at position 0 and ending with position num. Also need to append '...' to end of string. 
Else statement returns str value if str length is less than num
*/
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0,num) +'...'
  } else return str    
}
console.log(truncateString("Hello..is it me your looking for?", 8))

/*Using modulus to check remainder*/
function findElement(arr) {
  let num = arr
  for(let i=0; i<arr.length; i++){
    if(num[i] %2 ===0){
      return num[i]
    } else ('undefinded')
  }
}
console.log(findElement([17, 11,3, 141]))

/*
Similar to modulus exercise but creating a function that looks through an array (first argument) and returns the first element in the 
array that passes a truth test (second argument). If no element passes the test, return undefined.

So need to return the element from an array that passes a function. Both the function and the array are passed into function 
findElement(arr, func). Looking through the array can be done with a for loop.

num is passed to the function. Will need to set it to the elements want to check with the function; 
so set it to each index in array.

The pre-defined function already checks each number, so if it is “true”, return that num.
If none of the numbers in the array pass the function’s test, return undefined.
*/
function findElement2(arr, func) { 
  let num = 0
  for (var i = 0; i < arr.length; i++) {
    num = arr[i] //num will begin at 1st element in array
    if (func(num)) { //calling func and passing it num. checks each number against condition num % 2 ===0
      return num    //return num if true
    }
  }
  return undefined
}
console.log(findElement2([1, 11,3, 14], num => num % 2 === 0))//array and function defined here and passed as arguments entitled arr and func


/*Check if a value is classified as a boolean primitive. Return true or false.
A JavaScript Boolean represents one of two values: true or false.

Very often, in programming, you will need a data type that can only have one of two values, like

    YES / NO
    ON / OFF
    TRUE / FALSE

You can use the Boolean() function to find out if an expression (or a variable) is true:
Boolean(10 > 9)        // returns true 
*/
function booWho(bool) {
  return typeof bool === 'boolean' //checks if typeof bool is a boolean datatype
}
console.log(booWho([null]))
//booWho(true) returns true, booWho(false) returns true, booWho([1, 2, 3]) returns false. booWho(1) returns false.

/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];

// pass a function to map: function x multiplies each element in the array by 2.  an array with the results are returned
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string 
or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first 
occurrence will be replaced.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

The String object's charAt() method returns the character at the specified index in a string.
var str = "HELLO WORLD";
var res = str.charAt(0); //returns H

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
// expected output: "The character at index 4 is q"
*/
function titleCase(str) {
  let convertToArray = str.toLowerCase().split(" ")  //converts str to all lowercase, then splits elements into an array
  let result = convertToArray.map(function(val) {    //create result variable applies map method where function applies action to each word in array
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase()) //uses charAt method which changes every 1st letter of each word in array to upperCase
  });
  return result.join(" ")  //returning string using .join()method; which removes the array and converts elements to a string
}
console.log(titleCase("I'm a little tea pot"))







/* Summary

charAt()
.join()
split('') = separates string into array 
slice(start, stop) = excl stop position
repeat()
replace('cat', 'dog')
+= (use to accumulate variable)
+ (used to concatenate)
loops 
functions 
endsWith()
reverse()
toupperCase()
tolowerCase()
map(function(){ do something to each element in array   })
push()
length

*/