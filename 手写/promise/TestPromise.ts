const promise1 = new Promise((resolve: Function) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});

const promise2 = new Promise((resolve: Function) => {
  setTimeout(() => {
    resolve(2222);
  }, 2000);
});

const promise3 = new Promise((resolve: Function, reject: Function) => {
  setTimeout(() => {
    reject(3333);
  }, 3000);
});

Promise.any([promise1, promise2, promise3]).then((res: any) => {
  console.log(res);
}).catch(err=>console.log(err)
)
export {}