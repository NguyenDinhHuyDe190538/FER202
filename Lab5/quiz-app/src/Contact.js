import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Container fluid className="px-4 mt-4">
            {/* Form kích hoạt chế độ Validation của Bootstrap */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* Hàng 1: First name, Last name, Username */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="valFirstName">
                        <Form.Label className="text-dark">First name</Form.Label>
                        <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                        <Form.Control.Feedback className="text-success" style={{ fontSize: '0.85rem' }}>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="valLastName">
                        <Form.Label className="text-dark">Last name</Form.Label>
                        <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                        <Form.Control.Feedback className="text-success" style={{ fontSize: '0.85rem' }}>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="valUsername">
                        <Form.Label className="text-dark">Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend" className="bg-light text-secondary">@</InputGroup.Text>
                            <Form.Control type="text" placeholder="Username" required />
                            <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontSize: '0.85rem' }}>
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                {/* Hàng 2: City, State, Zip */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="valCity">
                        <Form.Label className="text-dark">City</Form.Label>
                        <Form.Control type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontSize: '0.85rem' }}>
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="valState">
                        <Form.Label className="text-dark">State</Form.Label>
                        <Form.Control type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontSize: '0.85rem' }}>
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="valZip">
                        <Form.Label className="text-dark">Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontSize: '0.85rem' }}>
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* Điều khoản Checkbox */}
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        className="text-danger"
                        style={{ fontSize: '0.95rem' }}
                    />
                </Form.Group>

                {/* Nút Submit Form màu xanh nước biển */}
                <Button type="submit" variant="primary" className="px-3 py-2" style={{ fontSize: '1rem', borderRadius: '4px' }}>
                    Submit form
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;