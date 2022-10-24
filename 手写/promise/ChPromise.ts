const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class ChPromise {
  //Promise状态信息
  private status: string;
  //resolve的value
  private value: any;
  // reject的reason
  private reason: any;
  //then中传过来的onfulfilled函数
  private onFulfilledFns: Function[] = [];
  //then中传过来的onrejected函数
  private onRejectedFns: Function[] = [];

  constructor(executor: Function) {
    this.status = PROMISE_STATUS_PENDING;
    //成功回调
    const resolve = (value: any) => {
      //推入微任务
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => {
            fn();
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
          this.onRejectedFns.forEach((fn) => {
            fn?.();
          });
        }
      });
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onfulfilled?: Function, onrejected?: Function) {
    onrejected ||= (err: any) => {
      throw err;
    };
    onfulfilled ||= (res: any) => res;
    return new ChPromise((resolve: Function, reject: Function) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
        executeFunctionWithCatchError(onfulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
        executeFunctionWithCatchError(onrejected, this.reason, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_PENDING) {
        onfulfilled &&
          this.onFulfilledFns.push(() => {
            executeFunctionWithCatchError(
              onfulfilled,
              this.value,
              resolve,
              reject
            );
          });
        onrejected &&
          this.onRejectedFns.push(() => {
            executeFunctionWithCatchError(
              onrejected!,
              this.reason,
              resolve,
              reject
            );
          });
      }
    });
  }
  catch(onrejected?: Function) {
    return this.then(undefined, onrejected);
  }
  finally(onfinally?: Function) {
    this.then(onfinally, onfinally);
  }

  static resolve(value: any) {
    return new ChPromise((resolve: Function) => resolve(value));
  }
  static reject(reason: any) {
    return new ChPromise((_: Function, reject: Function) => {
      reject(reason);
    });
  }

  static all(promises: ChPromise[]) {
    return new ChPromise((resolve: Function, reject: Function) => {
      const values: any[] = [];
      promises.forEach((promise: ChPromise) => {
        promise.then(
          (res: any) => {
            values.push(res);
            if (values.length === promises.length) {
              resolve(values);
            }
          },
          (err: any) => {
            reject(err);
          }
        );
      });
    });
  }
  static allSettled(promises: ChPromise[]) {
    return new ChPromise((resolve: Function, reject: Function) => {
      const value: object[] = [];
      promises.forEach((premise: ChPromise) => {
        premise.then(
          (res: any) => {
            value.push({ status: PROMISE_STATUS_FULFILLED, value: res });
            if (promises.length === value.length) {
              resolve(value);
            }
          },
          (err: any) => {
            value.push({ status: PROMISE_STATUS_REJECTED, value: err });
            if (promises.length === value.length) {
              resolve(value);
            }
          }
        );
      });
    });
  }
  static race(promises: ChPromise[]) {
    return new ChPromise((resolve: Function, reject: Function) => {
      promises.forEach((promise) => promise.then(resolve, reject));
    });
  }

  static any(promises: ChPromise[]) {
    return new ChPromise((resolve: Function, reject: Function) => {
      const reasons: any = [];
      promises.forEach((promise) =>
        promise.then(resolve, (err: any) => {
          reasons.push(err);
          if (reasons.length === promises.length) {
            reject(new AggregateError(reasons));
          }
        })
      );
    });
  }
}

const executeFunctionWithCatchError = (
  execute: Function | undefined,
  value: any,
  resolve: Function,
  reject: Function
) => {
  try {
    const result = execute!(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
};

//
const moPromise1 = new ChPromise((resolve: Function) => {
  setTimeout(() => {
    resolve(1111);
  }, 3000);
});

const moPromise2 = new ChPromise((resolve: Function) => {
  setTimeout(() => {
    resolve(2222);
  }, 2000);
});

const moPromise3 = new ChPromise((resolve: Function, reject: Function) => {
  setTimeout(() => {
    reject(3333);
  }, 1000);
});

ChPromise.any([moPromise1, moPromise2, moPromise3]).then(
  (res: any) => {
    console.log("res", res);
  },
  (err: any) => {
    console.log("err", err);
  }
);
