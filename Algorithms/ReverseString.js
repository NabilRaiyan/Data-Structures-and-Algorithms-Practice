//Implement a function that reverses a string using iteration...and then recursion!

function reverseString(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array) {
      // popping the last char from the arrayStr and pushing to the reversed array
      if(array.length > 0) {
        reversedArray.push(array.pop());
        addToArray(array);
      }
      return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
  }
  
  reverseString('yoyo master');
  
  function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
  
const reverseStr = reverseStringRecursive('yoyo master');
console.log(reverseStr);


