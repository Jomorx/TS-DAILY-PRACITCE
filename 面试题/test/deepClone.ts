const deepClone = <T  extends object >(obj: T, map = new WeakMap()): T => {
  if (obj === null || obj === undefined || typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj);
  const clonedObj = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj));
  const keys = Reflect.ownKeys(obj);
  for (const key of keys) {
    if (obj[key] !== null && typeof obj[key] === "object") {
      clonedObj[key] = deepClone(obj[key], map);
    } else {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
};

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
export {}