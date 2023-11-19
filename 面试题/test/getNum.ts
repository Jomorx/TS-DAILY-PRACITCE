const getNum =()=>{
    let res = 2;
    return  ()=>{
        while(!isZhiShu(res)){
            res++
        }
        return res++
    }
}

const isZhiShu = (n)=>{
    for(let i = 2;i<(n/2)+1;i++){
        if(n%i===0) return false
    }
    return true
}


const a = getNum()
console.log('a()',a())
console.log('a()',a())
console.log('a()',a())
console.log('a()',a())
console.log('a()',a())
console.log('a()',a())
console.log('a()',a())
console.log('a()',a())
console.log('a()',a())
console.log('a()',a())

