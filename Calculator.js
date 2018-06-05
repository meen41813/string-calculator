class Calculator {
  calculate(str) {
<<<<<<< HEAD
=======
    // var arr = str.split(',');
    // var arr2 = str.split('\n');
>>>>>>> 5ab3edcfc170d3df46d02e4f74bf74677f3d3be6
    if (str === '') {
      return 0;
    } else if (Number.isInteger(str) === true) {
      return str;
<<<<<<< HEAD
    }
    else if (str.indexOf(',') >= 0) {
      var arr = str.split(',');
      // console.log(parseInt(arr[0]),parseInt(arr[1]))
      // console.log(parseInt(arr[0])+parseInt(arr[1]))
      return parseInt(arr[0], 10) + parseInt(arr[1], 10);
    }
    else if (str.indexOf('\n') >= 0) {
      var arr2 = str.split('\n');
=======
    } else if (str.indexOf(',') >= 0) {
      const arr = str.split(',');
      // console.log(parseInt(arr[0]),parseInt(arr[1]))
      // console.log(parseInt(arr[0])+parseInt(arr[1]))
      let sum = 0;
      for (const x of arr) {
        sum += parseInt(x, 10);
      }
      return sum;
    } else if (str.indexOf('\n') >= 0) {
      const arr2 = str.split('\n');
>>>>>>> 5ab3edcfc170d3df46d02e4f74bf74677f3d3be6
      // console.log(parseInt(arr[0]),parseInt(arr[1]))
      // console.log(parseInt(arr[0])+parseInt(arr[1]))
      let sum = 0;
      for (const x in arr2) {
        sum += parseInt(arr2[x], 10);
      }
      return sum;
    }
    return undefined;
  }
}
module.exports = Calculator;

