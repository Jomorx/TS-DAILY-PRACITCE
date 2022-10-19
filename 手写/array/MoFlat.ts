const MyFlat = (array: any, floor = 1) =>
  array.reduce(
    (total: any[], cur: any) =>
      total.concat(Array.isArray(cur) ? MyFlat(cur) : cur),
    []
  );

const arr = [1, [2, [3]], 4, [[5], 6]];
console.log(MyFlat(arr));
