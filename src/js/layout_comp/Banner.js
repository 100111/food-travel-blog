import React, { Component } from 'react'
import StackTyped from '../stack_comp/STyped'
import { connect } from 'react-redux';
import { Parallax } from 'react-parallax'

class Banner extends Component {
  constructor(props) {
      super(props);
  }

  renderTypedText () {
    if (this.props.banner.typedText.length !== 0) {
      return (<StackTyped strings={this.props.banner.typedText}/>);
    } else {
      return (<div></div>);
    }
  }

  

  render() {
    const sectionClassName = `cover imagebg height-${this.props.banner.bgHeight} text-center banner-section`;
    return (
      <Parallax className="banner" bgImage={this.props.banner.bgImg} strength={500} bgImageStyle={{ top: '15vh' }} >
        <section className={sectionClassName} data-overlay="3">
          <div className="container pos-vertical-center">
            <div className="row">
              <div className="col-md-9 col-lg-8">
                <span className="h1 inline-block">{this.props.banner.text} </span>
                {this.renderTypedText()}
                <p className="lead">{this.props.banner.subText}</p>
              </div>
            </div>
          </div>
          <div className="pos-absolute pos-bottom col-12">
            <div className="container">
              <div className="row">
                <div className="col-12 text-left">
                  <div className="text-block">
                    <h5>Teahupo'o Beach</h5>
                    <span>French Polynesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    );
  }
}

Banner = connect((store) => {
  return {
    banner: store.general.banner
  }
})(Banner)

export default Banner