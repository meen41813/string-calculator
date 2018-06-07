class Calculator {
  calculate(str) {
    // var arr = str.split(',');
    // var arr2 = str.split('\n');
    if (str === '') {
      return 0;
    }

    else if (Number.isInteger(str) === true) {
      return str;
    }

    else if (str.indexOf(',') >= 0) {
      const arr = str.split(',');
      // console.log(parseInt(arr[0]),parseInt(arr[1]))
      // console.log(parseInt(arr[0])+parseInt(arr[1]))
      let sum = 0;
      for (const x of arr) {
        sum += parseInt(x, 10);
      }
      return sum;
    } 

    else if (str.indexOf('\n') >= 0) {
      const arr2 = str.split('\n');
      // console.log(parseInt(arr[0]),parseInt(arr[1]))
      // console.log(parseInt(arr[0])+parseInt(arr[1]))
      let sum = 0;
      for (const x in arr2) {
        sum += parseInt(arr2[x], 10);
      }
      return sum;
    }
    else if (Number.isInteger(str) >= 1000){
      return "Over 1000"
    }
    return undefined; // else return undefined
  }
}
module.exports = Calculator;

