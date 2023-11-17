Array.prototype.getLevel = function(){
    const arr = this
    const res = {val:1}
    dg(arr,res)
    return res.val
}

const dg = (arr,res,depth = 1)=>{
    for(const item of arr){
        if(Array.isArray(item)){
            if(res.val < depth+1){
                res.val = depth+1
            }
            dg(item,res,depth+1)
        }
    }
}
console.log([1,[1,2,[1,[[[45]]]]]].getLevel())//6