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
          <div class="container" style={{marginBottom: '150px', paddingLeft: '100px', paddingRight: '100px'}}>
            <img src="/img/app2.png" style={{marginTop: '3%'}} width="100%" align="center"></img>
            <div class="columns is-centered">
            
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
                  empty: "Musisz podać email.",
                  duplicate: "Już mamy twój email",
                  button: "Chcę!"
                }
              }
              className='nnn'
              />
              </div>
          </div>
        </section>
      </Layout>
    </BrowserView>
    <MobileView>
      <Layout>
          <div class="container">
            <img src="/img/app2.png" style={{marginTop: '3%'}} width="100%" align="center"></img>
          </div>
      </Layout>
    </MobileView>
    </>
  )
}