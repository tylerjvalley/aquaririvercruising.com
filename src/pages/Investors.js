import React, {useState} from 'react';
import SEO from "../common/SEO";

import { FiArrowRight } from "react-icons/fi";

import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';
import Alert from 'react-bootstrap/Alert';

import Separator from "../elements/separator/Separator";
import SubscribeModal from "../components/subscribeModal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';






const Investors = () => {
    

    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
        toast.success('test');
    }

    const handleAlert = (alert) => {
        if (alert) {
            setShowAlert(true);
        }
    }
    return (
        <>
            <SEO title="Company" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-750">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <h1 className="title theme-gradient display-one">Interested in being part of the journey?</h1>
                                    <ul className="list-icon">
                                        <li style={{color: "black", fontWeight: 600}}>Opportunities to invest are still available.  Investing will push our growth and expand the fleet.</li>
                                        <li style={{color: "black", fontWeight: 600}}>We are changing the industry, join us and be part the Aquari future with great benefits for investors.</li>
                
                                    </ul>
                                
                                    <div style={{cursor: "pointer"}} className="button-group mt--40" onClick={handleButtonClick}>
                                        <a className="btn-default btn-medium round btn-icon">Click Here <i className="icon"><FiArrowRight /></i></a> 
                                    </div> 
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <div className="frame-image">
                                    <img src="./images/service/exterior8.jpg" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                

                <SubscribeModal 
                        alert={handleAlert}
                        open={showModal}
                        investors={true}
                        close={() => setShowModal(false)}
                />
                <Alert hidden={!showAlert} style={{position: "fixed", top: "90px", right: "90px", padding: "20px", zIndex: 100}}
                   dismissable="true"
                   variant="success">
                    <h5 style={{cursor: "pointer", position: "absolute", color: "black", top: 0, right: "11px"}} onClick={() => setShowAlert(false)}>X</h5>
                    Information Saved. Stay tuned for updates!
                </Alert>


                <Separator />
                
        


                
                {/* End Brand Area  */}
               
                <Copyright />
            </main>
        </>
    )
}
export default Investors;
