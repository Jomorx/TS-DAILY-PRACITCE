const temp:number[]=[]
const merge_sort =(nums:number[],l:number,r:number)=>{
    if(l===r) return;
    const mid = l+r>>1
    merge_sort(nums,l,mid);
    merge_sort(nums,mid+1,r)
    let i =l,j=mid+1
    while(i<=mid&&j<=r){
        if(nums[i]<=nums[j]) temp.push(nums[i++])
        else temp.push(nums[j--])
    }
    while(i<=mid) temp.push(nums[i++])
    while(j<=r) temp.push(nums[j--])
    for(let i =l,j=0;i<r;i++,j++) nums[i]=temp[j]
    temp.length=0
}
const nums =[2,2,3,4,1,2,5]
merge_sort(nums,0,nums.length-1)
console.log(nums);