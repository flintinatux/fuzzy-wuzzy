import React from 'react'

import { td1, td2, td4, tr } from '../styles/User.module.scss'

const User = user =>
  <tr key={user.id} className={tr}>
    <td className={td2}>
      { user.first_name }
    </td>
    <td className={td2}>
      { user.last_name }
    </td>
    <td className={td4}>
      { user.address }
    </td>
    <td className={td2}>
      { user.city }
    </td>
    <td className={td1}>
      { user.state }
    </td>
    <td className={td1}>
      { user.zip }
    </td>
  </tr>

export default User
