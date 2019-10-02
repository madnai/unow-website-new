import React from 'react'
import Layout from '../../components/Layout'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';



export default () => {
  return (
    <Layout>

      <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
        <div className="columns is-centered">
          <div className="column has-text-centered is-narrow">
            <h1 class="title" style={{textAlign: 'right', marginTop: '30px'}}>DAMIAN PODRAZA</h1>
            <p style={{textAlign: 'right'}}>Na co dzien lubi zmagac sie z  </p>
            <p style={{textAlign: 'right'}}>Na co dzien lubi zmagac sie z  </p>
            <FaFacebookF /> <FaTwitter /> <FaInstagram />
          </div>
          <div className="column has-text-centered  is-narrow">
            <img src="/img/kasia-and-damian.png" width="550px"></img>
          </div>
          <div className="column has-text-centered is-narrow">
            <h1 class="title" style={{textAlign: 'left', marginTop: '30px'}}>KASIA STEFANSKA</h1>
            <p style={{textAlign: 'left'}}>Na co dzien lubi zmagac sie z  </p>
            <p style={{textAlign: 'left'}}>Na co dzien lubi zmagac sie z  </p>
            <FaFacebookF /> <FaTwitter /> <FaInstagram />
          </div>
        </div>
      </div>
    </Layout>
  )
}