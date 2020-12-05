Function.prototype.bind = function(context, ...extra) {
  if(typeof context !== 'function') {
    throw new Error('Type Error')
  }
  // 保存this的值
  var self = this
  return function F() {
    if(this instanceof F) {
      return new Self(...args, ...arguments)
    }
    return self.apply(context, [...args, ...arguments])
  }
}