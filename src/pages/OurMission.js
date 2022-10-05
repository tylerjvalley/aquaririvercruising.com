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
                                    <h1 className="title theme-gradient display-one">Our Mission</h1>
                                    <ul className="list-icon">
                                        <li style={{color: "black", fontWeight: 600}}>Our mission at Aquari is to give you the experience of a lifetime.</li>
                                        <li style={{color: "black", fontWeight: 600}}>We believe in giving you the best quality vacation you can receive. The memories you create will last forever. At Aquari we care about every place we dock at it. We love being there for the communities we travel to. Our goal is to have the locals view us as part of their community. </li>
                                    </ul>
                                    {/*}
                                    <div className="button-group mt--40">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Book Now <i className="icon"><FiArrowRight /></i></a>
                                        
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <div className="frame-image">
                                    <img src="./images/service/river-cruising.png" alt="Banner Images" />
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
                                    <img src="./images/service/crew.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Our staff</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">The staff at Aquari is well equipped with veterans when it comes to the river cruising industry. Our staff has an abundance of knowledge about river cruising.</p>
                                    <p className="mt-2 description">We have decided it’s time to be different. We want to take you on a journey that you will never forget. A journey that is built around the desires and interests that you have. We are here to fulfill those dreams.
</p>
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
                                    <img src="./images/service/tourism-peace.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Tourism is Peace</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">We are full believers that tourism and peace work in harmony together. When you’re able to visit other countries it means that there is peace within that country.</p>
                                    <p className="mt-2 description">Where there is tourism, there is peace. Experiencing different cultures, seeing other places, branching out and expanding your horizon allows you to respect and understand the places you’re visiting in a new light.
</p>
                                    
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
                                    <img src="./images/service/scenery.jpg" alt="split Images" />
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
