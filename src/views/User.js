import React from 'react'

import { td, tr } from './User.module.scss'

const User = user =>
  <tr key={user.id} className={tr}>
    <td className={td}>
      { user.first_name }
    </td>
    <td className={td}>
      { user.last_name }
    </td>
    <td className={td}>
      { user.company_name }
    </td>
  </tr>

export default User
