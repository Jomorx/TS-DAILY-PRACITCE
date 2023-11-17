
function sum(...args) {
  const setNums = (...n) => sum(...args, ...n)
  const getTotal = () => args.reduce((prev, next) => prev + next, 0)
  setNums.sumOf = getTotal
  return setNums
}


console.log(sum(1, 2, 3).sumOf()); // 6
console.log(sum(1, 2, 3)(4).sumOf()); //10
sum(1, 2)(3)(4).sumOf() //···
