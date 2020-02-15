import React from 'react'
import Layout from '../../components/Layout'
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default () => {
  const url = "//unow.us4.list-manage.com/subscribe/post?u=f6224231d9d0990931893424f&amp;id=b4f5d178e6";
  const SimpleForm = () => <MailchimpSubscribe url={url}/>

  
  return (
    <>
    <BrowserView>
      <Layout>
        <section>
          <div class="container" style={{marginBottom: '150px', paddingLeft: '100px', paddingRight: '100px'}}>
            <img src="/img/app1.png" style={{marginTop: '3%'}} width="100%" align="center"></img>
            <div class="columns is-centered">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  <SimpleForm style={{color: 'red'}} class="field" onSubmitted={formData => subscribe(formData)} />
                  {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                  {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                  {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                </div>
              )}
            />
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