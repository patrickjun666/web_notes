// 高频时间触发，但n秒内只能执行一次，所以节流会稀释函数的执行频率
// 定时器版
const throttle = (fn, time) => {
  let flag = true
  return function () {
    if(!flag) {
      return false;
    }
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, time);
  }
}

// 时间戳版
const throttleTime = (fn, time) => {
  let previous = 0
  return function() {
    let now = Date.now()
    if(now - previous > time) {
      fn.apply(this, arguments)
      previous = now
    }
  }
}