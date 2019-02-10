import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StackNavBar extends Component {
  constructor(props) {
    super(props);
  }

  activeSection = (secionID) => {
    if (secionID === this.props.currentSection) return "active";
    return "non-active";
  }

  renderSectionLink = () => {
    const offset = 1 / 4 * 100;
    var sliderStyle = {
      left: offset * this.props.currentSection+'%',
      width: offset+'%',
    }
    return(
      <ul className="menu-horizontal text-center main-menu">
        <li>
          <Link to={"/"} className={this.activeSection(0)}> Home </Link>
        </li>
        <li>
          <Link to={"/food"}  className={this.activeSection(1)}> Food </Link>
        </li>
        <li>
          <Link to={"/review"}  className={this.activeSection(2)}> Review </Link>
        </li>
        <li>
          <Link to={"/travel"}  className={this.activeSection(3)}> Travel </Link>
        </li>
        <div className="active-slider" style={sliderStyle}></div>
      </ul>
    );
  }

  render() {
    return (<div className="nav-container">
      <div>
        <div className="bar bar--sm visible-xs">
          <div className="container">
            <div className="row">
              <div className="col-3 col-md-2">
                <Link to={"/"}>
                  <img className="logo logo-dark" alt="logo" src="third_party/img/logo-dark.png" />
                  <img className="logo logo-light" alt="logo" src="third_party/img/logo-light.png" /></Link>
              </div>
              <div className="col-9 col-md-10 text-right">
                <a href="#" className="hamburger-toggle" data-toggle-class="#menu2;hidden-xs hidden-sm">
                  <i className="icon icon--sm stack-interface stack-menu"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav id="menu2" className="bar bar-2 hidden-xs bar--absolute bar--transparent" data-scroll-class="100vh:pos-fixed">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 text-center text-left-sm hidden-xs order-lg-2">
                <div className="bar__module">
                  <Link to={"/"}>
                    <img className="logo logo-dark" alt="logo" src="third_party/img/logo-dark.png" />
                    <img className="logo logo-light" alt="logo" src="third_party/img/logo-light.png" /> </Link>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1">
                <div className="bar__module">
                  {this.renderSectionLink()}
                </div>
              </div>
              <div className="col-lg-5 text-right text-left-xs text-left-sm order-lg-3">
                <div className="bar__module">
                  <ul className="menu-horizontal text-left">
                    <li className="dropdown">
                      <span className="dropdown__trigger">
                        Shortcuts
                                    </span>
                      <div className="dropdown__container">
                        <div className="container">
                          <div className="row">
                            <div className="dropdown__content col-lg-2">
                              <ul className="menu-vertical">
                                <li>
                                  <a>Single Link</a>
                                </li>
                                <li>
                                  <a>Single Link</a>
                                </li>
                                <li>
                                  <a>Single Link</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>);
  }
}

export default StackNavBar;