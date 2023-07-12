function deepClone(obj, map = new WeakMap()) {
  if (obj === null || obj === undefined || typeof obj !== "object") return obj;

  if (map.has(obj)) return map.get(obj);

  const targetObj = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj));
  map.set(obj,targetObj);

  const keys = Reflect.ownKeys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      targetObj[key] = deepClone(obj[key], map);
    } else {
      targetObj[key] = obj[key];
    }
  }
  return targetObj;
}

const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};
const targetObj = deepClone(obj);
targetObj.a.b.c = 3;
console.log(obj);
