// const cloneDeep = (obj, map = new WeakMap()) => {
//   if (typeof obj === "undefined" || obj === null || typeof obj !== "object")
//     return obj;
//   if (map.has(obj)) return map.get(obj);
//   const targetObj = Array.isArray(obj)
//     ? []
//     : Object.create(Object.getPrototypeOf(obj));
//   map.set(obj, targetObj);

//   const keys = Reflect.ownKeys(obj)
//   for(const key of keys){
//     if(typeof obj[key] ==="object" && obj[key]!==null){
//        targetObj[key] =  cloneDeep(obj[key],map)
//     }else{
//         targetObj[key] = obj[key]
//     }
//   }
//   return targetObj
// };


const deepClone =<T extends object>(obj:T, map = new WeakMap()): T =>{
    if(typeof obj === 'undefined' ||  obj === null || typeof obj !== 'object') return obj

    if(map.has(obj)) return map.get(obj)

    const targetObj = Array.isArray(obj) ? []: Object.create(Object.getPrototypeOf(obj))
    const keys = Reflect.ownKeys(obj)


    for(const key of keys){
        if(typeof obj[key] === 'object' && obj[key] !== null) {
            targetObj[key] = deepClone(obj[key],map)
        }
        else targetObj[key] = obj[key]

    }
    return targetObj
}

export {}