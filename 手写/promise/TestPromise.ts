const promise = new Promise((resolve, reject) => {
  // resolve(1)
  throw new Error("123");
});
promise.then((res) => {
  console.log('rrrrrrrrrr:',res);
})
.then(res=>{
    console.log(res);
},err=>{
    console.log("errr:",err);
    
})

