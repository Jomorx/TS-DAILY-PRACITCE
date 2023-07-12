const temp = []
const mergeSort = (arr,l,r)=>{
    if(l===r) return 
    let i = l,mid=l+r>>1,j=mid+1
    mergeSort(arr,l,mid)
    mergeSort(arr,mid+1,r)
    while(i<=mid&&j<=r){
        if(arr[i]<=arr[j])temp.push(arr[i++])
        if(arr[i]>arr[j])temp.push(arr[j++])
    }
    while(i<=mid) temp.push(arr[i++])
    while(j<=r) temp.push(arr[j++])
    for(let i =l,j=0;i<=r;i++,j++){
        arr[i]=temp[j]
    }
    temp.length=0
}

const arr = [1,2,5,3,1,2,4]
mergeSort(arr,0,arr.length-1)
console.log(arr);