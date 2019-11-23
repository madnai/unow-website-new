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
          <div class="container" style={{marginBottom: '50px', paddingLeft: '100px', paddingRight: '100px'}}>
            <img src="/img/soon.png" style={{marginTop: '3%'}} width="100%" align="center"></img>
          </div>
        </section>
      </Layout>
    </BrowserView>
    <MobileView>
      <Layout>
          <div class="container">
            <img src="/img/soon.png" style={{marginTop: '3%'}} width="100%" align="center"></img>
          </div>
      </Layout>
    </MobileView>
    </>
  )
}