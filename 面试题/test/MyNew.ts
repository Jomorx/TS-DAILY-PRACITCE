const MyNew = function (this: any, target: Function, ...args: any) {
  const obj = Object.create(Object.getPrototypeOf(target));
  const result = target.call(obj, ...args);
  return typeof result === "object" ? result : obj;
};
