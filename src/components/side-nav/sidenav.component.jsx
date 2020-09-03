import React from 'react';

import './style.scss';
import { Link } from 'react-router-dom';

const NAV_OPTS = [
  { text: 'Dashboard', url: '/', id: 1 },
  { text: 'Installation Tickets', url: '/', id: 2 },
  { text: 'Maintenance Tickets', url: '/', id: 3 },
  { text: 'User Management', url: '/', id: 4 },
  { text: 'Satellite Management', url: '/', id: 5 },
]

const SideNav = ({ children }) => {
  return (
    <div className="sidenav">
      <div className="navbar">
        {NAV_OPTS.sort().map(({ id, text, url }) => (
          <Link className="navLink" to={url} key={id}>{text.toUpperCase()}</Link>
        )
        )}
      </div>
      <div className="page-content">
        {children}
      </div>
    </div>
  )
}

export default SideNav;