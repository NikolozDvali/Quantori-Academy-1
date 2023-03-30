// ----==== JS School - Lecture 4 HW ====---- 

/**
 * Ð¡riteria for assessment
 * 
 * 5 - All tasks are correctly solved (23 items), the code is clean, the solutions are optimal;
 * 4 - Correctly solved all the tasks of the base block (15 tasks), the code is clean;
 * 3 - At least 10 problems are correctly solved, the code is clean;
 * 2 - Correctly solved at least 10 problems;
 * 1 - At least 5 problems solved correctly.
 */

/**
 * Warning
 * 
 * Do not rename function names or change arguments.
 */

// ----==== Basic exercises (15 items) ====---- 
/**
  * Exercise 1
  *
  * Write a function that returns odd array values.
  * [1,2,3,4] => [1,3]
  */
const getOddValues = numbers => {
    for(let i = numbers.length-1; i>=0; i--){
        if(numbers[i]%2==1){
            numbers.splice(i, 1);
        }
    }
    return numbers;
};
//console.log(getOddValues([1,2,3,4]));

/**
  * Exercise 2
  *
  * Write a function that returns the smallest value of an array
  * [4,2,10,27] => 2
  */
const getSmallestValue = numbers => {
    let min = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]<min){
            min = numbers[i];
        }
    }
    return min;
};
//console.log(getSmallestValue([4,2,10,27]));
/**
  * Exercise 3
  *
  * Write a function that returns the biggest value of an array
  * [5,22,9,43] => 43
  */
const getBiggestValue = numbers => {
    let max = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i];
        }
    }
    return max;
};
//console.log(getBiggestValue([5,22,9,43]));
/**
  * Exercise 4
  *
  * Write a function that takes an array of strings as input
  * and returns only those shorter than 20 characters
  *
  *[
  * 'I am a short string',
  * 'I seem to be short too',
  * 'And I am a long string'
  *] => [
  * 'I am a short string',
  * 'And I am a long string'
  *]
  *
  * Use: filter
  */
const getShorterStrings = (strings, characters = 20) => {
    return strings.filter(string => string.length<characters);
};
// console.log(getShorterStrings([
//     'I am a short string',
//     'I seem to be short too',
//     'And I am a long string'
//     ]))
/**
  * Exercise 5
  *
  * Write a function that takes the following data as input:
  *
  *[
  * { name: 'shark', likes: 'ocean' },
  * { name: 'turtle', likes: 'pond' },
  * { name: 'otter', likes: 'fish biscuits' }
  *]
  *
  * And returns an array of strings:
  *
  * [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
  *
  * Use: map
  */
const getComputedStrings = fish => {
    let result = fish.map(obj => {
        return obj.name + " likes " + obj.likes;
    })
    return result;
};
// console.log(getComputedStrings([
//      { name: 'shark', likes: 'ocean' },
//      { name: 'turtle', likes: 'pond' },
//      { name: 'otter', likes: 'fish biscuits' }
//     ]))
/**
  * Exercise 6
  *
  * Write a function that takes 2 objects as input and returns 1 with  
  * common properties. If properties have the same keys use the latter.
  *
  * [{ name: 'Alice' }, { age: 11 }] => { name: 'Alice', age: 11 }
  *
  * We use: ...
  */
const mergeObjects = objects => {
    let result = { ...objects[0]};
    for (const [key, value] of Object.entries(objects[1])) {
        result[key]= value;
    }
  return result;
};
//console.log(mergeObjects([{ name: 'Alice' }, { age: 11 }]));
/**
  * Exercise 7
  *
  * Write a function that returns the smallest value of an array
  * [5,200,-5,41] => -5
  *
  * Use: operator ... and Math.min
  */
const getSmallestValue2 = numbers => {
    return Math.min(...numbers);
};
//console.log(getSmallestValue2([5,200,-5,41]));
/**
  * Exercise 8
  *
  * Write a function that returns odd array values.
  * [77,2,30,51] => [77,51]
  *
  * Use: reduce
  */
const getOddValues2 = numbers => {
    return numbers.reduce((result, currentValue) => {
        if (currentValue % 2 !== 0) {
          result.push(currentValue);
        }
        return result;
      }, []);
};
//console.log(getOddValues2([77,2,30,51]))
/**
  * Exercise 9
  *
  * Write a function that accepts data from the basket as input in the following form:
  *
  *[
  * {price: 10, count: 2},
  * {price: 100, count: 1},
  * {price: 2, count: 5},
  * {price: 15, count: 6},
  *]
  * where price is the price of the item and count is the quantity.
  *
  * The function should return the total price for this order.
  *
  * Use: reduce
  */
