import React from 'react';
import VideoTwo from '../video/VideoTwo';
import { BiWater } from "react-icons/bi";
import { FcLandscape } from "react-icons/fc";

const PopupData = [
    {
        id: "01",
        image: "./images/blog/mountains.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=RJWk32Flsps',
        ],
    }
]

const AboutFour = ({image}) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-6">
                        {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>
                                <VideoTwo imagename={`${image}`} galleryItem={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title"><strong>Why Aquari?</strong> We ask ourselves daily, how we can give you a better experience!</h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="icon">
                                            <BiWater />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">We start, when sailing...</h4>
                                            <p className="text">...you will be on a spectacular river cruise ship!</p>
                                            <p className="text">...you will enjoy the most scenic river stretches!</p>
                                            <p className="text">...you will arrive in the town center!</p>
                                            <p className="text">...you will relax and enjoy yourself!</p>
                                            <p className="text">...and you <strong>won't</strong> get sea-sick! as there are no waves on rivers!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FcLandscape />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">When Docked...</h4>
                                            <p className="text">...you can stay in a centrally located hotel!</p>
                                            <p className="text">...you can relax and plan your discoveries!</p>
                                            <p className="text">...you will be able to explore the town on foot!</p>
                                            <p className="text">...you can have a bite or two aboard!</p>
                                            <p className="text">...you can meet people!</p>
                                            <p className="text">...you can enjoy all there is in town!</p>
                                            <p className="text">...and you are the only one to decide where to go and what to explore!</p>
                                        </div>
                                    </li>
                                </ul>
                                {/*}
                                <div className="about-btn mt--30">
                                    <a className="btn-default" href="#">About Our Doob</a>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour
