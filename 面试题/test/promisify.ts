const promisify = (fn) => {
    return (...args) => new Promise((resolve, reject) => {
        args.push(function(err,data){
            if(err) reject(err)
            resolve(data)
          })
        fn(...args)
    })
}


const fn = (str,cb) => {
    if (str === 'hello') cb(undefined,'成功')
    else cb('失败')
}
fn('hello',(err,data)=>{})
const pfn = promisify(fn)

pfn('hello').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
export { }