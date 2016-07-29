export const isObject = value => {
  const type = typeof value
  return !!value && (type === 'object' || type === 'function')
}

export const isFunction = value => {
  const funcTag = '[object Function]'
  const genTag = '[object GeneratorFunction]'
  const toString = Object.prototype.toString
  const tag = isObject(value) ? toString.call(value) : ''

  return tag === funcTag || tag === genTag
}
