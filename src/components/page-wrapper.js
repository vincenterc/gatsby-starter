import React from 'react'
import Layout from './layout'

const PageWrapper = Comp => {
  const Wrapper = props => (
    <Layout {...props}>
      <Comp {...props} />
    </Layout>
  )

  Wrapper.displayName = `Wrapper-of-${Comp.displayName || Comp.name}`

  return Wrapper
}

export default PageWrapper
