// 1. 
function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function functionX() {
    return "I am function x";
  }
  return functionX;
}

function returnsAnAnonymousFunction() {
  return function () {
    return "I am anonymous";
  };
}
