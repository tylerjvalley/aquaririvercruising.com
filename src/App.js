import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 


import BusinessTravel from './pages/BusinessTravel';

import TravelAgency from "./pages/TravelAgency";
import LeisureTravel from './pages/LeisureTravel';
import Accomodations from './pages/Accomodations';
import SailingSchedule from './pages/SailingSchedule';
import Map from './pages/Map';
import Investors from './pages/Investors';
import Booking from './pages/Booking';


import Staterooms from "./pages/Staterooms";

// Elements import Here 




// Import Css Here 
import './assets/scss/style.scss';
import OurMission from './pages/OurMission';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={TravelAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/staterooms"}`} exact component={Staterooms}/>
                    <Route path={`${process.env.PUBLIC_URL + "/accomodations"}`} exact component={Accomodations}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-travel"}`} exact component={BusinessTravel}/>
                    <Route path={`${process.env.PUBLIC_URL + "/leisure-travel"}`} exact component={LeisureTravel}/>
                    <Route path={`${process.env.PUBLIC_URL + "/our-mission"}`} exact component={OurMission}/>
                    <Route path={`${process.env.PUBLIC_URL + "/sailing-schedule"}`} exact component={SailingSchedule}/>
                    <Route path={`${process.env.PUBLIC_URL + "/map"}`} exact component={Map}/>
                    <Route path={`${process.env.PUBLIC_URL + "/investors"}`} exact component={Investors}/>
                    <Route path={`${process.env.PUBLIC_URL + "/booking"}`} exact component={Booking}/>
                    

                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
