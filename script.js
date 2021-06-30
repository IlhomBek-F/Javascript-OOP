// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// Factory Function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draww again");
    },
  };
}

const circles = createCircle(1);

// Constructor Function

function Circle(radius) {
  console.log("this ", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

// Value types and Reference types

/* Value types:
Number;
String;
Boolean;
Symbol;
undefined;
null
*/

/*Reference Types
Object;
Function;
Array;
*/
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // {value : 11}

// Adding and Removing Properties

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle = new Circle(10);

circle.location = { x: 4 };
circle["location"] = { x: 4 };

delete circle.location;

// Enumerating Properties

for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

const keys = Object.keys(circle);

console.log(keys); // ['radius', 'draw']

if ("draw" in circle) {
  console.log("Circle has a draw");
}

// ABSTRACTION => Hide the details - Show the essential

function Circle(radius) {
  this.radius = radius;

  this.defaulLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function () {};

  this.draw = function () {
    this.computeOptimumLocation();
  };
}

circle.defaulLocation = false;

// Private Properties and Methods

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function () {};

  this.draw = function () {
    computeOptimumLocation();
  };
}

// Getters and Setters

console.log(insertBefore());
