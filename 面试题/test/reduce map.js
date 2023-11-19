Array.prototype.rMap = function(cb){
    let i = 0;
    return this.reduce((prev,next)=>{
        return [...prev,cb(next,i++,this)]
    },[])
}

console.log([1,2,3].rMap((item,i)=>item+i));