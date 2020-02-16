import React from 'react'
import Layout from '../../components/Layout'
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import Mailchimp from 'react-mailchimp-form'

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
            {/* <div class="columns is-centered">
            
            <Mailchimp
              action='https://unow.us4.list-manage.com/subscribe/post?u=f6224231d9d0990931893424f&amp;id=b4f5d178e6'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true
                }
                
              ]}
              messages = {
                {
                  sending: "Wysyłam...",
                  success: "W ciągu 24 godzin odezwiemy się do Ciebie!",
                  error: "Niespodziewany błąd.",
                  empty: "Podaj mail.",
                  duplicate: "Już mamy twój email",
                  button: "Chcę!"
                }
              }
              className='nnn'
              />
              </div> */}
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