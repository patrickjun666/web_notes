Function.prototype.callCopy = function (context = window, ...args) {
  // 如果调用的不是一个函数，则打印报错
  if(typeof this !== "function") {
    throw new Error("Type Error")
  }
  // 用Symbol值(独一无二的值)来保存this
  const fn = Symbol('fn');
  context[fn] = this;
  // 保存this的值
  const res = context[fn](...args)
  // 在window上删除this的键和值
  delete context[fn]
  return res
}