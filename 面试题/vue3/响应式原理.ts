// let workInProgressFn: Function | null = null;
// class Depend {
//   private reactiveFn: Set<Function>;
//   constructor() {
//     this.reactiveFn = new Set();
//   }
//   addDepend(fn: Function) {
//     if (workInProgressFn) {
//       this.reactiveFn.add(fn);
//     }
//   }
//   notify() {
//     this.reactiveFn.forEach((fn) => fn());
//   }
// }
// const targetMap = new WeakMap();
// const getDepend = (target, key): Depend => {
//   let keyMap = targetMap.get(target);
//   if (!keyMap) {
//     keyMap = new Map();
//     targetMap.set(target, keyMap);
//   }
//   let depend = keyMap.get(key);
//   if (!depend) {
//     depend = new Depend();
//     keyMap.set(key, depend);
//   }
//   return depend;
// };
// const reactive = (obj) =>
//   new Proxy(obj, {
//     get(target, key, receiver) {
//       const depend = getDepend(target, key);
//       depend.addDepend(workInProgressFn!);
//       return Reflect.get(target, key, receiver);
//     },
//     set(target, key, newValue, receiver) {
//       const res = Reflect.set(target, key, newValue, receiver);
//       const depend = getDepend(target, key);
//       depend.notify();
//       return res;
//     },
//   });

// const watchFN = (fn: Function) => {
//   workInProgressFn = fn;
//   fn();
//   workInProgressFn = null;
// };

// const obj = reactive({
//   name: "why",
// });

// watchFN(() => {
//   console.log("name更新了", obj.name);
// });
// obj.name = "mooo";
