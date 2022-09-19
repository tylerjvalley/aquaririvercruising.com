import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';
import BrandThree from '../elements/brand/BrandThree';
import AboutFour from '../elements/about/AboutFour';
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";

import Carousel from 'react-bootstrap/Carousel';



const BannerData = [
    {
        image: "images/service/stateroom.png",
        title: "Our staterooms are in a class of their own!",
        li1: "soft & firm pillows",
        li2: "mattress menu",
        li3: "queen size or twin bed configuration",
        li4: "spacious closet",
        li5: "writing desk & chair",
        li6: "mini bar",
        li7: "hair dryer",
        li8: "bathrobe",
        li9: "flat screen TV",
        li10: "internet/wifi",
        li11: "spacious bathroom",
        li12: "air conditioning",
        li13: "full size mirror",
        li14: "large shower with glass door",
        li15: "in-room safe",
        li16: "230V power outlets",
        li17: "turn down service (on request)"
    },
    {
        image: "images/service/lowerdeck.png",
        title: "Category C: Lower Deck",
        li1: "172 sqft / 16 sq m2",
        li2: "2 Panoramic Windows"
    },
    {
        image: "images/service/upperdeck.png",
        title: "Category K: Middle Deck R: Upper Deck",
        li1: "200 sqft / 18.6 m2",
        li2: "Wall-to-Wall Panoramic Windows",
        li3: "French Balcony",
        li4: "Seating Area",
        li5: "Beds Facing the Window"
    },
    {
        image: "images/service/catw.png",
        title: "Category W: Upper Deck",
        li1: "300 sqft / 27.9 m2",
        li2: "Panoramic Sliding Windows",
        li3: "French Balcony",
        li4: "Large Seating Area",
        li5: "Beds Facing the Window",
        li6: "Separate Bathroom"
    },
    {
        image: "images/service/bathroom.png",
        title: "Category K: Middle Deck, R: Upper Deck",
        li1: "Make Up Mirror",
        li2: "Power Outlet",
        li3: "Spacious Shower with glass door",
        li4: "separate colored towels",
        li5: "bath-robe",
        li6: "slippers",
        li7: "high quality local amenities"
    },
]

const Staterooms = () => {
    return (
        <>
            <SEO title="Staterooms" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <Carousel style={{position: "relative", top: "80px"}}>
                    {BannerData.map((data, index) => (
                        <Carousel.Item>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                                <img 
                                    style={{height: "500px", width: "800px"}}
                                    src={process.env.PUBLIC_URL + "/" + data.image}
                                    alt="staterooms" 
                                />
                                
                                <div style={{height: "500px"}} className="texts">
                                    <ul>
                                        <li>{data.li1}</li>
                                        <li>{data.li2}</li>
                                        {data.li3 ? (<li>{data.li3}</li>) : ""}
                                        {data.li4 ? (<li>{data.li4}</li>) : ""}
                                        {data.li5 ? (<li>{data.li5}</li>) : ""}
                                        {data.li6 ? (<li>{data.li6}</li>) : ""}
                                        {data.li8 ? (<li>{data.li8}</li>) : ""}
                                        {data.li9 ? (<li>{data.li9}</li>) : ""}
                                        {data.li10 ? (<li>{data.li10}</li>) : ""}
                                        {data.li11 ? (<li>{data.li11}</li>) : ""}
                                        {data.li12 ? (<li>{data.li12}</li>) : ""}
                                        {data.li13 ? (<li>{data.li13}</li>) : ""}
                                        {data.li14 ? (<li>{data.li14}</li>) : ""}
                                        {data.li15 ? (<li>{data.li15}</li>) : ""}
                                        {data.li16 ? (<li>{data.li16}</li>) : ""}
                                        {data.li17 ? (<li>{data.li17}</li>) : ""}
                                    </ul>
                                    
                                </div>
                                    
                                

                            </div>
                            
                        </Carousel.Item>
                        
                    ))}
                </Carousel>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">We are creative digital agency working for our company brands.</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis?</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}



                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--60 pt--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}


                <Separator />

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <div className="rwt-timeline-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <TimelineTwo classVar="no-gradient"  />
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                <AboutFour image="./images/about/contact-image.jpg" />
                
                {/* Start Elements Area  */}
                <div className="rwt-counterup-area pb--100">
                    <div className="container mt_dec--30">
                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Corporate Team."
                                    title = "Corporate Team Member."
                                    description = ""
                                />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}






                <FooterFour />
            </main>
        </>
    )
}

export default Staterooms;
