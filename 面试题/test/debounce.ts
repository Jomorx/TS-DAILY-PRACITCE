const debounce = (fn,delay)=>{
    let timer:NodeJS.Timer | null = null;
    return function(this:any,...args){
        if(timer) clearTimeout(timer)
        setTimeout(() => {
            fn.call(this,...args)
        }, delay);
    }
}