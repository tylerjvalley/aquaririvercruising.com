import React from 'react';



const AboutFour = ({image}) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <img style={{height: "600px", width: "100%", margin: "auto"}} src="/images/service/basel.jpg" alt="basel" />
            <div className="container">
                <div className="row m-auto align-items-center text-center">
                    <div className="col-lg-12 mt_md--40 mt_sm--40">
                        
                        <div className="content">
                            <div className="inner">
                                <h3 className="title">Reasons To Float With Aquari</h3>
                                <h4 className="title second">You're not a tourist with us; you're a traveler.</h4>
                              
                                <ul className="feature-list">
                                    <li className="text">Unpack only once, and the hotel will travel with you.</li>
                                    <li className="text">Scenic sailings provide views unattainable by land.</li>
                                    <li className="text">Made friends on land? <br/> Bring them aboard for dinner or have them join you for a drink in the lounge.</li>
                                    <li className="text">With our sailing schedule, you know where we're going and you plan your exploration around it.</li>
                                    <li className="text">Our Concierge can support you in planning your activities at each destination.</li>
                                    <li className="text">Aquari plans with local events in mind, so you can get the most out of your European discovery.</li>
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
