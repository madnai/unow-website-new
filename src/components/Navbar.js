import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/unow-logo.png';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'




const NavbarComponent = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div class="abs">
            <Nav.Item>
            <img src={logo} alt="UNOW" width='100px;' />
            </Nav.Item>
          </div>
          <div class='navbar-nav ml-auto'>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                <Link to="/">HOME</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                <Link to="/onas">O NAS</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                <Link to="/warsztaty">WARSZTATY</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                <Link to="/planner">PLANNER</Link>
              </Nav.Link>
            </Nav.Item>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
