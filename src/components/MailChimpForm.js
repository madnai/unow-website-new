// import addToMailchimp from "gatsby-plugin-mailchimp"
// import TextField from "@material-ui/core/TextField"
// import Button from "@material-ui/core/Button"
// import { Typography } from "@material-ui/core"
import React from "react"
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null, show: true }
  }
//   _handleSubmit = async e => {
//     e.preventDefault()
//     // const result = await addToMailchimp(this.state.email)
//     this.setState({result: result})
//     console.log(result)
//   }
// handleChange = event => {
//     this.setState({ email: event.target.value })
//   }

  handleShow = () => {
      this.setState({show: true})
  }

  handleClose = () => {
    this.setState({show: false})
}

render() {
    return (

    <Modal show={this.state.show} onHide={this.handleClose} centered>
        <ModalHeader closeButton>
            <ModalTitle>Newslettter UNOW</ModalTitle>
        </ModalHeader>
        <ModalBody>
        <div class="columns is-centered">
            <div class="column has-text-centered">
                <p>
                Dołącz do Newslettera UNOW!
                Bądź na bieżąco z nowościami, promocjami i konkursami.
                </p>
                <br></br>
                <form name="contact"  method="POST" data-netlify="true" action="contact/thanks">
              <input type="hidden" name="form-name" value="contact" />

              <div className="field" style={{display: 'inline-flex'}}>
                  <div className="control">
                      <input
                          class="input"
                          placeholder="Twój email"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={e => this.setState({email: e.target.value})}
                      />
                  </div>
                  <br></br>
                  <button class="button is-black" 
                          style={{backgroundColor: 'black', color: 'white', marginLeft: '10px', fontWeight: '600'}} 
                          type="submit">Wyślij</button>
                      
              </div>
              {/* <p style={{color: '#d8002a'}}>{message}</p> */}
              </form>
             </div>
         </div>
 


        </ModalBody>
       </Modal>
    )
  }
} 
