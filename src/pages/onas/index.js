import React from 'react'
import Layout from '../../components/Layout'

export default () => {
  return (
    <Layout>
      <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
            <div className="columns is-centered">
              <div className="column has-text-centered is-narrow">
              DAMIAN PODRAZA
              </div>
              <div className="column has-text-centered  is-narrow">
                <img src="https://picsum.photos/id/1/280/406"></img>
              </div>
              <div className="column has-text-centered is-narrow">
                <img src="https://picsum.photos/id/1/280/406"></img>
              </div>
              <div className="column has-text-centered is-narrow">
              KASIA STEFANSKA
              </div>
            </div>
          </div>
    </Layout>
  )
}