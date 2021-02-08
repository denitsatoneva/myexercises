console.log('hello');

// 1. numbers 1-10
for (let i = 0; i <= 10; i++) {
    console.log(i)
  }

// 2. odd numbers less than 100
for (let i=0; i<100; i++) {
    if(i % 2 !== 0) {
      console.log(i);
    }
  }

// 3. multiplication table with 7
for(let i = 1; i <= 10; i++) {
    const result = i * 7;
    console.log(`7 * ${i} = ${result}`);
}

// 4. all the multiplication tables with numbers form 1 to 10
for(let i = 1; i <= 10; i++) {
    for(let j = 1; j<=10; j++){
    const result = i * j;
    console.log(`${j} * ${i} = ${result}`);
    }
}  

// 5. sum of num from 1 to 10
let sum=0;
for(let i = 1; i <= 10; i++) {
    sum+=i;
    }
console.log(sum);

// 6. calculate 10!
let calc = 1;
for(let i = 1; i <= 10; i++)
{
    calc *= i;
}
console.log('10!= ',calc);

// 7. sum of even num greater than 10 and less than 30
for (let i=10; i<30; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }

// 8. function - from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) 
{
  return celsius * 1.8 + 32;
}
console.log('from Celsius to Fahrenheit: ', celsiusToFahrenheit(25));

// 9. function - from  Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) 
{
    return (fahrenheit - 32) / 1.8;
}
console.log( 'from Fahrenheit to Celsius: ', fahrenheitToCelsius(77));

// 10. sum of numbers in an array of numbers
let array = [1, 2, 4, 10];
let sumNums = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})
console.log('Sum of numbers in array:',sumNums);

// 11. average of numbers in an array of numbers
const array1 = [1, 2, 4, 10];
const sumOfNums = array1.reduce((accumulator, currentValue) => {
  return (accumulator + currentValue);
})
console.log('Average:',sumNums/array1.length);

// 12. function, that receives an array of num as argument and returns an array containing only the positive num
let ar = [-2, 3, 5, -9, -10, 4, 8];
function positiveNum(ar)
{
    let ar2 = [];
    for(let i = 0; i < ar.length; i++)
    {
        if (ar[i] >= 0)
        {
            ar2.push(ar[i]);
        }
    }
    return ar2;
}
let ar2 = positiveNum(ar);
console.log('positive numbers: ', ar2);

// 13. find the max num in array of num
const arr = [1, 13, -5, 9, 4, -3];
const max = Math.max(...arr);
console.log(max);

// 14. first 10 Fibonachi num without recursion
let n1=0, n2=1, n3, i, count=10;    
console.log(n1); 
console.log(n2);  
for(i=2; i<count; i++)
 {    
  n3=n1+n2;    
  console.log(n3);    
  n1=n2;    
  n2=n3;    
 }    

// 15. function, that wiil find the nth Fibonachi num using recursion

// 16. function, that will return a boolean specifying if a number is prime
function isPrime(num){
  let isPrime;
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      isPrime = false;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
}
console.log(isPrime(11));
console.log(isPrime(20));

// 17. calculate the sum of digits of a positive integer number
let value = 721, sumOfDigits = 0;
while (value) {
    sumOfDigits += value % 10;
    value = Math.floor(value / 10);
}
console.log(sumOfDigits);

// 18. first 100 prime numbers
function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
      if(num % i === 0){ 
        return false; }
  }
  return true;
}
const primeNum = [];
let z = 0;
while(primeNum.length < 100){
  if(isPrimeNumber(z)) { 
    primeNum.push(z); 
  }
  z++;
}
console.log(primeNum);


// 19. function that will return in array the first "p" prime numbers greater than "n"
/*function isPrimeNumber2(num) {
  for (let i = 2; i < num; i++) {
      if(num % i === 0){ return false; }
  }
  return true;
}
const primeNum2 = [];
let x, n=300;
for(x=0; x>n && primeNum2.length < 100 ; x++){
  if(isPrimeNumber2(x)) { primeNum2.push(x); }
}
console.log(primeNum2);*/
 
// 20. rotate an array to the left 1 position
console.log('original array: [1,2,3,4,5]')
let arr3 = [1,2,3,4,5];
let rotateLeft = function(num) {
  num.push(num.shift());
  return num;
}
console.log('rotated 1 pos. to the left: ',rotateLeft(arr3));

