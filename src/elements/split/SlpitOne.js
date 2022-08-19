import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SlpitOne = () => {
    return (
            <div className="rn-splite-style mb-5 mt-5">
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    {/* 945 x 709 */}
                                    <img src="./images/service/laptop.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Your working day doesn't always end...</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">...when you arrive back at your stateroom. It is important that you have a stable WiFi connection, and a comfortable
                                    working desk to make sure that the time you have to spend after hours on your business cases are not wasted by technical hick-ups.</p>
                                    <p className="mt-2 description">In case you need to print something let out front desk know.</p>
                                    <p className="mt-2 description">If we can assist you in bringing your items or equipment to or from the venues, 
                                    we will find a quick and easy way. Our goal is to give you more time to relax, so your next business day can
                                    be equally successful!</p>
                                    </ScrollAnimation>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SlpitOne
