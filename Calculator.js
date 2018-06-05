class Calculator {
  calculate(str) {
    if (str === '') {
      return 0;
    }
    else if (Number.isInteger(str) === true) {
      return str;
    }
    else if (str.indexOf(',') >= 0) {
      var arr = str.split(',');
      // console.log(parseInt(arr[0]),parseInt(arr[1]))
      // console.log(parseInt(arr[0])+parseInt(arr[1]))
      return parseInt(arr[0], 10) + parseInt(arr[1], 10);
    }
    else if (str.indexOf('\n') >= 0) {
      var arr2 = str.split('\n');
      // console.log(parseInt(arr[0]),parseInt(arr[1]))
      // console.log(parseInt(arr[0])+parseInt(arr[1]))
      return parseInt(arr2[0], 10) + parseInt(arr2[1], 10);
    }
  }
}
module.exports = Calculator;

