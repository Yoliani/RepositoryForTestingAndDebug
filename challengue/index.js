// 1. What is the output of the code below?

const emojis = ['😦', '😗', '😜', '😎', '😐'];

for (let i = 0; i < emojis.length; i++) {
  const emojis = ['😦', '😗'];

  console.log(emojis[i]);
}
/**
 * La salida del codigo es 😦,😗, undefined, undefined, undefined, ya que primeramente se usa el tamano del array emoji el cual tiene un tamano de 5 y posteriormente se redefine y su alcance pasa a ser el del bloque del for por lo cual las posiciones siguientes a las definidas son indefinidas

 */

// 2. Explain the result and concepts used in the following code
//hint: context, es6
const test2 = (emojis) => (index) => emojis[index];
const getEmoji = test2(emojis);

console.log(getEmoji(1));

// Al momento de llamar a getEmoji() ya se tiene por defecto el array emojis en test2 por lo cual al pasar el parametro (1) estamos haciendo referencia al index de la arrow function que esta dentro de la arrow function de emojis
// por ejemplo
//
const getEmojiExample = function (emojis) {
  return function (index) {
    return emojis[index];
  };
};
console.log('Example ' + getEmojiExample(emojis)(1));

// 3. Explain the result and concepts used in the following code
const fruits = ['🍇', '🍓', '🍌', '🍏'];

function Fruits() {
  this.fruits = ['🍋', '🍎'];

  return {
    getFruits: () => {
      return fruits;
    },
    getFruitsInFunction: () => {
      return this.fruits;
    },
    getFruitsHere: function () {
      return this.fruits;
    },
  };
}

const fruitsInstance = new Fruits();

console.log('getFruits', fruitsInstance.getFruits());
console.log('getFruitsInFunction', fruitsInstance.getFruitsInFunction());
console.log('getFruitsHere', fruitsInstance.getFruitsHere());
/**
 * La funcion devuelve un objeto, del cual se tienen las funciones getFruits(), getFruitsInFunction(), getFruitsHere()
 * 1. al usar getFruit() no nos devuelve el valor de ['🍋', '🍎'] debido a que esta funcion no usa this por lo cual devuelve la variable previamente definida
 2. al usar getFruitsInFunction() nos devuelve  ['🍋', '🍎'] ya que esta apuntando a la variable definida dentro de la instancia de Fruits
 3. al usar getFruitsHere() nos devuelve undefined debido a que se utiliza la clausula function por lo cual el alcance de la varibable definida en la instancia de Fruits no puede ser usada en dentro de esta, el this.fruits haria referencia a la variable de esa funcion mas no del objeto
 * */

// 4. Write a regular expression that matches all the names starting with 'ju' and finished with 'an' or 'am' with any other letter in the middle.
// e.g
// "jueran here or there ju an" => jueran
// "jueran here or there juan and juam" => jueran, juan, juam
// "ju*ran here or there ju-an" =>

const regexp = /\bju(an|am)?/g;
console.log('juan ads juam jueran'.match(regexp));

// 5. Write a function that filters all the lemons (🍋) in the list below
const filterFruits = ['🍇', '🍓', '🍋', '🍌', '🍏', '🍋', '🍎'];

function lemon(arr, filter) {
  const result = arr.filter((value) => value === filter);
  return result;
}

const result5 = lemon(filterFruits, '🍋');

console.log(result5);

// 6. Write a function that returns true when all the elements in the list are apples (no matter the color)
const fruits1 = ['🍇', '🍓', '🍌', '🍏', '🍋', '🍎'];
const fruits2 = ['🍏', '🍏', '🍎'];

//Debug
//const fruits3 = ['🍏', '🍏', '🍏'];

function apple(arr) {
  const valor = arr.every((value) => value == '🍏');
  return valor;
}

const result6 = apple(fruits2);
console.log(result6);

// 7. Using the lists above, write a function that returns true when at least one of the elements in the list is a banana "🍌"
function banana(arr) {
  const result = arr.includes('🍌');
  return result;
}
const result7 = banana(fruits1);
console.log(result7);

// 8. Using the lists above, write a function that returns a unified list and removes all the repeated elements
function repeatedDelete(arr) {
  let result = [];
  arr.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
}
const result8 = repeatedDelete(fruits2);
console.log(result8);

// 9. Using the fruits1 list provided above, create a new array starting from the first babana match in the list
//const fruits1 = ['🍇', '🍓', '🍌', '🍏', '🍋', '🍎'];
function createArrayBananaFirst(arr) {
  let result = [];
  if (arr.includes('🍌')) {
    result.push('🍌');
    const index = arr.indexOf('🍌');
    if (index > -1) {
      arr.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  result = result.concat(arr);

  return result;
}

const result9 = createArrayBananaFirst(fruits1);
console.log(result9);

// Objects
const inventory = {
  '🍇': 12,
  '🍓': 2,
  '🍌': 3,
  '🍏': 100,
  '🍋': 40,
  '🍎': 1,
};

// 10. Using the inventory object, write a function that filters all the items greater than 20
// hint: entries, filter, spread operator
function filterFruitsObject(obj) {
  // obj.forEach((key, element) => {
  //   console.log('key: ' + key + ' element ' + element);
  // });
  obj.map((key, element) => {
    console.log('key: ' + key + ' element ' + element);
  });

  return undefined;
}

const result10 = filterFruitsObject(inventory);
console.log(result10);

// 11. Using the inventory object, write a function that puts all the fruit icons in a list
const result11 = 'your code here';
console.log(result11);

// 12. Using index.html, write a script that performs the following instructions:
//
// 1. User types random text inside the input text element
// 2. User clicks the button "Click me"
// 3. Input content should appear inside a new "content" div within the body.
// 4. Every '#content' element should have a lifetime of 4 seconds. After that, the element should disappear.

// hint: have in mind the following methods getElementById, appendChild, createElement, addEventListener
