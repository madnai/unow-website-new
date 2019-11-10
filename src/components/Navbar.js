import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "activeLink" } : null
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

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
      <Navbar collapseOnSelect expand="sm" style={{marginTop: '30px', fontFamily: 'Lato'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="abs">
            <Nav.Item>
              <Link to="/">
                <img src={logo} alt="UNOW" width='200px;' />
              </Link>
            </Nav.Item>
          </div>
          <div className='navbar-nav ml-auto' style={{marginRight: '15%'}}>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                <ExactNavLink to="/">HOME</ExactNavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                <ExactNavLink to="/onas">O NAS</ExactNavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                <ExactNavLink to="/warsztaty">WARSZTATY</ExactNavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                <ExactNavLink to="/planner">SKLEP</ExactNavLink>
              </Nav.Link>
            </Nav.Item>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
