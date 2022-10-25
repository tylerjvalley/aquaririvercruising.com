import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';



export default function SubscribeModal(props) {

  const form = useRef();
    const { 
        open,
        close,
        alert,
        investors,
      } = props;

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [showAlert, setShowAlert] = useState(false);

      const handleNameInput = (e) => {
        setName(e.target.value);
      }

      const handleEmailInput = (e) => {
       setEmail(e.target.value);
      }

      const handleSubmit = () => {
        if (props.investors) {
          emailjs.sendForm('service_dvvyq7g', 'template_8vjtxdc', form.current, 'i_-efWng_8s_PIlOi')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        })
        } else {
          emailjs.sendForm('service_076kj7j', 'template_8vjtxdc', form.current, 'i_-efWng_8s_PIlOi')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          })
        }
        
      
        props.alert(true);
        props.close(false);
      }

      const handlePhoneInput = () => {

      }
    
      const handleClose = () => {
        props.close(false);
      }

  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {investors ? (
                <>
                <Modal.Title style={{color: "black"}}>Enter your name, email, and phone number to get more information about investing with us!</Modal.Title>
                <p style={{color: "black", fontWeight: 600}}>We'll send you updates on itineraries, events in the cities we'll be going to, and more!</p>
                </>
            ) : (
                <>
                <Modal.Title style={{color: "black"}}>Enter your name and Email to receive updates from Aquari!</Modal.Title>
                <p style={{color: "black", fontWeight: 600}}>We'll send you updates on itineraries, events in the cities we'll be going to, and more!</p>
                </>
            )}
          
        </Modal.Header>
        <Modal.Body>
        <Form ref={form}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First and Last name</Form.Label>
                <Form.Control name="user_name" style={{border: "1px solid black"}} type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="user_email" style={{border: "1px solid black"}} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            {investors ? (
                 <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name="user_phone" style={{border: "1px solid black"}} type="number" placeholder="(xxx)-xxx-xxxx" />
                </Form.Group>
            ) : ''}
           
        </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

