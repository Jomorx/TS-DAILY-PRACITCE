const obj = {
  a: 2,
  b: {
    c: {
      d: [4],
    },
  },
};

const obj2 = deepClone(obj)
obj2.b.c.d[0] = 1;
console.log("obj",obj);
console.log("obj2",obj2);