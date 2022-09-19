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
                                <h4 className="title">You're not a tourist with us, you're a traveler.</h4>
                              
                                <ul className="feature-list">
                                    <li>
                                        <div className="title-wrapper">
                                            
                                            <p className="text">- Unpack only once, the rest of the time your hotel will travel with you.</p>
                                            <p className="text">- Scenic sailings give you views unattainable by land.</p>
                                            <p className="text">- Made friends onland? <br/> Bring them on board for dinner or have a drink in the lounge.</p>
                                            <p className="text">- With our set sailing schedule, you know where we're going and you plan your exploration around it.</p>
                                            <p className="text">- Our Concierge can support you in planning your activities at each destination.</p>
                                            <p className="text">- Aquari plans with local events in mind to get you the most out of you European discovery.</p>
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
