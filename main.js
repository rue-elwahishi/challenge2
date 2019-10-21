// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, key) {
    if (predicate(element, key)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: I think we should make an array of objects first called computer and insert keys and values inside that contain the paramater in the function ofcourse
and I could call that computer name by inputing its type, color, weight. PS: (forgot about factory functions).
*/

 var computers = [
 { name : "ASUS", type : "4th generation", graphicsCard : 960, color : black, weight : "30km"}
 { name2:  "Sony", type : "1234w4", processor : "COREi7", color: "black", weight : "15km" }
 ]; 


function makeComputer(type, color, weight) {


  

  // TODO: Your code here
}

// Write a function displayComputer that can be used to display one computer.
// here its easy we just write return statement mentiong the keys which will be by refrencing by dot notation and make a sentence basically.

function displayComputer(computer) {
  return "this computer is" + " " + computers.name + "its type" + " " + computers.type + " " + "and color" + " " + computers.color;
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: we need to loop through every index and transform small letters strings to capital letters using toUpperCase.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/


var strArr = ['hello', 'world', 'whirled', 'peas'];


function uppercaseAll(arrayOfStrings) {
  var arr = [];
  each(arrayOfStrings, function(element){
    arr.push(toUpperCase(element));

  })

  return arr;
  // TODO: your code here
}  //.toUpperCase returns touppercase undefined when its built in function????? I don't understand why.

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {
  var newArr = [];
  return filter(arrayOfObjects, function(element, key){
 
    return element > 500000000   });
  return newArr;
  // TODO: your code here
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note:  first we need to declare newArr we're going to use filter or map to return numbers halved by two
*/


 function halveAll(numbers) {
  var arr = [];
  return map(numbers, function(element, i){
    return arr.push(element[i] / 2);

  

  })
  return arr
}
  //

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: we need to declate new arr, loop throught the objects keys, takes values and push them into array.
*/
function values(obj) {
  // TODO: your code here
}

//Good Luck :))