const calculateTotal = products => {
    return products.reduce((total, product) => {
        return total + product.price * product.count;
      }, 0);
};
// console.log(calculateTotal([
//      {price: 10, count: 2},
//      {price: 100, count: 1},
//      {price: 2, count: 5},
//      {price: 15, count: 6},
//     ]));
/**
  * Exercise 10
  *
  * Implement a function that has an array of numbers as input and an array of unique values as output
  * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
  *
  * Use: reduce and indexOf
  */
const getUniqueValues = numbers => {
    return numbers.reduce((result, currentValue) => {
        if(result.indexOf(currentValue)==-1){
            result.push(currentValue);
        }
        return result;
    }, []);
};
//console.log(getUniqueValues([1, 2, 2, 4, 5, 5]));
/**
  * Exercise 11
  *
  * Implement a function whose input is a numeric code of an error, the output is a string with a message
  * 500 => Server Error
  * 401 => Authorization failed
  * 402 => Server Error
  * 403 => Access denied
  * 404 => Not found
  *
  * Use: switch case or object like a map structure
  */
const getErrorMessage = code => {
    switch(code){
        case 500:
            return "Server Error";
        case 401:
            return "Authorization failed";
        case 402:
            return "Server Error";
        case 403: 
            return "Access denied";
        case 404:
            return "Not found";
    }
};
//console.log(getErrorMessage(500));
/**
  * Exercise 12
  *
  * Write a function that returns the 2 smallest values of an array
  * [4,3,2,1] => [1,2]
  *
  * Use: .sort()
  */
const get2SmallestValues = numbers => {
    numbers = numbers.sort();
    let result = [];
    result.push(numbers[0]);
    result.push(numbers[1]);
    return result;
};
//console.log(get2SmallestValues([4,3,2,1]));
/**
  * Exercise 13
  *
  * Implement a function, at the input of which an object of the following form:
  * {
  * firstName: 'Peter',
  * secondName: 'Vasiliev',
  * patronymic: 'Ivanovich'
  *}
  * output line with the message 'Name: Petr Ivanovich Vasiliev'
  */
const getFullName = user => {
    return user.firstName + " " + user.patronymic + " " + user.secondName;
};
// console.log(getFullName({
//     firstName: 'Peter',
//     secondName: 'Vasiliev',
//     patronymic: 'Ivanovich'
//     }));
/**
  * Exercise 14
  *
  * Implement a function that takes 2 arguments as input: an array of numbers and a multiplier,
  * a returns an array of the original array, each element of which has been multiplied by a factor:
  *
  * [1,2,3,4], 5 => [5,10,15,20]
  *
  * Use: map
  */
const multiplyTo = (numbers, multiplier) => {
    return numbers.map(elem => {
        return elem*multiplier;
    })
};
// console.log(multiplyTo([1,2,3,4], 5));
/**
  * Exercise 15
  *
  * Implement a function that takes 2 arguments as input: an array and a franchise,
  * and returns a string with the names of the heroes separated by a comma:
  *
  *[
  * {name: "Batman", franchise: "DC"},
  * {name: "Ironman", franchise: "Marvel"},
  * {name: "Thor", franchise: "Marvel"},
  * {name: â€œSupermanâ€, franchise: â€œDCâ€}
  *],
  * Marvel
  * => Ironman, Thor
  *
  * Use: filter, map, join
  */
const getCharacterNames = (characters, franchise) => {
    return characters.filter(hero => hero.franchise === franchise).map(hero => hero.name).join(", ");
};
// console.log(getCharacterNames([
//      {name: "Batman", franchise: "DC"},
//      {name: "Ironman", franchise: "Marvel"},
//      {name: "Thor", franchise: "Marvel"},
//      {name: "Superman", franchise: "DC"}
//     ],
//      "Marvel"))

// ----==== Advanced exercises (8 items) ====----
/**
  * Exercise 16
  *
  * Write a function that returns an array of the smallest row values of a two-dimensional array
  *[
  * [10,1,300,4],
  * [20,2,300,400],
  * [30,3,300,4],
  * [40,4,300,4],
  *]
  * => [1,2,3,4]
  */
const getSmallestRow = numbers => {
    let result = [];
    for(let i = 0; i<numbers.length; i++){
        let min = numbers[i][0];
        for(let j = 0; j<numbers[i].length; j++){
            if(numbers[i][j]<min){
                min = numbers[i][j];
            }
        }
        result.push(min);
    }
    return result;
};
// console.log(getSmallestRow([
//      [10,1,300,4],
//      [20,2,300,400],
//      [30,3,300,4],
//      [40,4,300,4],
//     ]))
  /**
  * Exercise 17
  *
  * Write a function that returns an array of the smallest column values of a two-dimensional array
  *[
  * [1,2,3,4],
  * [1,2,3,4],
  * [1,2,30,4],
  * [1,2,3,40],
  *]
  * => [1,2,3,4]
  */
