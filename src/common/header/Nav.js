import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import useStickyHeader from "./useStickyHeader";

const Nav = (props) => {

    const { 
        disableScroll
      } = props;

    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    const ref = useRef();
    let [check] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `mainmenu ${(sticky && check && !disableScroll) ? 'scrolled' : ''}`
    

    return (
        <ul className={`${headerClasses}`}>
            <li><Link to="/">Home</Link></li> 
            
            <li className="has-droupdown"><Link to="#">About Us</Link>
                <ul className="submenu">
                    <li><Link to="/our-mission">Our Mission</Link></li>
                    {/*<li><Link to="/blog-grid">Crew and Team</Link></li> */}
                    <li><Link to="/accomodations">Accomodations</Link></li>
                </ul>
            </li>
            <li><Link to="/sailing-schedule">Sailing Schedule</Link></li> 
            <li><Link to="/investors">Investors</Link></li> 
            <li><Link to="/map">Map</Link></li> 
            <li><Link to="/booking">Booking</Link></li>
        </ul>
    )
}
export default Nav;
