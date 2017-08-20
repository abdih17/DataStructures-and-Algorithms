var outterFunction = function(passed) {

	var innerFunction = function(inner) {
  	return passed + inner
  }

  return innerFunction;
}
//console.dir(outterFunction(8));

var addEight = new outterFunction(8);

console.log(addEight(2));
  //10

console.dir(addEight)
  // ƒunction innerFunction(inner)arguments:
  //   nullcaller: nulllength:
  //   1name: "innerFunction"
  //   prototype: {constructor: ƒ}
  //   __proto__: ƒ ()
  //   [[FunctionLocation]]: VM425:59[[Scopes]]:
  //   Scopes[2]0:
  //     Closure (outterFunction)
  //       passed: 8                <<<<<<<<<<<------------------Closure
  //       1: Global {type: "global", object: Window, name: ""}

//Closures are nothing but functions with preserved data!
