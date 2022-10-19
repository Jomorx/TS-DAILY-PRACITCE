const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class MoPromise {
  //Promise状态信息
  public status: string;
  //resolve的value
  private value: any;
  // reject的reason
  private reason: any;
  //then中传过来的onfulfilled函数
  private onFulfilledFns: (Function | undefined)[] = [];
  //then中传过来的onrejected函数
  private onRejectedFns: (Function | undefined)[] = [];

  constructor(executor: Function) {
    this.status = PROMISE_STATUS_PENDING;
    //成功回调
    const resolve = (value: any) => {
      //推入微任务
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns?.forEach((fn) => {
            fn?.();
          });
        });
      }
    };
    // 失败回调
    const reject = (reason: any) => {
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns?.forEach((fn) => {
            fn?.();
          });
        }
      });
    };
    executor(resolve, reject);
  }

  then(onfulfilled: Function, onrejected?: Function) {
    return new MoPromise((resolve: Function, reject: Function) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
        const value = onfulfilled(this.value);
        resolve(value);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
        const reason = onrejected(this.reason);
        resolve(reason);
      }
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns?.push(() => {
          const value = onfulfilled(this.value);
          resolve(value)
        });
        this.onRejectedFns?.push(() => {
          const reason = onrejected?.(this.reason);
          resolve(reason)
        });
      }
    });
  }
}
// const
const promise = new MoPromise((resolve: Function, reject: Function) => {
  resolve(111);
  reject(222);
});
promise
  .then(
    (res: any) => {
      console.log(res);
      return 1
    },
    (err: any) => {
      console.log(err);
    }
  )
  .then((res: any) => {
    console.log(res);
  });
