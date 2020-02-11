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


