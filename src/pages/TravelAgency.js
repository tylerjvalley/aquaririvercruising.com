import React, {useState} from "react";
import SEO from "../common/SEO";



import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";

import AboutFour from '../elements/about/AboutFour';
import GalleryOne from "../elements/gallery/GalleryOne";
import Gallery from "../elements/gallery/Gallery";
import SubscribeModal from "../components/subscribeModal";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



const BannerData = [
    {
        image: "images/service/cologne-night.jpg",
        title: "Imagine staying in a hotel that moves",
        description: "while you explore Europe your way"
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
        title: "Travel changes us in more ways than you realize.",
        description: "With Aquari River Cruising, the style of river travel is changing too."
    }
]


const PopupData = [
    {
        id: "01",
        image: "images/service/dining.jpg",
        title: "It is up to you where you want to dine",
        description: "Have a meal at a cozy restaurant in the center of town",
        description2: "Or have a comfortable dinner in our on-board restaurant"
    },
    {
        id: "02",
        image: "images/service/friends-pexels.jpg",
        title: "The world has changed, it's time for a new travel style",
        description: "Join and leave when and where you want",
        description2: "Aquari is not a river cruise, but river cruising"
    },
    {
        id: "03",
        image: "images/service/girl-traveling.jpg",
        title: "Everyone has their own idea of exploration",
        description: "Aquari offers solutions to multi-city traveling",
        description2: "Travel to the beat of your own adventure"
    }
   
]

const PopupData2 = [
    {
        id: "01",
        image: "images/service/strasbourg-with-peeps.jpg",
        //linkText: "Meet our team and crew!"
        title: "Traveling is peace",
        description: "Here at Aquari we believe that traveling not only brings peace to our lives, it allows us to see people in a different perspective. Traveling encourages us to expand our horizons, see how other people live their lives, and experience these wonderful cultures. This understanding is the underlying cause for respect towards others and peace in this world."
    },
    
]



const TravelAgency = () => {

    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
        toast.success('test');
    }

    const handleAlert = (msg) => {
        toast.success(msg)
    }
    
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

                <div className="container subscribe">
                    <h6>Click Here for more updates!</h6>
                    <button onClick={handleButtonClick}>Subscribe</button>
                    <SubscribeModal 
                        alert={handleAlert}
                        open={showModal}
                        investors={false}
                        close={() => setShowModal(false)}
                    />
                </div>

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
