const delayFn = (fn: Function, time = 3000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(fn());
      } catch (err) {
        reject("抛出错误"+err);
      }
    }, time);
  });
};

delayFn(() => {
  return 2;
}, 2000).then((res) => {
  console.log(res);
});
