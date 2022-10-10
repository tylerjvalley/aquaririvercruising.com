import React from 'react';
import SEO from "../common/SEO";

import { FiArrowRight } from "react-icons/fi";

import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';


import Separator from "../elements/separator/Separator";
import Table from 'react-bootstrap/Table';

import ScrollAnimation from "react-animate-on-scroll";



const Map = () => {
    return (
        <>
            <SEO title="Map" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                <img src="./images/service/map.jpg" className="map-picture" />

                

                <Separator />
                 
                <Table bordered hover className="table events-table">
                    <tbody>
                        <tr>
                            <td>
                                <img style={{height: "200px", width: "200px"}} src="./images/service/gent.jpg" />
                            </td>
                            <td>
                                <h3>Gent</h3>
                                <p>Belgium</p>
                            </td>
                            <td>
                                <p>Closest Major Airport: <strong>BRU</strong> (Brussels-Zaventem)</p>
                                <p>direct trains from airport to Gent-Sint-Pieters (1 - 2 h)</p>
                            </td>
                            <td>
                                <p>Sat, <strong>April 8, 2023</strong></p>
                                <p className="highlighted">"Good Friday"</p>
                                <p>arr: <strong>08.00 h</strong> (8 a.m.)</p>
                                <p>dep: <strong>22.00 h</strong> (10 p.m.)</p>
                                <p className="docking">Docking: TBA</p>
                            </td>
                            <td style={{width: "15%"}}></td>
                        </tr>
                        <tr>
                            <td>
                                <img style={{height: "200px", width: "200px"}}src="./images/service/bossuit.jpg" />
                            </td>
                            <td>
                                <h3>Bossuit</h3>
                                <p>Belgium</p>
                            </td>
                            <td>
                                <p>Closest Major Airport: <strong>BRU</strong> (Brussels-Zaventem)</p>
                                <p>no direct trains</p>
                            </td>
                            <td>
                                <p>Sat, <strong>April 9, 2023</strong></p>
                                <p className="highlighted">"Vilmy Ridge Day (CA)"</p>
                                <p>arr: <strong>05.00 h</strong> (5 a.m.)</p>
                                <p>dep: <strong>9.00 h</strong> (9 a.m.)</p>
                                <p className="docking">Docking: TBA</p>
                            </td>
                            <td style={{width: "15%"}}>
                                <p className="red">Transfer to Vimy Ridge for interested participants <strong>Dawn Service</strong> visit of memorial, WWI sites.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img style={{height: "200px", width: "200px"}}src="./images/service/oudenaarde.jpg" />
                            </td>
                            <td>
                                <h3>Oudenaarde</h3>
                                <p>Belgium</p>
                            </td>
                            <td>
                                <p>Closest Major Airport: <strong>BRU</strong> (Brussels-Zaventem)</p>
                                <p>direct trains from airport to Ourdenaarde (1.5 h)</p>
                            </td>
                            <td>
                                <p>Sat, <strong>April 9, 2023</strong></p>
                                <p className="highlighted">"Vilmy Ridge Day (CA)"</p>
                                <p>arr: <strong>11.30 h</strong> (11:30 a.m.)</p>
                                <p>dep: <strong>22.00 h</strong> (10 p.m.)</p>
                                <p className="docking">Docking: TBA</p>
                            </td>
                            <td style={{width: "15%"}}>
                                <p className="red">Excursion to <strong>Ypres</strong> and <strong>Flanders Firlds</strong></p>
                                <p className="red"><strong>Last Post Ceremony</strong> Ypres</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img style={{height: "200px", width: "200px"}}src="./images/service/antwerp.jpg" />
                            </td>
                            <td>
                                <h3>Antwerp</h3>
                                <p>Belgium</p>
                            </td>
                            <td>
                                <p>Closest Major Airport: <strong>BRU</strong> (Brussels-Zaventem)</p>
                                <p>direct trains from airport to Antwerp (30 min)</p>
                            </td>
                            <td>
                                <p>Sun, <strong>April 10, 2023</strong></p>
                                <p className="highlighted">"Easter Sunday"</p>
                                <p>arr: <strong>10.00 h</strong> (10 a.m.)</p>
                                <p>dep: <strong>23.00 h</strong> (11 p.m.)</p>
                                <p className="docking">Docking: Scheldekai and Kattendijkdock</p>
                            </td>
                            <td style={{width: "15%"}}>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img style={{height: "200px", width: "200px"}}src="./images/service/maastricht.jpg" />
                            </td>
                            <td>
                                <h3>Maastricht</h3>
                                <p>the Netherlands</p>
                            </td>
                            <td>
                                <p>Closest Major Airport: <strong>BRU</strong> (Brussels-Zaventem)</p>
                                <p><strong>DUS</strong> (Dusseldorf)</p>
                                <p><strong>CGN</strong> (Koln-Bonn)</p>
                                
                                <p>no direct trains to any airport</p>
                            </td>
                            <td>
                                <p>Mon, <strong>April 11, 2023</strong></p>
                                <p className="highlighted">"Easter Monday"</p>
                                <p>arr: <strong>11.00 h</strong> (11 a.m.)</p>
                                <p>dep: <strong>23.00 h</strong> (11 p.m.)</p>
                                <p className="docking">Docking: TBA</p>
                            </td>
                            <td style={{width: "15%"}}>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img style={{height: "200px", width: "200px"}}src="./images/service/nijmegen.jpg" />
                            </td>
                            <td>
                                <h3>Nijmegen</h3>
                                <p>the Netherlands</p>
                            </td>
                            <td>
                                <p>Closest Major Airport: <strong>AMS</strong> (Amsterdam-Schipol)</p>
                        
                                <p>direct trains to the airport (1.5 h)</p>
                            </td>
                            <td>
                                <p>Tue, <strong>April 12, 2023</strong></p>
                                <p className="highlighted">"Easter Monday"</p>
                                <p>arr: <strong>11.00 h</strong> (11 a.m.)</p>
                                <p>dep: <strong>23.00 h</strong> (11 p.m.)</p>
                                <p className="docking">Docking: TBA</p>
                            </td>
                            <td style={{width: "15%"}}>
                                <p className="highlighted-blue">"Scenic Sailing"</p>
                                <p className="blue">prior to arrival in Nijmegen</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img style={{height: "200px", width: "200px"}}src="./images/service/rotterdam.png" />
                            </td>
                            <td>
                                <h3>Rotterdam</h3>
                                <p>the Netherlands</p>
                            </td>
                            <td>
                                <p>Closest Major Airport: <strong>AMS</strong> (Amsterdam-Schipol)</p>
                        
                                <p>direct trains to the airport (30 min)</p>
                            </td>
                            <td>
                                <p>Wed, <strong>April 13, 2023</strong></p>
                                <p>arr: <strong>10.00 h</strong> (10 a.m.)</p>
                                <p>Thu, <strong>April 14, 2023</strong></p>
                                <p>dep: <strong>01.00 h</strong> (1 a.m.)</p>
                                <p className="docking">Docking: TBA</p>
                            </td>
                            <td style={{width: "15%"}}>
                                <p className="highlighted-blue">"Scenic Sailing"</p>
                                <p className="blue">prior to arrival in Rotterdam</p>
                                <p className="blue"><strong>"Harbour Cruise</strong></p>
                                <p className="highlighted-orange">Motel Mozaique Festival</p>
                                <p className="orange">Music, Art, Poetry, Dance, etc</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img style={{height: "200px", width: "200px"}}src="./images/service/amsterdam-canals.jpg" />
                            </td>
                            <td>
                                <h3>Amsterdam</h3>
                                <p>the Netherlands</p>
                            </td>
                            <td>
                                <p>Closest Major Airport: <strong>AMS</strong> (Amsterdam-Schipol)</p>
                        
                                <p>direct trains to the airport (15 min)</p>
                            </td>
                            <td>
                                <p>Wed, <strong>April 13, 2023</strong></p>
                                <p>arr: <strong>08.00 h</strong> (8 a.m.)</p>
                                <p>Thu, <strong>April 14, 2023</strong></p>
                                <p>dep: <strong>01.00 h</strong> (1 a.m.)</p>
                                <p className="docking">Docking: TBA</p>
                            </td>
                            <td style={{width: "15%"}}>
                                
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>


                
                {/* End Brand Area  */}
               
                <Copyright />
            </main>
        </>
    )
}
export default Map;
