import React from 'react'
import { Helmet } from 'react-helmet'

import favicon from '../../assets/img/favicon.ico'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Gatsby Starter</title>
      <meta name="description" content="Gatsby starter..." />
      <link rel="icon" href={favicon} />
    </Helmet>
    {children}
  </>
)

export default Layout
