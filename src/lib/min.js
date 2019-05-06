import { curry } from 'tinyfunk'

const min = (a, b) =>
  a < b ? a : b

export default curry(min)
