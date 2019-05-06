import React from 'react'

import { first, last } from '../lib/pagination'

const Pagination = props => {
  const { results } = props

  return (
    <div>
      {first(props)}-{last(props)} of {results.length}
      <button>{'<'}</button>
      <button>{'>'}</button>
    </div>
  )
}

export default Pagination