// 21. rotate an array to the right 1 position
let arr2 = [1,2,3,4,5];
let rotateRight = function(nums) {
  nums.unshift(nums.pop());
  return nums;
}
console.log('rotated 1 pos. to the right: ',rotateRight(arr2));

// 22. reverse an array
const fruits = ['apple', 'kiwi', 'banana'];
console.log('array1:', fruits);
const reversed = fruits.reverse();
console.log('reversed:', reversed);

// 23. reverse a string
let string = 'hello';
for (let i = string.length; i>=0; i--){
  console.log(string[i]);
}

// 24. function that will merge two arrays and return the result as a new 
const lowercase = ['a', 'b', 'c'];
const uppercase = ['A', 'B', 'C'];
function unite() {
  united = lowercase.concat(uppercase);
}
unite();
console.log(united);

// 25. function that will receive two arrays of numbers as arguments and return an array composed of 
//     all the numbers that are either in the first array or second but not in both
/*const a =  [1, 8,'yes', 2, 5,'no', 6];
const b = [ 4,'no', 2, 6, 7]; 
let n = a.length; 
let m = b.length; 
for (let i = 0; i < n; i++) { 
  let j;
  for (j = 0; j < m; j++){
    if (a[i] === b[j]) 
    break; 
  }
console.log(a[i] + " "); 
} */
// 26. function that will receive two arrays and will return an array with elements that are in
//     the first array but not in the second
const a =  [1, 8,'yes', 2, 5,'no', 6];
const b = [ 4,'no', 2, 6, 7]; 
for (let i = 0; i < a.length; i++) { 
  let j;
  for (j = 0; j < b.length; j++){
    if (a[i] === b[j]) 
    break; 
  }
if (j === b.length) 
console.log(a[i] + " "); 
} 

// 28. calculate the sum of first 100 prime numbers and return them in an array
/* function isPrimeNumber(num) {
  
   if(num < 2) { return false; }
   for (let i = 2; i < num; i++) {
       if(num % i === 0){ return false; }
   }
   return true;
 }
 const primeNum = [];
 let x;
 for(x=0; primeNum.length < 100; x++){
   if(isPrimeNumber(x)) { primeNum.push(x); 
 }
 }
console.log(primeNum);
const sumPr = primeNum.reduce((acc, curVal) => {
  return (acc + curVal);
})
console.log('Sum of first 100 prime numbers:' + sumPr); */

// 29. print the distance between the first 100 prime numbers
function isPrime(num){
  let isPrime;
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }      
  }
  return true;
}
function distance(n)
{
  let lastPrime = 2;
  let i = lastPrime + 1;
  let foundPrimes = 1;
  while(foundPrimes < n){
    if (isPrime(i))
    {
      console.log(i, ' - ', lastPrime,' = ', i - lastPrime);
      foundPrimes++;
      lastPrime = i;
    }
    i++;
  }
}
distance(100);

// 30. function that will add two positive num of indefinite size. The num are received as strings and the
//     result should be also provided as string

//31. function that will return the number of words in a text
function countWords(str) {
  return str.split(' ').length;
}
console.log('Number of words: ', countWords('Bulgaria is an incredible country with very beautiful nature.'));
   // 2ri variant:
/*function wordCount(str) {
  let foundSpace = 0;
  for (let i = 0; i < wordCount.length; i++)
    if (str[i] === ' ') { 
      foundSpace++; 
    }
  foundSpace++; 
}
console.log(wordCount('Random words tralala ohh yes' )); */

//32. function that will capitalise, the first letter of each word in a text
function titleCase(str) {
  let splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}
console.log(titleCase('i am monika mihailova toneva'));

//33. calculate the sum of numbers received in a comma delimited string. 
function convert(str)
{
    let str_arr = str.split(',');
    let sum=0;
    for (let i = 0; i > str_arr.length; i++)
    {
        sum += str_arr[i];
    }
return sum;
}
console.log(convert('5,6,5,4'));

//34. function that returns an array with words inside a text 
function getWords(text) {
  if (text.length > 0){
    return text.split(' ');
  } else return []
}
let wordsArray = getWords('put this words in an array');
console.log(wordsArray);

