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
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>O NAS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>WARSZTATY</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>PLANNER</Nav.Link>
            </Nav.Item>
          </div>
        </Navbar.Collapse>
      </Navbar>
  //     <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
  //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar8">
  //         <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <span class="navbar-text">&nbsp;</span>
  //     <div class="navbar-collapse collapse" id="navbar8">
  //         <ul class="navbar-nav" style={absCenter}>
  //             <li class="nav-item">
  //                 <a class="nav-link" href="#">Center</a>
  //             </li>
  //         </ul>
  //         <ul class="navbar-nav ml-auto">
  //             <li class="nav-item">
  //                 <Button>asd</Button>
  //             </li>
  //             <li class="nav-item">
  //                 <a class="nav-link" href="//codeply.com">Codeply</a>
  //             </li>
  //             <li class="nav-item">
  //                 <a class="nav-link" href="#">Link</a>
  //             </li>
  //         </ul>
  //     </div>
  // </nav>
      // <nav
      //   className="navbar is-transparent"
      //   role="navigation"
      //   aria-label="main-navigation"
      // >
      //   <div className="container">
      //     <div className="navbar-brand">
      //       <Link to="/" className="navbar-item" title="Logo">
      //         <img src={logo} alt="Kaldi"  />
      //       </Link>
      //       {/* Hamburger menu */}
      //       <div
      //         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
      //         data-target="navMenu"
      //         onClick={() => this.toggleHamburger()}
      //       >
      //         <span />
      //         <span />
      //         <span />
      //       </div>
      //     </div>
      //     <div
      //       id="navMenu"
      //       className={`navbar-menu ${this.state.navBarActiveClass}`}
      //     >
      //       <div className="navbar-end has-text-centered" style={{fontFamily: 'Lato'}}>
      //         <Link className="navbar-item" to="/" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
      //           HOME
      //         </Link>
      //         <Link className="navbar-item" to="/onas" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
      //           O NAS
      //         </Link>
      //         <Link className="navbar-item" to="/warsztaty" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
      //           WARSZTATY
      //         </Link>
      //         <Link className="navbar-item" to="/planner" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}> 
      //           PLANNER
      //         </Link>
      //         {/* <Link className="navbar-item" to="/contact/examples">
      //           Form Examples
      //         </Link> */}
      //       </div>
      //       {/* <div className="navbar-end has-text-centered">
      //         <a
      //           className="navbar-item"
      //           href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
               
      //         </a>
      //       </div> */}
      //     </div>
      //   </div>
      // </nav>
    )
  }
}

export default NavbarComponent
