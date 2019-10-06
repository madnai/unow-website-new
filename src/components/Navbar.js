import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/unow-logo.png'

const Navbar = class extends React.Component {
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
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi"  />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered" style={{fontFamily: 'Lato'}}>
              <Link className="navbar-item" to="/" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                HOME
              </Link>
              <Link className="navbar-item" to="/onas" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                O NAS
              </Link>
              <Link className="navbar-item" to="/warsztaty" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                WARSZTATY
              </Link>
              <Link className="navbar-item" to="/planner" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}> 
                PLANNER
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="icon">
                  <img src={github} alt="Github" />
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
