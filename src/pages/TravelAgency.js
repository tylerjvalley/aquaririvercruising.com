import React from "react";
import SEO from "../common/SEO";



import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";

import AboutFour from '../elements/about/AboutFour';
import GalleryOne from "../elements/gallery/GalleryOne";
import Gallery from "../elements/gallery/Gallery";

import BlogClassicData from '../data/blog/BlogList.json';


const BannerData = [
    {
        image: "images/service/cologne-night.jpg",
        title: "Imagine staying in a hotel that moves.",
        description: "While you explore Europe your way"
    },
    {
        image: "images/service/relax.jpg",
        title: "Take control of how you want to travel",
        description: "Drift away from strict itineraries",
    },
    {
        image: "images/service/croissant.jpg",
        title: "Bed and Breakfast with luxurious views included!",
    },
    {
        image: "images/service/boatwithfriends.jpg",
        title: "Even though travel therapy isn't covered by your insurance,",
        description: "We've got you covered as soon as you step foot onto the ship."
    }
]


const PopupData = [
    {
        id: "01",
        image: "images/service/have-your-coffee.jpg",
        title: "Where you have your coffee is up to you.",
        description: "Unpack once and have your hotel travel with you.",
        description2: "Rather than constantly packing and finding a hotel"
    },
    {
        id: "02",
        image: "images/service/friendsdoingthings.jpg",
        title: "It's your decision on",
        description: "When and where you want to depart",
        description2: "What events you want to participate in.",
        description3: "How long you want to stay",
        description4: "Where you want to explore"
    },
    {
        id: "03",
        image: "images/service/girl-traveling.jpg",
        title: "Explore with Us",
        description: "Aquari solves all the downsides to multi-city traveling while giving you affordable luxury and complete flexibility",
        description2: "Cruise to the beat of your own adventure"
    }
   
]

const PopupData2 = [
    {
        id: "01",
        image: "images/service/strasbourg-with-peeps.jpg",
        //linkText: "Meet our team and crew!"
        title: "Traveling is peace",
        description: "Here at Aquari we believe that traveling not only brings peace to our lives, at the same time it allows us to see people in a different perspective. Traveling allows you to expand your horizons, see how other people live their lives in these wonderful cultures that everyone deserves to experience. This understanding is the underlying cause for respect towards others and “peace” in this world."
    },
    
]


const TravelAgency = () => {
    return (
        <>
            <SEO title="Aquari" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                
                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="height-950 bg_image" data-black-overlay="5" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${data.image})`}}>
                                <div className="container">
                                    <img className="home-logo" src={`${process.env.PUBLIC_URL}/images/service/aquari-full-white.png`} />
                                    <div className="row row--30 align-items-center">
                                        <div className="col-12">
                                            <div className="inner text-center">
                                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.description}}></h1>
                                                <a href={process.env.PUBLIC_URL + data.link}><p style={{color: "#43D9FA", textDecoration: "underline", textAlign: "center"}} className="description link" dangerouslySetInnerHTML={{__html: data.linkText}}></p></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* End Slider Area  */}

                {/* Start Service Area  
                <div className="rn-service-area rn-section-gapBottom pt--100">
                    <div className="container">
                        <ServiceOne 
                        serviceStyle = "service__style--1 icon-circle-style"
                        textAlign = "text-center"
                        />
                    </div>
                </div>
                {/* End Service Area  */}
                <Separator />
                
                <AboutFour image="./images/blog/mountains.jpg" />

                
                {/* Start Elements Area  */}
                <div className="rwt-gallery-area rn-section-gapBottom">
                    
                        <div className="row mt_dec--30 row--15">
                            {PopupData2.map((item) => (
                                <div className="col-12 mt--30" key={item.id}>
                                    {/* images: 1270 x 950 */}
                                    <GalleryOne galleryItem={item} />
                                </div>
                            ))}
                        </div>
                    
                </div>
                {/* End Elements Area  */}

                <Separator />
                {/* Start Elements Area  */}
                
                <div className="rwt-gallery-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row mt_dec--30 row--15">
                            {PopupData.map((item) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--30" key={item.id}>
                                    {/* images: 1270 x 950 */}
                                    <Gallery galleryItem={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Elements Area  */}

            <div className="container last-text">
                <h1>Adventures begin April 2023</h1>
            </div>
               

                <Separator />
                
                 
               {/*} <FooterTwo /> */}
                <Copyright />
            </main>
        </>
    )
}

export default TravelAgency;
