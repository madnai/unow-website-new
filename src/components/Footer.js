import React from 'react'

import { FaFacebookF, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-white has-text-black" style={{padding: '0px', marginBottom: '30px'}}>
          <div className="container has-background-white has-text-black">
            <div className="columns is-centered is-mobile">
              <div className="column has-text-centered ">
                <span style={{padding: '5px'}}><a href="mailto:info@unow.pl"><FaRegEnvelope /></a></span>
                <span style={{padding: '5px'}}><a href="https://www.facebook.com/unowpl/"><FaFacebookF /></a></span>
                <span style={{padding: '5px'}}><a href="https://www.instagram.com/unow.pl/"><FaInstagram /></a></span>
                <span style={{padding: '5px'}}><a href="https://www.tiktok.com/@unow"><img src="/img/tiktok.svg" alt="tiktok" width="15px"></img></a></span>
              </div>              
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer
