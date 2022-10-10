import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 

import DigitalAgency from "./pages/DigitalAgency";

import BusinessTravel from './pages/BusinessTravel';

import TravelAgency from "./pages/TravelAgency";
import LeisureTravel from './pages/LeisureTravel';
import Accomodations from './pages/Accomodations';
import SailingSchedule from './pages/SailingSchedule';
import Map from './pages/Map';
import Investors from './pages/Investors';



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
                    <Route path={`${process.env.PUBLIC_URL + "/digital-agency"}`} exact component={DigitalAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-travel"}`} exact component={BusinessTravel}/>
                    <Route path={`${process.env.PUBLIC_URL + "/leisure-travel"}`} exact component={LeisureTravel}/>
                    <Route path={`${process.env.PUBLIC_URL + "/our-mission"}`} exact component={OurMission}/>
                    <Route path={`${process.env.PUBLIC_URL + "/sailing-schedule"}`} exact component={SailingSchedule}/>
                    <Route path={`${process.env.PUBLIC_URL + "/map"}`} exact component={Map}/>
                    <Route path={`${process.env.PUBLIC_URL + "/investors"}`} exact component={Investors}/>
                    {/*
                    <Route path={`${process.env.PUBLIC_URL + "/business-consulting"}`} exact component={HomeDefault}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-consulting-2"}`} exact component={BusinessConsulting2}/>
                    <Route path={`${process.env.PUBLIC_URL + "/corporate"}`} exact component={Corporate}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business"}`} exact component={Business}/>
                    <Route path={`${process.env.PUBLIC_URL + "/digital-agency"}`} exact component={DigitalAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/finance"}`} exact component={Finance}/>
                   
                    <Route path={`${process.env.PUBLIC_URL + "/marketing"}`} exact component={Marketing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/travel-agency"}`} exact component={TravelAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/consulting"}`} exact component={Consulting}/>
                    <Route path={`${process.env.PUBLIC_URL + "/seo-agency"}`} exact component={SeoAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/personal-portfolio"}`} exact component={PersonalPortfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/event-conference"}`} exact component={EventConference}/>
                    <Route path={`${process.env.PUBLIC_URL + "/creative-portfolio"}`} exact component={CreativePortfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/freelancer"}`} exact component={Freelancer}/>
                    <Route path={`${process.env.PUBLIC_URL + "/international-consulting"}`} exact component={InternationalConsulting}/>
                    <Route path={`${process.env.PUBLIC_URL + "/startup"}`} exact component={Startup}/>
                    <Route path={`${process.env.PUBLIC_URL + "/web-agency"}`} exact component={WebAgency}/>

                    Blog Part  
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} exact component={BlogGridView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-view"}`} exact component={BlogListView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid-sidebar"}`} exact component={BlogGridSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-sidebar"}`} exact component={BlogListSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`} exact component={BlogDetails}/>
                    <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} exact component={CategoryList}/>
                    <Route path={`${process.env.PUBLIC_URL + "/archive/:slug"}`} exact component={Author}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} exact component={TagList}/>

                    <Route path={`${process.env.PUBLIC_URL + "/elements"}`} exact component={Elements}/>
                    <Route path={`${process.env.PUBLIC_URL + "/button"}`} exact component={Button}/>
                    <Route path={`${process.env.PUBLIC_URL + "/service"}`} exact component={Service}/>
                    <Route path={`${process.env.PUBLIC_URL + "/counter"}`} exact component={CounterUp}/>
                    <Route path={`${process.env.PUBLIC_URL + "/progressbar"}`} exact component={Progressbar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/social-share"}`} exact component={Social}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team"}`} exact component={Team}/>
                    <Route path={`${process.env.PUBLIC_URL + "/testimonial"}`} exact component={Testimonial}/>
                    <Route path={`${process.env.PUBLIC_URL + "/timeline"}`} exact component={Timeline}/>
                    <Route path={`${process.env.PUBLIC_URL + "/accordion"}`} exact component={RnAccordion}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tab"}`} exact component={Tab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/pricing"}`} exact component={Pricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/split"}`} exact component={Split}/>
                    <Route path={`${process.env.PUBLIC_URL + "/call-to-action"}`} exact component={CalltoAction}/>
                    <Route path={`${process.env.PUBLIC_URL + "/video-popup"}`} exact component={Video}/>
                    <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} exact component={Gallery}/>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact}/>
                    <Route path={`${process.env.PUBLIC_URL + "/brand"}`} exact component={Brand}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-tab"}`} exact component={AdvanceTab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-pricing"}`} exact component={AdvancePricing}/>
                   

                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>
                    
                    
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-three-column"}`} exact component={portfolioThreeColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-full-width"}`} exact component={PortfolioFullWidth}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-layout"}`} exact component={PortfolioGrid}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-box-layout"}`} exact component={PortfolioBoxLayout}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-details/:id"}`} exact component={PortfolioDetails}/>
    */}

                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
