import React from 'react'
import Layout from '../../components/Layout';
import EmailListForm from '../../components/EmailListForm';
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
            <picture>
              {/* <source srcSet="/img/soon.webp" type="image/webp" /> */}
              <img src="/img/soon2.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
            <div class="columns is-centered">
              <div class="column has-text-centered">
                <div class="content">
                <EmailListForm></EmailListForm>

                </div>
              </div>
            </div>
           
          </div>
        </section>
      </Layout>
    </BrowserView>
    <MobileView>
      <Layout>
          <div class="container">
            <picture>
              <source srcSet="/img/soon.webp" type="image/webp" />
              <img src="/img/soon2.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </div>
      </Layout>
    </MobileView>
    </>
  )
}