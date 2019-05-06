import { compose } from 'tinyfunk'
import React from 'react'

import { buddon, pagination } from '../styles/Pagination.module.scss'
import { first, last } from '../lib/pagination'
import { nextPage, prevPage } from '../ducks/App'

const Pagination = props => {
  const { dispatch, page, results } = props

  return (
    <div className={pagination}>
      <button
        className={buddon}
        disabled={!page}
        onClick={compose(dispatch, prevPage)}
        title="Previous page"
      >
        {'<'}
      </button>

      {first(props)}-{last(props)} of {results.length}

      <button
        className={buddon}
        disabled={last(props) === results.length}
        onClick={compose(dispatch, nextPage)}
        title="Next page"
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
