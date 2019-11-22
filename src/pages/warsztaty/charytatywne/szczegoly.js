import React from 'react';
import Layout from '../../../components/Layout'
import TextLoop from "react-text-loop";
import {
  BrowserView,
  MobileView
} from "react-device-detect";

export default () => {
    return (
      <>
      <BrowserView>
        <Layout>
        <div className="section" style={{padding: '0rem 1.5rem 0rem 1.5rem'}}>
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="tile">
                  <h1 className="title" style={{paddingLeft: '15%'}}>
                  Spełniamy marzenia.<br></br>
                    Ty też {" "}
                  <TextLoop interval={4000} springConfig={{ stiffness: 200, damping: 50 }}>
                        <span>będziesz.</span>
                        <span>możesz.</span>
                        <span>teraz.</span>
                      </TextLoop>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
            <div className="columns is-centered">
              <div className="column is-5 " style={{marginLeft: '5%', fontSize: '14px', textAlign: 'justify', paddingRight: '50px'}}>
              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Co to</span> za warsztaty? </span><br></br>
              Warsztaty charytatywne UNOW to tworzenie tablic marzeń, celów i pragnień. To spotkanie, podczas którego uczestnicy mają szansę w ciągu trzech godzin zastanowić czego naprawdę pragną w dziewięciu stworzonych kategoriach życia. A następnie dostają wiedzę oraz instrukcję która pozwala zrozumieć przybliżenie się do realizacji marzeń. 
              Na warsztatach dzieci i dorośli dowiedzą się kim jesteśmy, po co tu przyszliśmy, co będziemy robić, czym są kategorię, stworzą własną tablicę marzeń i dowiedzą się co dalej z nią zrobić. 
              <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Do kogo</span> są skierowane? </span><br></br>
              Warsztaty charytatywne UNOW skierowane są do wszystkich dzieci i młodzieży oraz do osób starszych, którzy nie mieli okazji i czasu zastanowić się czego pragną od życia oraz tych, którzy chcą przybliżyć się do poznania i spełnienia swoich marzeń.<br></br><br></br>

              <span style={{fontWeight: 'bold'}}> Jaki jest <span style={{color: '#C11B30'}}>koszt?</span> </span><br></br>
              Warsztaty charytatywne zawsze są bezpłatne.  <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Ile</span> trwają? </span><br></br>
              3 godziny<br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#DA193E'}}>Potrzebne</span> materiały? </span><br></br>
              Dostarczamy wszystkie niezbędne materiały, m.in komputer z dostępem do bazy marzeń, kolorową drukarkę, nożyczki, kleje, kartki i ramki na tablice marzeń. <br></br><br></br><br></br>

              <div className="buttons "><a href="mailto:unow.pl@gmail.com" style={{textDecoration: 'none'}}><span className="button" style={{backgroundColor: '#C11B30', color: 'white'}}>
                    Jestem zainteresowany
                  </span></a></div>
              </div>
              <div className='column is-6' style={{marginRight: '-100px', marginTop: '-5%'}}>
              <img src='/img/warsztaty-charytatywne-wiecej.png' alt="UNOWbrowser" width="100%" align="right" />
              </div>
            </div>
          </div>
        </Layout>
      </BrowserView>
      <MobileView>
      <Layout>
        <div className="section" style={{padding: '1rem 1.5rem 0rem 1.5rem'}}>
          <div className="columns">
            <div className="column is-12">
            <img src='/img/warsztaty-charytatywne-wiecej.png' alt="UNOWbrowser" width="100%"  />

            </div>
          </div>
        </div>
        <div className="section" style={{paddingTop: '1rem'}}>
            <div className="columns is-centered">
              <div className="column is-5 " style={{marginLeft: '5%', fontSize: '14px'}}>
              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Co to</span> za warsztaty? </span><br></br>
              Warsztaty charytatywne UNOW to tworzenie tablic marzeń, celów i pragnień. To spotkanie, podczas którego uczestnicy mają szansę w ciągu trzech godzin zastanowić czego naprawdę pragną w dziewięciu stworzonych kategoriach życia. A następnie dostają wiedzę oraz instrukcję która pozwala zrozumieć przybliżenie się do realizacji marzeń. 
              Na warsztatach dzieci i dorośli dowiedzą się kim jesteśmy, po co tu przyszliśmy, co będziemy robić, czym są kategorię, stworzą własną tablicę marzeń i dowiedzą się co dalej z nią zrobić. 
              <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Do kogo</span> są skierowane? </span><br></br>
              Warsztaty charytatywne UNOW skierowane są do wszystkich dzieci i młodzieży oraz do osób starszych, którzy nie mieli okazji i czasu zastanowić się czego pragną od życia oraz tych, którzy chcą przybliżyć się do poznania i spełnienia swoich marzeń.<br></br><br></br>

              <span style={{fontWeight: 'bold'}}> Jaki jest <span style={{color: '#C11B30'}}>koszt?</span> </span><br></br>
              Warsztaty charytatywne zawsze są bezpłatne.  <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Ile</span> trwają? </span><br></br>
              3 godziny<br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#DA193E'}}>Potrzebne</span> materiały? </span><br></br>
              Dostarczamy wszystkie niezbędne materiały, m.in komputer z dostępem do bazy marzeń, kolorową drukarkę, nożyczki, kleje, kartki i ramki na tablice marzeń. <br></br><br></br><br></br>

              <div className="buttons "><a href="mailto:unow.pl@gmail.com" style={{textDecoration: 'none'}}><span className="button" style={{backgroundColor: '#C11B30', color: 'white'}}>
                    Jestem zainteresowany
                  </span></a></div>
              </div>
            </div>
          </div>
        </Layout>
      </MobileView>
      </>
    )
}