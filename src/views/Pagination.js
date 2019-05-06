import React from 'react'

import min from '../lib/min'
import { PAGE_SIZE } from '../ducks/Users'

const Pagination = props => {
  const { page, results } = props

  const lo = page * PAGE_SIZE + 1
  const hi = min(results.length, (page + 1) * PAGE_SIZE)

  return (
    <div>
      {lo}-{hi} of {results.length}
      <button>{'<'}</button>
      <button>{'>'}</button>
    </div>
  )
}

export default Pagination
