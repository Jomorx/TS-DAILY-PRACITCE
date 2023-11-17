const curryIt =(fn:Function)=>{
  const b = (...args)=>{
    if(args.length>=fn.length){
      const val = fn(...args)
      return val
    }else{
      const a = (...a)=>{
        return b(...args,...a)
      }
      return a
    }
  }
  return b
}

const sum = (a, b, c,...args) => a + b + c+args.reduce((prev,next)=>prev+next,0);
const cSum = curryIt(sum);

console.log(cSum(1)(2));
console.log(cSum(1, 2)(3,4,5,6));
