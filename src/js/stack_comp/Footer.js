import React, { Component } from 'react';



class StackFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<footer className="footer-7 text-center-xs bg--dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <span className="type--fine-print">©
                <span className="update-year"></span> 100111 — All Rights Reserved</span>
                    </div>
                    <div className="col-sm-6 text-right text-center-xs">
                        <ul className="social-list list-inline">
                            <li>
                                <a>
                                    <i className="socicon socicon-google icon icon--xs"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="socicon socicon-twitter icon icon--xs"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="socicon socicon-facebook icon icon--xs"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="socicon socicon-instagram icon icon--xs"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>);
    }
}

export default StackFooter;