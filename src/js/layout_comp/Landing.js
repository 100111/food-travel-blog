import React, { Component } from 'react';

import StackTyped from '../stack_comp/STyped'
import { Parallax } from 'react-parallax'

import '../../css/landing.css'
// import  '../../../public/third_party/js/parallax.js'

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return (<div className="main-container">
            <Parallax className="sth" bgImage={"third_party/img/work-2.jpg"} strength={500} >
                <section className="cover imagebg height-100 text-center" data-overlay="3">
                    <div className="container pos-vertical-center">
                        <div className="row">
                            <div className="col-md-9 col-lg-8">
                                <span className="h1 inline-block">Hi, welcome to my </span>
                                <StackTyped strings={['website', 'blog', 'site about food', 'site about travel', 'site for reviews', 'life :)']} />
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
            <Parallax className="sth" bgImage={"third_party/img/landing-9.jpg"} strength={500} >
                <section className="cover cover-features imagebg" data-overlay="4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-lg-7">
                                <h1> Build stylish, lean sites with Stack </h1>
                                <p className="lead"> Stack offers a clean and contemporary look to suit a range of purposes from corporate, tech startup,
                            marketing site to digital storefront. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature feature-2 boxed boxed--border bg--white">
                                    <i className="icon color--primary icon-Pepper-withFire"></i>
                                    <div className="feature__body">
                                        <p> Save time with a multitude of styled components designed to showcase your content </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature feature-2 boxed boxed--border bg--white">
                                    <i className="icon color--primary icon-Alarm"></i>
                                    <div className="feature__body">
                                        <p> Construct mockups or production-ready pages in-browser with Variant Page Builder </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature feature-2 boxed boxed--border bg--white">
                                    <i className="icon color--primary icon-Paper-Plane"></i>
                                    <div className="feature__body">
                                        <p> Take comfort in 6 months included support with a dedicated support forum </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Parallax>
            <section>
                <div className="container">
                    <div className="masonry">
                        <div className="masonry__container row masonry--active">
                            <div className="col-md-4 masonry__item">
                                <div className="card card-2 text-center">
                                    <div className="card__top">
                                        <a href="#">
                                            <img alt="Image" src="third_party/img/landing-8.jpg" /> </a>
                                    </div>
                                    <div className="card__body">
                                        <h4>Photography 101</h4>
                                        <span className="type--fade">Understanding the fundamentals</span>
                                        <p> Construct mockups or production-ready pages in-browser with Variant Page Builder </p>
                                    </div>
                                    <div className="card__bottom text-center">
                                        <div className="card__action">
                                            <span className="h6 type--uppercase">Explore</span>
                                            <a href="#">
                                                <i className="material-icons">flip_to_front</i>
                                            </a>
                                        </div>
                                        <div className="card__action">
                                            <span className="h6 type--uppercase">Save</span>
                                            <a href="#">
                                                <i className="material-icons">favorite_border</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 masonry__item">
                                <div className="card card-2 text-center">
                                    <div className="card__top">
                                        <span className="label">New</span>
                                        <a href="#">
                                            <img alt="Image" src="third_party/img/landing-14.jpg" /> </a>
                                    </div>
                                    <div className="card__body">
                                        <h4>Kiln Fired Pottery</h4>
                                        <span className="type--fade">Video Tutorial Series</span>
                                        <p> Construct mockups or production-ready pages in-browser with Variant Page Builder </p>
                                    </div>
                                    <div className="card__bottom text-center">
                                        <div className="card__action">
                                            <span className="h6 type--uppercase">Explore</span>
                                            <a href="#">
                                                <i className="material-icons">flip_to_front</i>
                                            </a>
                                        </div>
                                        <div className="card__action">
                                            <span className="h6 type--uppercase">Save</span>
                                            <a href="#">
                                                <i className="material-icons">favorite_border</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 masonry__item">
                                <div className="card card-2 text-center">
                                    <div className="card__top">
                                        <span className="label">New</span>
                                        <a href="#">
                                            <img alt="Image" src="third_party/img/landing-14.jpg" /> </a>
                                    </div>
                                    <div className="card__body">
                                        <h4>Kiln Fired Pottery</h4>
                                        <span className="type--fade">Video Tutorial Series</span>
                                        <p> Construct mockups or production-ready pages in-browser with Variant Page Builder </p>
                                    </div>
                                    <div className="card__bottom text-center">
                                        <div className="card__action">
                                            <span className="h6 type--uppercase">Explore</span>
                                            <a href="#">
                                                <i className="material-icons">flip_to_front</i>
                                            </a>
                                        </div>
                                        <div className="card__action">
                                            <span className="h6 type--uppercase">Save</span>
                                            <a href="#">
                                                <i className="material-icons">favorite_border</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Parallax className="sth" bgImage={"third_party/img/recruitment-4.jpg"} strength={500} >
                <section className="imagebg feature-large-7 switchable">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-5">
                                <div className="boxed boxed--lg border--round bg--white row justify-content-center">
                                    <div className="col-lg-10 col-md-12">
                                        <h3>Experience quality</h3>
                                        <p className="lead"> Stack is built with customization and ease-of-use at its core — whether you're a seasoned
                                            developer or just starting out, you'll be making attractive sites faster than any traditional
                                    HTML template. </p>
                                        <hr className="short" />
                                        <p> Each purchase of Stack includes six months of free support and lifetime free content and
                                    bug-fix updates. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></Parallax>
            <section className="switchable feature-large switchable--switch hidden-sm hidden-xs">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                            <img alt="Image" className="border--round box-shadow-wide" src="third_party/img/landing-14.jpg" /> </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="switchable__text">
                                <h2>Perfect for bootstrapped startups</h2>
                                <p className="lead"> Launching an attractive and scalable website quickly and affordably is important for modern startups
                                — Stack offers massive value without looking 'bargain-bin'. </p>
                                <a href="#">Learn More »</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-large feature-large-2 hidden-sm hidden-xs">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4 col-lg-3">
                            <h3>Experience quality</h3>
                            <p className="lead"> Stack is built with customization and ease-of-use at its core — whether you're a seasoned developer
                                or just starting out, you'll be making attractive sites faster than any traditional HTML template.
                        </p>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <img alt="Image" className="border--round box-shadow-wide" src="third_party/img/landing-9.jpg" /> </div>
                        <div className="col-md-4 col-lg-2">
                            <hr className="short" />
                            <p> Each purchase of Stack includes six months of free support, including access to our dedicated support
                                forum. In addition to support you'll recieve lifetime updates, including new content and bug-fixes.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="switchable feature-large hidden-sm hidden-xs">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                            <img alt="Image" className="border--round box-shadow-wide" src="third_party/img/wedding-5.jpg" /> </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="switchable__text">
                                <h2>Perfect for bootstrapped startups</h2>
                                <p className="lead"> Launching an attractive and scalable website quickly and affordably is important for modern startups
                                — Stack offers massive value without looking 'bargain-bin'. </p>
                                <a href="#">Learn More »</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Parallax className="sth" bgImage={"third_party/img/inner-8.jpg"} strength={500} >
                <section className="switchable switchable--switch imagebg height-50 parallax" data-overlay="2">
                    <div className="container pos-vertical-center">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Design-driven and perfect for modern startups</h2>
                                <p className="lead"> Stack offers a clean and contemporary to suit a range of purposes from corporate, tech startup, marketing
                            site to digital storefront. </p>
                            </div>
                        </div>
                    </div>
                </section></Parallax>
        </div>
        );
    }
}

export default Landing;