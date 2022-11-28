import React from 'react';
import SEO from "../common/SEO";

import { FiArrowRight, FiCheck } from "react-icons/fi";

import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';

import Separator from "../elements/separator/Separator";

import ScrollAnimation from "react-animate-on-scroll";



const LeisureTravel = () => {
    return (
        <>
            <SEO title="Leisure" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-750">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <h1 className="title theme-gradient display-one">For Leisure Travelers</h1>
                                    <ul className="list-icon">
                                        <li>We feature some of the most prominent and authentic events in Europe.</li>
                                        <li>Hi-calibur sports events, authentic local traditions, open air concerts, Oktoberfests, local festivities, city festivals, cultural events, and more!</li>
                                    </ul>
                                    <div className="button-group mt--40">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Book Now <i className="icon"><FiArrowRight /></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <div className="frame-image">
                                    <img src="./images/service/concerts.png" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* Start Service Area  */}
                <Separator />
                {/* Start Service Area  */}
                <div className="service-area rn-section-gapBottom mt-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <img src="./images/service/planning-tools.png" alt="Banner Images" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}


                <Separator />
                {/* Start Service Area  */}
                <div className="service-area rn-section-gapBottom mt-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <img src="./images/service/must-see.png" alt="Banner Images" />
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
                                    <img src="./images/service/freedom.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Freedom to do what you want, when you want, and as long as you want!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">Is it a beer at a German Beergarden, a bratwurst on a sunny beach in Basel, or strolling through a cosy Christmas market in Strasbourg?</p>
                                    <p className="mt-2 description">Our staff is at your service when you need it with advice, recommendations, and assistance should you wish to book something.</p>
                                    <p className="mt-2 description">Emerge with your mind at peace into the destination and explore the hidden sides of it.</p>
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
                                    <img src="./images/service/few-hours.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">When just a few hours is simply not enough...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">You want to stand in the shadow of the Westerkerk, sip a coffee bought from the cafe where the locals hang out and savor a warm Dutch Appletart, picked up inthe neighbourhood of Jordaan.</p>
                                    <p className="mt-2 description">We understand time is of essence, that is why with an Aquari Cruise, we can stay in towns longer than the standard 4 hours. This also allows you to go to dinner, and stroll the city without worrying about rushing back to the ship.</p>
                                    <p className="mt-2 description">We make sure to set aside extra time for the explorer in YOU!</p>
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
                                    <img src="./images/service/best-entertainment.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">We trust that you will find the best entertainment on land...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">Hence we believe you should check out the local entertainment offer, that you find in the cities where we are docked. Nothing can beat a local beat!</p>
                                    <p className="mt-2 description">You know best whether you prefer classic, rock, theater, or just hanging out with friends.</p>
                                    <p className="mt-2 description">It's all about choice - your choice...</p>
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
                                    <img src="./images/service/meet-people.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Meet people...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">We strongly believe that your journey can be enriched, when you mix with locals and have the opportunity to talk and to exchange views. </p>
                                    <p className="mt-2 description">You wouldn't be the first one to find long-lasting friendships aboard and ashore.</p>
                                    <p className="mt-2 description">This is why we at Aquari River Cruises make sure our local friends are welcome to have a drink at our bar or eat at our restaurant. Afterall, we are part of the community!</p>
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
                                    <img src="./images/service/dine-on-land.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Choose to dine on land if you so wish</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">Breakfast is always included, but you are welcome to join us for Lunch and Dinner!</p>
                                    <p className="mt-2 description">Our chefs have built themselves a reputation so that even locals have caught on to our cuisine and dine aboard as evening guests.</p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               


                <Separator />
                {/* Start Service Area  */}
                <div className="service-area rn-section-gapBottom mt-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <img src="./images/service/make-the-most.png" alt="Banner Images" />
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
export default LeisureTravel;
