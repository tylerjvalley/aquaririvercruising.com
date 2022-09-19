import React from 'react';
import SEO from "../common/SEO";

import { FiArrowRight } from "react-icons/fi";

import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';


import Separator from "../elements/separator/Separator";

import SlpitOne from "../elements/split/SlpitOne";

import ScrollAnimation from "react-animate-on-scroll";



const BusinessTravel = () => {
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
                                    <h1 className="title theme-gradient display-one">Business Travel</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"></span> On a business trip?</li>
                                        <li><span className="icon"></span> We got you covered</li>
                                    </ul>
                                    <div className="button-group mt--40">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Book Now <i className="icon"><FiArrowRight /></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <div className="frame-image">
                                    <img src="./images/service/work.jpg" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* Start Service Area  */}
                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/sailing-plan.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Our Sailing plan...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">...keeps in mind some of Europe's most frequented fairs, trade shows and industry events.</p>
                                    <p className="mt-2 description">Frankfurt Book Fair, Art Basel, IMM Koln, Boat Fair Dusseldorf, and more. We will send in our ship as additional hotel capacity furing these industry highlights.</p>
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
                                    <img src="./images/service/how-to-get.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">How to get you there...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">...is not a problem at all. We know the fastest walking path, the safest bike lane, the smoothest connection by public transportation or the most comfortable transfer by car.</p>
                                    <p className="mt-2 description">For certain events we can even provide a round-trip shuttle service!</p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                <SlpitOne />

                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/tables.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">A Meeting Place for Business</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">...is sometimes easier on your own turfm or ship in this case. You don't always want to close a deal in the middle of a trade show,
                                    especially when your fiercest competitor is close by. We can provide meeting areas and even cater a meal or drinks for you and your guests. Or perhaps a Business Lunch in our restuarant?</p>
                                    <p className="mt-2 description">After all, time is money! Our back lounge has a large presentation screen and comfortable seating areas.</p>
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
                                    <img src="./images/service/celebrate.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">...and there is time to celebrate!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">Receptions are fun (also for us!) We want to make sure that you reach your objectives with your event. Be it to introduce a new product, make a public announcement, thank outstanding team members, create a casual atmosphere for you 
                                    negotiations, or simply to impress your clients;</p>
                                    <p className="mt-2 description">(And if you want to add a little cruise to your gathering, let's talk about it - after all you are on a ship!).</p>
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
                                    <img src="./images/service/voila.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">et voilà!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">Unveiling your latest product can be critical to it's success. Hence you want to choose the right location. A ship with all it's features can be exactly the place where you have everyone in one place to present your latest achievement. Together we can make it an event!</p>
                                    <p className="mt-2 description">Now think what if, you could move the platform to the next city without changing the set-up and presenting it there. What about taking a few loyal clients along to the next city as a loyalty bonus? What about your team, who doesn't have to pack and unpack either?...</p>
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
                                    <img src="./images/service/VIPs.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">You want your VIPs to be there!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">In case you want your guests of honor to meet you at a trade show, or an industry event, why not invite them for a day or two in advance and sail them there? </p>
                                    <p className="mt-2 description">We always offer packages prior to bringing in the ship to the event and after the event sailing on. Check it out perheaps this is something extra special that brings you some goodwill!</p>
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
                                    <img src="./images/service/treat.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">An extra special Treat!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">The ship can be chartered for whatever your desires are. Incentive travel, team building, meetings, even private functions such as wedding or vow renewals, anniversaries, family gatherings or just because you want to!</p>
                                    <p className="mt-2 description">Together we will make these events unforgettable</p>
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
                                    <img src="./images/service/together.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">We are in this together!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">In case you have an idea or if you think that an event aboard the ship could help you - run it by us.</p>
                                    <p className="mt-2 description">We have done this before and we can come up woth solutions and assistance to your goals that you haven't even thought about</p>
                                    <p className="mt-2 description">Whatever it is, drop us a line. We love to be challenged!</p>
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
                                <img src="./images/service/business-guest.png" alt="Banner Images" />
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
export default BusinessTravel;
