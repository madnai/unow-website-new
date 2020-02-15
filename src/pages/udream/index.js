import React from 'react'
import Layout from '../../components/Layout'
import {
  BrowserView,
  MobileView
} from "react-device-detect";

export default () => {
  return (
    <>
    <BrowserView>
      <Layout>
        <section>
          <div class="container" style={{marginBottom: '150px', paddingLeft: '100px', paddingRight: '100px'}}>
            <img src="/img/app1.png" style={{marginTop: '3%'}} width="100%" align="center"></img>
            <div class="columns is-centered">
            </div>

          </div>
        </section>
      </Layout>
    </BrowserView>
    <MobileView>
      <Layout>
          <div class="container">
            <img src="/img/app.png" style={{marginTop: '3%'}} width="100%" align="center"></img>
          </div>
      </Layout>
    </MobileView>
    </>
  )
}