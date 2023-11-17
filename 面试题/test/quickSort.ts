const quickSort = (arr,l,r)=>{
    if(l === r) return 
    let i = l-1,j=r+1
    const mid = arr[l+r >> 1]
    while(i<j){
        while(arr[++i]<mid) continue;
        while(arr[--j]>mid) continue;
        if(i<j) [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    quickSort(arr,l,j)
    quickSort(arr,j+1,r)
}

const arr = [1,25,2,5,6,2,1]
quickSort(arr,0,arr.length-1)

export {}