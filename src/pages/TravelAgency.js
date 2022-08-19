import React from "react";
import SEO from "../common/SEO";
import {Link} from "react-router-dom";

import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ServiceOne from '../elements/service/ServiceOne';
import AboutOne from '../elements/about/AboutOne';
import AboutTwo from '../elements/about/AboutTwo';
import AboutFour from '../elements/about/AboutFour';
import AboutThree from '../elements/about/AboutThree';
import AboutFive from '../elements/about/AboutFive';
import AboutSix from "../elements/about/AboutSix";
import Mission from '../elements/about/Mission';
import GalleryOne from "../elements/gallery/GalleryOne";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);

const BannerData = [
    {
        image: "images/service/waterways2.jpg",
        title: "Imagine, we are moving your hotel from city center to city center...",
        description: "...while you are dreaming of a new adventure in the next port of call!"
    },
    {
        image: "images/bg/river-cruise.jpg",
        title: "Yes, savvy traveler!",
        description: "Our staterooms have all the confort of an excellent quality hotel room, and there are no extra charges for the river view!",
        link: "/accomodations",
        linkText: "Accommodation",
        image2: "/images/service/ship.png"
    },
    {
        image: "images/service/exterior8.jpg",
        title: "We also sail with our ships through breathtaking, and ever-changing scenery!",
        description: "Enjoy this relaxing travel style from the Sun Deck, the Observation Lounge, or even your stateroom and watch as the landscape passes by..."
    },
]


const PopupData = [
    {
        id: "01",
        image: "images/service/leisure.png",
        linkText: "Leisure Traveler & Planning",
        link: "/Aquari/leisure-travel"
    },
    {
        id: "02",
        image: "images/service/calendar.png",
        linkText: "Business Traveler",
        link: "/Aquari/business-travel"
    },
   
]

const PopupData2 = [
    {
        id: "01",
        image: "images/service/your-vacation.png",
        linkText: "Meet our team and crew!"
    },
    {
        id: "02",
        image: "images/service/friendships.png",
        linkText: "Read more about us!",
        link: "/Aquari/our-mission"
    }
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
                                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
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

                {/* Start Service Area  */}
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
                    <div className="container">
                        <div className="row mt_dec--30 row--15">
                            {PopupData2.map((item) => (
                                <div className="col-12 mt--30" key={item.id}>
                                    {/* images: 1270 x 950 */}
                                    <GalleryOne galleryItem={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                {/* Start Elements Area  */}
                <h1 style={{marginBottom: "50px", textAlign: "center"}}>Traveling for business or leisure?</h1>
                <div className="rwt-gallery-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row mt_dec--30 row--15">
                            {PopupData.map((item) => (
                                <div className="col-12 mt--30" key={item.id}>
                                    {/* images: 1270 x 950 */}
                                    <GalleryOne galleryItem={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Elements Area  */}


               

                <Separator />
                <div className="rwt-gallery-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row mt_dec--30 row--15">
                            
                            <div className="col-12 mt--30" key={"07"}>
                                {/* images: 1270 x 950 */}
                                <div className="rn-gallery icon-center">
                                    <div className="thumbnail">
                                        <img className="radius-small" src={`${process.env.PUBLIC_URL + '/images/service/closing.png'}`} alt="Corporate Image" />
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                 
               {/*} <FooterTwo /> */}
                <Copyright />
            </main>
        </>
    )
}

export default TravelAgency;
