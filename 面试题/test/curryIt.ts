const curryIt = (fn: Function): Function => {
  const paramList: any[] = [];
  function foo(...args) {
    
    paramList.push(...args);
    if (paramList.length >= fn.length) {
      return fn(...paramList);
    } else {
      return foo;
    }
  }
  return foo;
};

const sum = (a, b, c,...args) => a + b + c;
const cSum = curryIt(sum);
console.log(cSum(1)(2)(3));
console.log(cSum(1, 2)(3));
