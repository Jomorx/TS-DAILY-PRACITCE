const MyFlat = (nums, deep) =>
  deep
    ? nums.reduce(
        (total, next) =>
          total.concat(Array.isArray(next) ? MyFlat(next, deep - 1) : next),
        []
      )
    : nums;
const arr = [1, [2, [3]], 4, [5, [6, [7, [8, [9]]]]]];
console.log(MyFlat(arr, 2));