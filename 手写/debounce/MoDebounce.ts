const MoDebounce = (fn:Function,delay=1000)=>{
    let timer:number|null= null;
    return ()=>{
        if(timer) clearTimeout(timer)
        setTimeout(() => {
            fn()
        }, delay);
    }
}