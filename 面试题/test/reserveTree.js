const List = [
    { name: 'A', key: 1, parent: 0 },
    { name: 'B', key: 2, parent: 0 },
    { name: 'C', key: 3, parent: 1 },
    { name: 'D', key: 4, parent: 1 },
    { name: 'E', key: 5, parent: 3 },
    { name: 'F', key: 6, parent: 5 },
    { name: 'G', key: 7, parent: 2 },
]

function reverseTree(list) {
    const arr = {}
    const res = []
    for(const item of list){
        arr[item.key] = item
    }

    list.forEach((item)=>{
        if(arr[item.parent]){
            if(!arr[item.parent].children) arr[item.parent].children=[]
            arr[item.parent].children.push(item)
        }else{
            res.push(item)
        }
    })
    return res
}

const tree = reverseTree(List)

console.log((tree));
