arr = [[1, 2, 3, 11], [8, 4, 5, 6, [1, 7, 8, 9, [10, 9, 11, 12]], [13, 14]]];

const flat = (arr)=>{
    return arr.reduce((prev,next)=>Array.isArray(next) ? prev.concat(flat(next)): prev.concat(next),[])
}


const removeSame = (arr)=>[...new Set(arr)]

const quickSort = (arr,i,j)=>{
    if(i===j) return arr
    let l = i-1,r=j+1,mid = arr[l+r>>1];
    while(l<r){
        if(arr[++l]<mid) continue
        if(arr[--r]>mid) continue
        if(l<r) [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    quickSort(arr,i,r)
    quickSort(arr,r+1,j)
    return arr
}
// quickSort(removeSame(flat(arr)))
console.log(quickSort(removeSame(flat(arr))));