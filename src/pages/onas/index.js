import React from 'react'
import Layout from '../../components/Layout'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';



export default () => {
  return (
    <Layout>
       <section style={{marginBottom: '50px', marginTop: '50px'}}>
          <div className="container">
                <div className="content">
                  <p style={{ textAlign: 'justify', fontFamily: 'Lato', fontSize: '14px'}}>
                  Firma UNOW powstała w 2019 roku z potrzeby serca, aby pomóc ludziom odnajdywać, wierzyć i realizować cele w życiu oraz doceniać drogę i dostrzegać rzeczy
                  na drodze w realizacji tych celów. Założycielami firmy są Damian Podraza i Katarzyna Stefańska. Damian specjalizuje się w programowaniu oraz zarządzaniu w
                  jednej z korporacji. Prywatnie jest uzdolnionym muzykiem, entuzjastą filozofii oraz zwolennikiem literatury. Katarzyna pracuje na stanowisku producenta
                  filmowego zarządzając dużymi budżetami oraz zespołami liczącymi kilkadziesiąt osób. Prywatnie prowadzi bloga motywacyjnego oraz zaraża ludzi dobrą energią.
                  Wspólnie odkryliśmy siłę, którą czerpiemy ze spełniania marzeń, opracowując model, dzięki któremu każdy człowiek ma szansę zbliżyć się do realizacji swoich
                  celów życiowych. Nad metodą pracujemy od dwóch lat, ciągle ją udoskonalając i szukając nowych rozwiązań. Obecnie skupiamy się na badaniach i obserwacji
                  wdrażanych metod.<br></br>
                  W grudniu rozpoczęliśmy sprzedaż plannerów, kalendarzy na rok 2020, które pomogą uporządkować cele i zaplanować przyszły rok, a dzięki temu zorganizować
                  każdy jego tydzień. Część zysków ze sprzedaży plannerów pragniemy przekazać na cele charytatywne, informując w ten sposób, że za firmą UNOW stoi szersza
                  idea, a co więcej, że każdy ma możliwość pomagania.<br></br>
                  W styczniu rozpoczynamy warsztaty charytatywne oraz warsztaty indywidualne. Za cel na 2020 rok postawiliśmy sobie organizację piętnastu warsztatów
                  charytatywnych oraz dwudziestu pięciu warsztatów indywidualnych. Warsztaty oparte są na pracy z ludźmi nad wytyczeniem sobie marzeń na najbliższy rok oraz
                  pomocy w realizacji tych marzeń. Warsztaty charytatywne oparte są na pracy z dziećmi, które w formie zabawy mogą zaplanować swoją najbliższą przyszłość oraz
                  przybliżyć się do realizacji marzeń. Warsztaty indywidualne dotyczą analizy przeszłości i przyszłości danej osoby oraz na skupieniu się na tym czego dana osoba
                  chce w różnych kategoriach życia osiągać przez najbliższy rok. Nie ma znaczenia czy ten rok dopiero się rozpoczął, trwa czy już się kończy. Liczymy rok od
                  zrealizowania całego indywidualnego programu.<br></br>
                  Bardzo skrupulatnie prowadzimy social media: Facebook, Instagram, Pinterest, TikTok, aby docierać ze swoją ideą do jak najszerszego grona osób, bez względu na
                  narodowość, rasę, status społeczny, wiek i płeć.<br></br>
                  W przyszłości pragniemy oddać w ręce ludzi aplikacje wspierającą ich w realizacji marzeń.<br></br>
                  W przyszłości planujemy również wydać dzienniki wdzięczności, pokazując konkretne korzyści płynące z codziennego doceniania rzeczy w życiu.<br></br>
                  Chcemy być globalną marką, kojarzącą się z marzeniami, pomaganiem, planowaniem i docenianiem życia. <br></br>
                  </p>
                </div>
              </div>
        </section>
      <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
        <div className="columns is-centered">
          <div className="column has-text-centered is-narrow">
            <h1 class="title" style={{textAlign: 'right', marginTop: '30px', marginBottom: '0px', fontFamily: 'Lato', letterSpacing: '2px'}}><br></br><br></br><br></br>
              <span style={{color: '#C11B30'}}>D</span>AMIAN</h1>
            <h1 class="title" style={{textAlign: 'right', fontFamily: 'Lato', letterSpacing: '2px'}}>PODRAZA</h1>
            <div className="columns is-centered is-mobile" style={{marginRight: '10px'}}>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right'}}>
              <a href="https://www.facebook.com/damian.podraza.5" target="_blank"><FaFacebookF /></a>
              </div>
              <div className="column is-2" style={{textAlign: 'right'}}>
              <a href="https://www.instagram.com/podraza.damian/" target="_blank"><FaInstagram /></a>
              </div>
            </div> 
          </div>
          <div className="column has-text-centered  is-narrow">
            <img src="/img/kasia-and-damian.png" width="550px"></img>
          </div>
          <div className="column has-text-centered is-narrow">
            <h1 class="title" style={{textAlign: 'left', marginTop: '30px', marginBottom: '0px', fontFamily: 'Lato', letterSpacing: '2px'}}><br></br><br></br><br></br>
              <span style={{color: '#C11B30'}}>K</span>ASIA</h1>
            <h1 class="title" style={{textAlign: 'left', letterSpacing: '2px'}}>STEFAŃSKA</h1>
            <div className="columns is-centered is-mobile" style={{marginLeft: '10px'}}>
              <div className="column is-2" style={{textAlign: 'left'}}>
                <a href="https://www.facebook.com/katarzyna.stefanska1" target="_blank"><FaFacebookF /></a>
              </div>
              <div className="column is-2" style={{textAlign: 'left'}}>
                <a href="https://www.instagram.com/jaknieteraztokiedy/" target="_blank"><FaInstagram /></a>
              </div>
              <div className="column is-2" style={{textAlign: 'left'}}></div>
              <div className="column is-2" style={{textAlign: 'left'}}></div>
              <div className="column is-2" style={{textAlign: 'left'}}></div>
            </div>    
          </div>
        </div>
      </div>
    </Layout>
  )
}