import React from 'react';
import SEO from "../common/SEO";

import { FiArrowRight } from "react-icons/fi";

import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';


import Separator from "../elements/separator/Separator";

import ScrollAnimation from "react-animate-on-scroll";



const Accomodations = () => {
    return (
        <>
            <SEO title="Company" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-750">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <h1 className="title theme-gradient display-one">Accomodations</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"></span> Our ship is in a class of its own!</li>
                                        <li><span className="icon"></span> Take a look at our rooms and the different parts of the ship</li>
                                    </ul>
                                    <div className="button-group mt--40">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Book Now <i className="icon"><FiArrowRight /></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <div className="frame-image">
                                    <img src="./images/service/exterior1.jpg" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/royal-suite.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">All of our staterooms include:</h4>
                                    </ScrollAnimation>
                                    <div className="lists">
                                        <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <ul>
                                                <li className="description">soft &amp; firm pillows</li>
                                                <li className="description">mattress menu</li>
                                                <li className="description">queen size or twin bed configuration</li>
                                                <li className="description">spacious closet</li>
                                                <li className="description">writing desk &amp; chair</li>
                                                <li className="description">mini bar</li>
                                                <li className="description">hair dryer</li>
                                                <li className="description">bathrobe</li>
                                            </ul>
                
                                        </ScrollAnimation>
                                        <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <ul>
                                                <li className="description">flat screen TV</li>
                                                <li className="description">internet/wifi</li>
                                                <li className="description">spacious bathroom</li>
                                                <li className="description">air conditioning</li>
                                                <li className="description">full size mirror</li>
                                                <li className="description">large shower with glass door</li>
                                                <li className="description">in-room safe</li>
                                                <li className="description">230V power outlets</li>
                                                <li className="description">turn down service (on request)</li>
                                            </ul>
                
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}


                <Separator />
                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/catabp_2.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Category C: Lower Deck</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        <ul>
                                            <li className="description">172 sqft / 16 m2</li>
                                            <li className="description">2 Panoramic Windows</li>
                                        </ul>
            
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/panorama-suite.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Category K: Middle Deck</h4>
                                        <h4 className="title">R: Upper Deck</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        <ul>
                                            <li className="description">200 sqft / 18.6 m2</li>
                                            <li className="description">Wall-to-Wall Panoramic Windows</li>
                                            <li className="description">French Balcony</li>
                                            <li className="description">Seating Area</li>
                                            <li className="description">Beds Facing the Window</li>
                                        </ul>
            
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/deluxestate.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Category W: Upper Deck</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        <ul>
                                            <li className="description">300 sqft / 27.9 m2</li>
                                            <li className="description">Panoramic Sliding Windows</li>
                                            <li className="description">French Balcony</li>
                                            <li className="description">Large Seating Area</li>
                                            <li className="description">Beds Facing the Window</li>
                                            <li className="description">Separate Bathroom</li>
                                        </ul>
            
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}


                <Separator />
                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/deluxestatebath.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Category K: Middle Deck</h4>
                                        <h4 className="title">R: Upper Deck</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        <ul>
                                            <li className="description">Make Up Mirror</li>
                                            <li className="description">Power Outlet</li>
                                            <li className="description">Spacious Shower with glass door</li>
                                            <li className="description">Separate colored towels</li>
                                            <li className="description">bath-robe</li>
                                            <li className="description">slippers</li>
                                            <li className="description">high quality local amenities</li>
                                        </ul>
            
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/panoramalounge1.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Lounge</h4>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/panoramalounge2.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Bar Area</h4>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/observationlounge.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Observation Deck</h4>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Separator />
                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/diningroom.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Restaurant</h4>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/clublounge.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Back Lounge</h4>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/fitness.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Gym</h4>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/skydeck.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Sun Deck</h4>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* End Brand Area  */}
               
                <Copyright />
            </main>
        </>
    )
}
export default Accomodations;
