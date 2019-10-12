import React from 'react'
import {Link} from '@reach/router'
import {string, node} from 'prop-types'

import './menuItem.css'

const MenuItem = ({to, icon, children}) => (
  <Link
    to={to}
    className='actionsMenuItem'
  >
    <div>
      <i className={icon} />
    </div>
    {children}
  </Link>
)

MenuItem.propTypes = {
  to: string.isRequired,
  icon: string.isRequired,
  children: node
}

export default MenuItem
