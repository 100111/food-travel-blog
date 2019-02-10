import React, { Component } from 'react';

import Typed from 'typed.js';

class StackTyped extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 70,
      backDelay: 1500,
      backSpeed: 50,
      loop: false,
      smartBackspace: true,
      showCursor: false
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
/*
    <div className="typed-headline">
      <span className="h1 inline-block">Hi, welcome to my </span>
      <span className="h1 inline-block typed-text typed-text--cursor color--primary" data-typed-strings="food,travel,review,personal">fun</span>
      <span className="h1 inline-block"> site</span>
  </div>
*/
    return ( <span className="h1 inline-block typed-text typed-text--cursor color--primary"
          style={{ whiteSpace: 'pre' }}
          ref={(el) => { this.el = el; }} />
    );
  }
}


export default StackTyped;