//35. function to convert a CSV text to a bi- dimensional array. 
//    Comma-separated values

//36. function that converts a string to an array of characters
function stringToCharacters(str3){
  return str3.split('');
}
console.log(stringToCharacters('word'));

//37. function that will convert a string in an array containing the ASCII code of each character 
/*function stringToASCII(str4){
  for(let i=0;i<str4.length; i++){
    return String.fromCharCode(str4[i]);
  }
}
console.log('string to ASCII: ', stringToASCII('monika')); */

//38. function that will convert an array containing ASCII codes in string
/*function asciToStirng(str5){
  return str5.fromCharCode(109, 111, 110, 105, 107, 97 )
} 
console.log(str5) // '@' */
// var asciiKeys = [109, 111, 110, 105, 107, 97];
// let str = new TextDecoder().decode(Uint8Array.from(asciiKeys));
// console.log('ASCII to string: ', str);

//39. implement the Caesar cypher
//40. implement the bubble sort algorithm for an array of numbers

//41. function to calculate the distance between two points defined by their x,y  coordinates
function calculateDistanceBetweenPoints(x1, y1, x2, y2) {       
    return Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
}
let results = calculateDistanceBetweenPoints(3,4,7,1);
console.log('Distance between A and B:',results);

//42. function that will return a boolean value, indicating if two circles defined by center coordinates and redius are intersecting 
function circle(x1, y1, x2, y2, r1, r2) 
  { 
    let distSq = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2); 
    let radSumSq = (r1 + r2) * (r1 + r2); 
      if (distSq === radSumSq) 
        return 1; 
      else if (distSq > radSumSq) 
        return -1; 
      else
        return 0; 
  }
let t = circle(-10, 8, 14, -24, 30, 10); 
if (t === 1) 
console.log(t, "->Circles touch each other."); 
else if (t < 0) 
console.log(t, "->Circles do not touch each other." ); 
else
console.log(t, "->Circles intersect with each other."); 


//43. function that will receive a bi - dimensional array as argument and a number, and we will extract as a undimensional array
//    the column specified by the number
/*function myFunction(array,num) {
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      if(j===num)
      return array[i][j];
    }
  }
}
console.log(myFunction([[1,2],[3,4],[5,6]],1));*/

//44. function that will convert a string, containing a binary number into a number
function binaryToDecimal(num){
  var digit = parseInt(num, 2);
  return digit;
}
console.log('binary to decimal',binaryToDecimal('10001'));

//45. function to calculate the sum of all numbers in jagged array (contains numbers or other arrays of numbers on an unlimited
//    number of levels)
function sumOfJaggedArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
          sum += array[i][j];
      } 
  }
return sum;
}
console.log(sumOfJaggedArray([[1,2,3],[4],[5,6]]))

//46. find the maximum number in a jagged array of numbers or array of numbers
/*function maxNum(array){
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      return Math.max(array[i][j]);}
  }
}
console.log(maxNum([[1,2,3],[4],[5,6]]));*/

//47. Deep copy a jagged array with numbers or other arrays in a new array
let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray)); 
console.log(arrayCopy); 


//48. function to return the longest word in a string
function longestWord(string) {
  let str = string.split(' ');
  let longest = 0;
  let word = '';
  for (let i = 0; i < str.length; i++) {
      if (longest < str[i].length) {
          longest = str[i].length;
          word = str[i];
      }
  }
  return word;
}
console.log('longest word: ',longestWord('The weather today is synny. I like it!'));

//49. shuffle an array of strings
function shuffle(array) {
  let currentIndex = array.length, temp, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
console.log(shuffle(['yes','no','maybe','hi','bye']))

//50. function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique
//    inside the array
function randomNumbers(n){
  let arr = [1];
  while(arr.length < n){
      let r = Math.floor(Math.random() * n) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
return arr;
}
console.log(randomNumbers(10));

//51. Find the frequency of letters inside a string. return the result as an array of arrays. each subarray has two elements:
//    letter and number of occurrences .



//52. to calculate Fibonacci (500) with height precision (all digits) 

//53. Calculate 70! with high precision (all digits)
let calculate = 1;
for(let i = 1; i <= 70; i++)
{
    calc *= i;
}
console.log('70!= ',calculate);
