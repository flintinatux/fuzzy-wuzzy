import { curry } from 'tinyfunk'

const max = (a, b) =>
  a > b ? a : b

export default curry(max)
