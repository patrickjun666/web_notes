Function.prototype.applyCopy = function(context, args) {
  // 先对调用的环境进行判断，若调用的不是一个方法则抛出报错
  if(typeof this !== 'function') {
    throw new Error('Type Error')
  }
  // 保存this
  let key = Symbol('key')
  context[key] = this
  let res = context[key](...args)
  delete context[key]
  return res
}