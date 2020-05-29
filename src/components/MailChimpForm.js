import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
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
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
    console.log(result)
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }

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
                <form onSubmit={this._handleSubmit}>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <Button
                        variant="contained"
                        color="primary"
                        label="Submit"
                        type="submit"
                        style={{backgroundColor: 'black', height:'44px', marginTop: '15px'}}
                    >
                        <Typography variant="button">Wyślij</Typography>
                    </Button>
                </form>
            </div>
        </div>

        <div class="columns is-centered">
            <div class="column has-text-centered">
                { (this.state.result && this.state.result.result == 'success') ? <span style={{color: 'black' ,fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato', fontWeight: '600'}}>Dzięki! Odezwiemy się w ciągu 24 godzin.</span> : null}
                { (this.state.result && this.state.result.result == 'error' && this.state.result.msg.includes('subscribed')) ? <span style={{color: 'black' ,fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato', fontWeight: '600'}}>Dzięki! Jesteś już w naszej bazie.</span> : null}
            </div>
        </div>

        </ModalBody>
       </Modal>
    )
  }
} 
