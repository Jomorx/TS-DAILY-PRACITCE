const retry = <T>(
  fn: (...args:any)=>Promise<T>,
  times: number
): ((this: any, ...args: any) => Promise<T>) =>
  function (...args) {
    return new Promise<Awaited<T>>(async (resolve, reject) => {
      let retryTimes = 0;
      while (retryTimes < times) {
        try {
          const res = await fn.call(this, ...args);
          resolve(res);
          break;
        } catch (e) {
          if (times === retryTimes) {
            reject(e);
          }
        }
        retryTimes++;
      }
    });
  };

async function dice() {
  console.log("当当当...");
  await new Promise((resolve) => setTimeout(resolve, 100));
  const result = 1 + Math.floor(Math.random() * 6);
  console.log(`摇到了 ${result}!`);
  return result;
}

// 模拟摇出大于 n 的点数
async function diceLarger(n) {
  console.log(`摇个大于 ${n} 的`);
  const result = await dice();
  if (result > n) {
    console.log(`好！摇到了 ${result}，大于 ${n}!`);
    return result;
  }
  throw new Error(`唉，摇到了 ${result}，没有大于 ${n}`);
}

// 摇出大于 3 的结果，最多重试 2 次（最多摇 3 次）
const retryDiceLarger = retry(diceLarger, 2);

retryDiceLarger(3).then((result) => {
  console.log(`成功，摇到了 ${result}`);
});
