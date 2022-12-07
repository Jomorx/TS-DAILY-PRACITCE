const array2tree = (array:any[],pid=0) => {
    return array.reduce((prev,next)=>{
        if(next.pid === pid ){
            const children = array2tree(array,next.id)
            if(children.length){
                next.children=children
            }
            prev.push(next)
        }
        return prev
    },[])
};

var treeList = [
    {
        title: '系统管理',
        parentName: '',
        pid: 0,
        id: 1,
    },
    {
        title: '角色新增',
        parentName: '角色管理',
        pid: 22,
        id: 221,
    },
    {
        title: '角色编辑',
        parentName: '角色管理',
        pid: 22,
        id: 222,
    },
    {
        title: '角色删除',
        parentName: '角色管理',
        pid: 22,
        id: 223,
    },
    {
        title: '用户新增',
        parentName: '用户管理',
        pid: 33,
        id: 331,
    },
    {
        title: '菜单新增',
        parentName: '菜单管理',
        pid: 11,
        id: 111,
    },
    {
        title: '菜单编辑',
        parentName: '菜单管理',
        pid: 11,
        id: 112,
    },
    {
        title: '用户管理',
        parentName: '系统管理',
        pid: 0,
        id: 33,
    },
    {
        title: '菜单管理',
        parentName: '系统管理',
        pid: 1,
        id: 11,
    },
    {
        title: '菜单删除',
        parentName: '菜单管理',
        pid: 11,
        id: 113,
    },
    {
        title: '用户编辑',
        parentName: '用户管理',
        pid: 33,
        id: 332,
    },
    {
        title: '角色管理',
        parentName: '系统管理',
        pid: 1,
        id: 22,
    },
    {
        title: '用户删除',
        parentName: '用户管理',
        pid: 33,
        id: 333,
    }
]
const res = array2tree(treeList)
console.log(res)