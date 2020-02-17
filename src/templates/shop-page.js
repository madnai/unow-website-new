import React from 'react'
import Layout from '../components/Layout';
import {
    BrowserView,
    MobileView
  } from "react-device-detect";

// const LoadableEmailListForm = Loadable(() => import('../components/EmailListForm'))

 import EmailListForm from '../components/EmailListForm';


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
              <form name="contact" method="post" method="POST" data-netlify="true" >
                    <h1>Zostaw swój email jeśli chcesz!</h1>
                    <div className="field" style={{display: 'inline-flex'}}>
                        <div className="control">
                                <input
                                    class="input"
                                    style={{}}
                                    placeholder="Twój email"
                                    name="email"
                                    type="email"
                                />
                        </div>
                        <button class="button is-black" 
                                style={{backgroundColor: 'black', color: 'white'}} 
                                type="submit">Chcę</button>
                            
                    </div>
                    {/* <p style={{color: '#d8002a'}}>{message}</p> */}
                    </form>
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