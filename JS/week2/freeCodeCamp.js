const myArr = [ 2, 3, 4, 5, 6];
let total = 0;
for (let i = 0 ; i < myArr.length ; i++) {
total += myArr[i];
}

console.log(total);

//******************* */

function multiplyAll(arr) {
    var product = 1;
    
    // Only change code below this line
    for (var i = 0 ; i < arr.length; i++){
        for (var x = 0; x < arr[i].length; x++){
            product *= arr[i][x];
        }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]))

  //******************* */

var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(myArr);

  //------------------------------
