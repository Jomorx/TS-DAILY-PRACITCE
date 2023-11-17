const fn = (num: number) => {
    const str = num.toString();
    const res:string[] = [];
    let count = 0;
    for (let i = str.length-1; i >=0;i--,count++){
        res.unshift(str[i])
        if(count===2 && i > 1){
            count = -1
            res.unshift(',')
        }
    }
    return res.join('')
}

console.log(fn(-113123456));