const getSmallestColumn = numbers => {
    let result = [];
    for(let i = 0; i<numbers.length; i++){
        let min = numbers[0][i];
        for(let j = 0; j<numbers[i].length; j++){
            if(numbers[j][i]<min){
                min = numbers[j][i];
            }
        }
        result.push(min);
    }
    return result;
};
// console.log(getSmallestColumn([
//      [1,2,3,4],
//      [1,2,3,4],
//      [1,2,30,4],
//      [1,2,3,40],
//     ]))
/**
  * Exercise 18
  *
  * Write a function that returns the 2 biggest value of an array
  * [4,3,2,1] => [4,3]
  */
const get2BiggestValues = numbers => {
    numbers = numbers.sort();
    let res = [];
    res.push(numbers[numbers.length-1]);
    res.push(numbers[numbers.length-2]);
    return res;
};
// console.log(get2BiggestValues([4,3,2,1]));
/**
  * Exercise 19
  *
  * Write a function that returns the number of vowels in a string in English
  * ( a, e, i, o, u ).
  *
  * 'Return the number (count) of vowels in the given string.' => 15
  */
const getNumberOfVowels = string => {
    let counter = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(let i = 0; i<string.length; i++){
        if(vowels.includes(string.charAt(i))){
            counter++;
        }
    }
    return counter;
};
// console.log(getNumberOfVowels('Return the number (count) of vowels in the given string.'))
/**
  * Exercise 20
  *
  * Write a function that returns an array of two strings where the first element
  * is the original string with uppercase even letters, and the second
  * with capital odd.
  * 'abcdef' => ['AbCdEf', 'aBcDeF']
  */
const getCapitalizedStrings = string => {
    let res = [];
    let first = string;
    let second = string;
    for(let i = 0; i<string.length; i++){
        if(i%2==0){
            first =  first.substring(0, i) + string.charAt(i).toUpperCase() + first.substring(i+1);
        }else{
            second =  second.substring(0, i) + string.charAt(i).toUpperCase() + second.substring(i+1);
        }
    }
    res.push(first);
    res.push(second);
    return res;
};
// console.log(getCapitalizedStrings("gamarjoba"));
/**
  * Exercise 21
  *
  * Write a function that satisfies the following conditions:
  *
  * the function takes a string S, consisting of N letters of the English alphabet in lowercase [a-z]
  * the function returns a string that does not contain three identical letters in a row
  * the function removes the minimum number of letters from the string S
  *
  * Examples:
  * S = "eedaaad", the function returns "eedaad". One "a" has been removed.
  * S = "xxxtxxx", the function returns "xxtxx". The same letters can occur more than three times in a string, but not in a row.
  * S = "uuuuxaaaaxuuu", the function returns "uuxaaxuu".
  *
  * Assumptions:
  * N is an integer in the range [1..200,000]
  * S consists only of lowercase letters [a-z]
  */
function doesNotContainThreeSame(str){
    for(let i = 0; i<str.length-2; i++){
        if(str.charAt(i)==str.charAt(i+1)&&str.charAt(i)==str.charAt(i+2)){
            return false;
        }
    }
    return true;
}

const getCorrectString = string => {
    while(true){
        if(doesNotContainThreeSame(string)) break;
        for(let i = 0; i<string.length-2; i++){
            if(string.charAt(i)==string.charAt(i+1)&&string.charAt(i)==string.charAt(i+2)){
                string = string.substring(0, i)+string.substring(i+1);
            }
        }
    }
    return string;
};
// console.log(getCorrectString("eedaaad"));
// console.log(getCorrectString("xxxtxxx"));
// console.log(getCorrectString("uuuuxaaaaxuuu"));
/**
 * Exercise 22
 *
 * Implement a flatten function that takes an array of arbitrary nesting arrays as input
 * and returns an array of all their elements without nesting.
 * [1, 2, [3, 4], 5, [[6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
function doesNotContainArray(arr){
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            return false;
        }
    }
    return true;
}

function getArrayIndex(arr){
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            return i;
        }
    }
}

const getFlattenedArray = numbers => {
    if(doesNotContainArray(numbers)){
        return numbers;
    }
    let arrayIndex = getArrayIndex(numbers);
    return numbers.slice(0, arrayIndex).concat(getFlattenedArray(numbers[arrayIndex])).concat(getFlattenedArray(numbers.slice(arrayIndex+1)));
};
// console.log(getFlattenedArray([1, 2, [3, 4], 5, [[6, [7]], 8], 9]));
  /**
  * Exercise 23
  *
  * Implement a function that has an array of numbers as input and an array of not unique values as output.
  * 
  * [1, 2, 2, 4, 5, 5] => [2, 5]
  */
const getNotUniqueValues = numbers => {
    let set = new Set();
    let result = [];
    for(let i = 0; i<numbers.length; i++){
        if(set.has(numbers[i])){
            result.push(numbers[i]);
        }
        set.add(numbers[i]);
    }
    return result;
};
// console.log(getNotUniqueValues([1, 2, 2, 4, 5, 5]));