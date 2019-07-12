import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import favicon from '../../assets/img/favicon.ico'
import './layout.css'

const Layout = ({ children }) => (
  <Wrapper>
    <Helmet>
      <title>Gatsby Starter</title>
      <meta name="description" content="Gatsby starter..." />
      <link rel="icon" href={favicon} />
    </Helmet>
    {children}
  </Wrapper>
)

const Wrapper = styled.div``

export default Layout
