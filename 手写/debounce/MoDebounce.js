const MyDebounce = (fn, delay, flag, _this) => {
  let timer = null;
  let temp = flag;
  const debounceFn = (...bar) => {
    if (temp) {
      temp = !temp;
      fn.call(_this, ...bar);
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(_this, ...bar);
    }, delay);
  };
  debounceFn.cancel = () => {
    if (timer) clearTimeout(timer);
    timer = null;
  };
  return debounceFn;
};
