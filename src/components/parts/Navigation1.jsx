import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RemoteReq from '#assets/images/pngs/RemoteReq-logotype-cobalt.png';
import RRLogo from '#assets/images/pngs/RR-cobalt.png';

class Navigation1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHamburgerMenu: false,
    };

    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
  }

  toggleHamburgerMenu(e) {
    e.preventDefault();

    const { showHamburgerMenu } = this.state;

    if (showHamburgerMenu) {
      this.setState({
        showHamburgerMenu: false,
      });
    } else {
      this.setState({
        showHamburgerMenu: true,
      });
    }
  }

  render() {
    const { showHamburgerMenu } = this.state;

    return (
      <nav
      id="navigation-1"
      className='navigation-1'>
        <Link to="/" target="_self">
          <img src={ RemoteReq } className='remotereq-name' alt=""/>
          <img src={ RRLogo } className='rr-logo' alt=""/>
        </Link>

        <div
          className="hamburger-menu-icon"
          onClick={(e) => { this.toggleHamburgerMenu(e); }}
        >
          <p className={`${showHamburgerMenu ? 'hide' : 'show'}`}>=</p>
          <p className={`${showHamburgerMenu ? 'show' : 'hide'}`}>x</p>
        </div>

        <div className="navigation-1-links">
         <a href='https://remotereq.com/hire-talent'>
            <button className='button-2'>hire talent</button>
          </a>

          <a href='https://remotereq.com/sign-in'>
            <button className='button-2'>find jobs</button>
          </a>

          <a href='https://remotereq.com/request-a-demo'>
            <button className='button-1'>request a demo</button>
          </a>

          <a href="https://blog.remotereq.com">
            <button className="e-button-2">Blog</button>
          </a>
        </div>

        <div className={`hamburger-menu ${showHamburgerMenu ? 'show' : 'hide'}`}>
          <a href='https://remotereq.com/hire-talent'>
            <button className='button-2'>hire talent</button>
          </a>

          <a href='https://remotereq.com/sign-in'>
            <button className='button-2'>find jobs</button>
          </a>

          <a href='https://remotereq.com/request-a-demo'>
            <button className='button-1'>request a demo</button>
          </a>
        </div>

    </nav>
    );
  }
}


export default Navigation1;