import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function SubscribeModal(props) {

    const { 
        open,
        close,
        alert,
        investors,
      } = props;

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");

      const handleNameInput = (e) => {
        setName(e.target.value);
      }

      const handleEmailInput = (e) => {
       setEmail(e.target.value);
      }

      const handleSubmit = () => {/*
        const astraClient = createClient({
            astraDatabaseId: "50fe5c21-48f2-4356-a9c3-44d1ea6cae6c",
            astraDatabaseRegion: "us-east1",
            applicationToken: "AstraCS:rzYPKIjGZvwXIjcAIjoxyFtR:6bbb9aa5b2c7963bab2317c809c7b24b8dd64ec1dfa9ebabce410d20d5edfea0@1",
        });
        const emailCollection = astraClient.namespace("aquari").collection("emails");

    // create a new user (specifying documentId)

        try {
            const user = emailCollection.create("test@email.com", {
                name: "cliff",
            });
            return {
                statusCode: 200,
                body: JSON.stringify(user)
            }
        } catch (e) {
            console.log(e);
            return {
                statusCode: 500,
                body: JSON.stringify(e)
            }
        } */
        props.alert('Name and Email saved, stay tuned for more updates!')
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
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First and Last name</Form.Label>
                <Form.Control onChange={handleNameInput} style={{border: "1px solid black"}} type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleEmailInput} style={{border: "1px solid black"}} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            {investors ? (
                 <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={handlePhoneInput} style={{border: "1px solid black"}} type="number" placeholder="(xxx)-xxx-xxxx" />
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

