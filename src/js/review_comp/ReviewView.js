import React, { Component } from 'react';
import { Parallax } from 'react-parallax'

class ReviewView extends Component {
    render() {
        return (
            <div className="main-container">
                <Parallax className="sth" bgImage={"third_party/img/landing-14.jpg"} strength={500} >
                <section className="cover imagebg height-100 text-center" data-overlay="3">
                    <div className="container pos-vertical-center">
                        <div className="row">
                            <div className="col-md-9 col-lg-8">
                                <span className="h1 inline-block"> Review </span>
                                <p className="lead">...</p>

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

                </section></Parallax>
            </div>
        );
    }
}

export default ReviewView;