// import React from 'react'
// import Layout from '../../components/Layout'

// export default () => (
//   <Layout>
//     <section className="section">
//       <div className="container">
//         <div className="content">
//           <h1>Thank you!</h1>
//           <p>This is a custom thank you page for form submissions</p>
//         </div>
//       </div>
//     </section>
//   </Layout>
// )
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
            <picture>
              {/* <source srcSet="/img/soon.webp" type="image/webp" /> */}
              <img src="/img/soon2.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
            <div class="columns is-centered">
              <div class="column has-text-centered">
              <form name="contact"  method="POST" data-netlify="true" >
              <input type="hidden" name="form-name" value="contact" />

                    <h1 style={{fontSize: '1.75em', marginBottom: '0.5714em'}}>Zostaw swój email jeśli chcesz!</h1>
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
                                style={{backgroundColor: 'black', color: 'white'}} 
                                type="submit">Chcę</button>
                            
                    </div>
                    <h1 style={{color: 'red' ,fontSize: '1.75em', marginBottom: '0.5714em'}}>Dzięki! Odezwiemy się w ciągu 24 godzin.</h1>

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
