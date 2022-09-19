import React from 'react';
import SEO from "../common/SEO";

import { FiArrowRight } from "react-icons/fi";

import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';


import Separator from "../elements/separator/Separator";

import ScrollAnimation from "react-animate-on-scroll";



const OurMission = () => {
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
                                    <h1 className="title theme-gradient display-one">Tourism = Peace</h1>
                                    <ul className="list-icon">
                                        <li>We strongly believe that tourism and peace go hand in hand.</li>
                                        <li>Visiting other countries, expanding ones personal horizon, understanding other peoples, their cultures and the environment, leaving one's own comfort zone fosters understanding and respect - two key ingrediends for peace in this world.</li>
                                    </ul>
                                    <div className="button-group mt--40">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Book Now <i className="icon"><FiArrowRight /></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <div className="frame-image">
                                    <img src="./images/service/tourism-peace.png" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                


                <Separator />
                

                <div className="rn-splite-style mt-5 px-5">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/river-cruising.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">River Cruising...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">...is a fantastic way for all who want to see a good part of Europe and do not want to waste time with packing, transferring, checking-in and unpacking</p>
                                    <p className="mt-2 description">But to do it once and then enjoy the exclusive comfort of a hotel room moving them from town to town. And allowing more "me"-time there!</p>
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
                                    <img src="./images/service/aquarius.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">The Spirit of Aquarius</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">All of us, who stand behind the idea of Aquari, are veterans when it comes to river cruising.</p>
                                    <p className="mt-2 description">We have experienced how this industry works, and we came to the conclusion that we want to be different.</p>
                                    <p className="mt-2 description">The time seems right to launch a project that is truly built around the interests and the desires of you! - a product that resonates with you, that is in line with the destinations
                                    we call, and with people aboard and ashore! We want to take you on a journey that is inspiring...</p>
                                    <p className="mt-2 description">This is the dawning of the age of Aquari!</p>
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
                                    <img src="./images/service/sustainability.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Sustainability...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">...goes far beyond operating environmentally friendly.</p>
                                    <p className="mt-2 description">We care deeply about the communities we visit, the people there and their social and cultural habitat. We support their neighbourhood, their traditions, and make sure that our visits don't disturb
                                    the balance within</p>
                                    <p className="mt-2 description">The community as a whole shall profit. When locals see our ships and you as part of their community, we have hit the point. And that is what we are working on. Whenever we have a choice, we will make the most <strong>sustainable solution</strong></p>
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
                                    <img src="./images/service/impact.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">We will have an impact!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">We see ourselves as a vision-leader among equals. Many of our partners in this project, we call friends. A good number of our staff and crew followed us to Aquari, as they share our passion and our vision of hospitality on rivers.</p>
                                    <p className="mt-2 description">Does this sound a bit altruistic and flower power? Rather than dictating conditions we prefer to mediate agreements.</p>
                                    <p className="mt-2 description">After all, <strong>this is the age of Aquarius</strong></p>
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
                                    <img src="./images/service/whats-in-there.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">What's in there for you?</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">We are die hard believers that the quality of a vacation can only be measured in memories that last 
                                    way beyond the end of the trip.</p>
                                    <p className="mt-2 description">By the way memories are a result of experiences. The more direct, the purer, the more authentic - the more emotionally energizing the outcome will be.</p>
                                    <p className="mt-2 description">Many Aquari travellers have a desire for unfiltered, unbiased and tabgible authenticity.</p>
                                    <p className="mt-2 description">We are there to help you make a dream come trye - give us a chance!</p>
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
                                    <img src="./images/service/explorers.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Explorers, like you...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">...are open to encounter and spontaneious - not always fully organized - exchange</p>
                                    <p className="mt-2 description">If you are at times looking for empathic exchange and interaction within your environment and the people that are part of it, you are on the right side with Aquari.</p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />


                
                {/* End Brand Area  */}
               
                <Copyright />
            </main>
        </>
    )
}
export default OurMission;
