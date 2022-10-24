const quick_sort = (nums:number[],l:number,r:number)=>{
    if(l===r) return
    let i =l-1,j=r+1;
    const x= nums[l+r>>1]
    while(i<j){
        while(nums[++i]<x) continue;
        while(nums[--j]>x) continue;
        if(i<j) [nums[i],nums[j]]=[nums[j],nums[i]]
    }
    quick_sort(nums,l,j);
    quick_sort(nums,j+1,r)
}
const nums =[2,2,3,4,1,2,5]
quick_sort(nums,0,nums.length-1)
console.log(nums);
export {}