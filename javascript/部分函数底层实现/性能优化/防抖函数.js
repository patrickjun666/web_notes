// 防抖函数，触发高频时间后n秒内函数只会执行一次，如果n秒内高频函数再次触发，则重新计算时间
const debounce = (fn, time) => {
  let timeout = null;
  return function() {
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, time);
  }
}