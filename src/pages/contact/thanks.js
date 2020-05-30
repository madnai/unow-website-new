
import React, { useState } from 'react'
import Layout from '../../components/Layout';
import {
    BrowserView,
    MobileView
  } from "react-device-detect";


export default () => {
     const [email, setEmail] = useState('');

  return (
    <>
    <BrowserView>
      <Layout>
        <section>
          <div class="container" style={{marginBottom: '50px', paddingLeft: '100px', paddingRight: '100px'}}>
            {/* <picture>
              <source srcSet="/img/shop3.webp" type="image/webp" />
              <img src="/img/shop3.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
            <div class="columns is-centered">
              <div class="column has-text-centered">
              <form name="contact"  method="POST" data-netlify="true" >
              <input type="hidden" name="form-name" value="contact" />

                    <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Potrzebuje</h1>
                    <div className="field" style={{display: 'inline-flex'}}>
                        <div className="control">
                            <input
                                class="input"
                                placeholder="Twój email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <button class="button is-black" 
                                style={{backgroundColor: 'black', color: 'white', marginLeft: '10px'}} 
                                type="submit">Wyślij</button>
                            
                    </div>
                    <h1 style={{color: 'black' ,fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato', fontWeight: '600'}}>Dzięki! Odezwiemy się w ciągu 24 godzin.</h1>

                    </form>
              </div>
            </div> */}
            Dziekujemy
           
          </div>
        </section>
      </Layout>
    </BrowserView>
    <MobileView>
      <Layout>
          <div class="container">
            {/* <picture>
              <source srcSet="/img/shop3.webp" type="image/webp" />
              <img src="/img/shop3.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
            <div class="columns is-centered">
              <div class="column has-text-centered">
              <form name="contact"  method="POST" data-netlify="true" >
              <input type="hidden" name="form-name" value="contact" />

                    <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Potrzebuje</h1>
                    <div className="field" style={{display: 'inline-flex'}}>
                        <div className="control">
                            <input
                                class="input"
                                placeholder="Twój email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <button class="button is-black" 
                                style={{backgroundColor: '#d80028', color: 'white', marginLeft: '10px'}} 
                                type="submit">Wyślij</button>
                            
                    </div>
                    <h1 style={{color: 'black' ,fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato', fontWeight: '600'}}>Dzięki! Odezwiemy się w ciągu 24 godzin.</h1>

                    </form>
              </div>
            </div> */}
             Dziekujemy
          </div>
      </Layout>
    </MobileView>
    </>
  )
}
