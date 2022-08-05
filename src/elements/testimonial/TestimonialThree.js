import React from 'react';
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
    {
        form: "Highly Recommend",
        description: "Aquari was lit, I cruised over to Amsterdam and went nuts",
        name: "Quinndale Dindale",
        subtitle: "Gary, Indiana",
        image: "vacation"
    },
    {
        form: "Absolutely Must do",
        description: "Aquari is the best way to see Europe.",
        name: "John DooDaa",
        subtitle: "Chipley, Florida",
        image: "dude"
    },
    {
        form: "Guaranteed best vacation ever",
        description: "Can't wait to go back!",
        name: "Janen Joppoly",
        subtitle: "Las Vegas, Nevada",
        image: "beach"
    },
]
const TestimonialThree = ({teamStyle}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Slider className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60" {...slickDot}>
                    {TestimonialData.map((data, index) => (
                        <div key={index} className={`testimonial-style-two ${teamStyle}`}>
                            <div className="row align-items-center row--20">
                                <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                    <div className="content mt_sm--40">
                                        <span className="form">{data.form}</span>
                                        <p className="description">{data.description}</p>
                                        <div className="client-info">
                                            <h4 className="title">{data.name}</h4>
                                            <h6 className="subtitle">{data.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`${process.env.PUBLIC_URL}/images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default TestimonialThree;




















