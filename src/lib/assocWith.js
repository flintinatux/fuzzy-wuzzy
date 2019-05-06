import { assoc, curry } from 'tinyfunk'

export const assocWith = (key, f, obj) =>
  assoc(key, f(obj), obj)

export default curry(assocWith)
