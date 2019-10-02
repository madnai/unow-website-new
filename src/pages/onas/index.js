import React from 'react'
import Layout from '../../components/Layout'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'gatsby';



export default () => {
  return (
    <Layout>
      <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
        <div className="columns is-centered">
          <div className="column has-text-centered is-narrow">
            <h1 class="title" style={{textAlign: 'right', marginTop: '30px', marginBottom: '0px'}}>
              <span style={{color: '#DA193E'}}>D</span>AMIAN</h1>
            <h1 class="title" style={{textAlign: 'right'}}>PODRAZA</h1>
            <p style={{textAlign: 'right', fontSize: '13px', fontStyle: 'italic'}}>Na co dzien lubi zmagac sie z <br></br>
                                            z problemami jako programista.<br></br>
                                            Cierpliwy tester róznych<br></br>
                                            ideologii zyciowych, dla <br></br>
                                            którego nie istnieją słowa "nie<br></br>
                                            da się czy nie mozna".<br></br>
                                            Filozofia i muzyka mają<br></br>
                                            specjalne miejsce w jego<br></br>
                                            zyciu.<br></br><br></br><br></br></p><br></br>
            <div className="columns is-centered is-mobile" style={{marginRight: '10px'}}>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right'}}>
                <FaFacebookF />
              </div>
              <div className="column is-2" style={{textAlign: 'right'}}>
                <FaTwitter />
              </div>
              <div className="column is-2" style={{textAlign: 'right'}}>
                <FaInstagram />
              </div>
            </div> 
          </div>
          <div className="column has-text-centered  is-narrow">
            <img src="/img/kasia-and-damian.png" width="550px"></img>
          </div>
          <div className="column has-text-centered is-narrow">
            <h1 class="title" style={{textAlign: 'left', marginTop: '30px', marginBottom: '0px'}}>
              <span style={{color: '#DA193E'}}>K</span>ASIA</h1>
            <h1 class="title" style={{textAlign: 'left'}}>STEFAŃSKA</h1>
            <p style={{textAlign: 'left', fontSize: '13px', fontStyle: 'italic'}}>Absolwentka Organizacji Produkcji <br></br>
                                            Filmowej i Telewizyjnej w Łódzkiej<br></br>
                                            Szkole Flmowej oraz Aktorstwa w<br></br>
                                            Krakowskich Szkołach <br></br>
                                            Artystycznych. Przekonana, ze nie<br></br>
                                            ma rzeczy niemozliwych - tą<br></br>
                                            maksymą zaraza wszystkich<br></br>
                                            napotkanych ludzi.<br></br>
                                            Po godzinach pełna empatii<br></br>
                                            blogerka, dla której istnieje tylko<br></br>
                                            "teraz".</p><br></br>
            <div className="columns is-centered is-mobile" style={{marginLeft: '10px'}}>
              <div className="column is-2" style={{textAlign: 'left'}}>
                <a href="https://www.facebook.com/katarzyna.stefanska1"><FaFacebookF /></a>
              </div>
              <div className="column is-2" style={{textAlign: 'left'}}>
                <FaTwitter />
              </div>
              <div className="column is-2" style={{textAlign: 'left'}}>
                <a href="https://www.instagram.com/jaknieteraztokiedy/"><FaInstagram /></a>
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