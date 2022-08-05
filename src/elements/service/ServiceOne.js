import React from 'react';
import { FiBriefcase, FiDollarSign, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiBriefcase />,
        title: 'Tailor your vacation',
        description: "With Aquari you can tailor your vacation according to your interests and cut out what you don't care about."
    },
    {
        icon: <FiDollarSign />,
        title: 'Save Money',
        description: "In the end it won't be more expensive than a package deal. The opposite, in fact!"
    },
    {
        icon: <FiMap />,
        title: 'Pay as you go',
        description: 'Work out your itinerary and your budget. You pay as you go! The vacation is truly yours!'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;