import { compose, mapObj } from 'tinyfunk'
import React from 'react'

import { th1, th2, th4, tr } from '../styles/UsersHeader.module.scss'

const toHeader =
  mapObj((val, key) => key.replace(/_/g, ' '))

const UsersHeader = fields =>
  <tr className={tr}>
    <th className={th2}>
      { fields.first_name }
    </th>
    <th className={th2}>
      { fields.last_name }
    </th>
    <th className={th4}>
      { fields.address }
    </th>
    <th className={th2}>
      { fields.city }
    </th>
    <th className={th1}>
      { fields.state }
    </th>
    <th className={th1}>
      { fields.zip }
    </th>
  </tr>

export default compose(UsersHeader, toHeader)
