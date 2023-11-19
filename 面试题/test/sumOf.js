
function sum(...args) {
  let fn = (..._args) => sum(...args, ..._args)
  fn.sumOf = () => args.reduce((prev, total) => prev + total, 0)
  return fn
}

console.log(sum(1, 2, 3).sumOf()); // 6
console.log(sum(1, 2, 3)(4).sumOf()); //10
sum(1, 2)(3)(4).sumOf() //···
