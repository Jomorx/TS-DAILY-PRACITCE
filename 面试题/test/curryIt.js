const curryIt = (fn) => {
  let temp = [];
  const result = function (...args) {
    temp = temp.concat(args);
    if (temp.length === fn.length) {
      return fn.call(this, ...temp);
    } else return result;
  };
  return result;
};

const sum = (a, b, c) => a + b + c;
const cSum = curryIt(sum);
console.log(cSum(1)(2)(3));
