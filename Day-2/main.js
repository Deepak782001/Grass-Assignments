{
  console.log("hello world");
}

// Create a function

let a = 0;

function add() {
  console.log(20 + 30);
}

// call a function

add();

//another function

function multiply(a, b) {
  console.log(a * b);
}

// calling

multiply(10, 20);

Calculator: function calc(value1, value2, sign) {
  if (sign === "-") {
    console.log(value1 - value2);
  } else if (sign === "+") {
    console.log(value1 + value2);
  } else if (sign === "*") {
    console.log(value1 * value2);
  } else if (sign === "/") {
    console.log(value1 / value2);
  } else sign === "%";
  console.log((value1 * value2) / 100);
}

calc(100, 10, "+");
calc(200, 20, "-");
calc(300, 20, "/");
calc(20, 2, "*");
calc(2000, 10, "%");
