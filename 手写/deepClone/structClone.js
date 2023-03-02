const obj = {
    a:2,
    b:{
        c:{
            d:3
        }
    }
}
const obj2 = structuredClone(obj)
obj2.b.c.d=4
console.log("obj",obj);
console.log("obj2",obj2);