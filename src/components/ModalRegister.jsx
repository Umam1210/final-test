import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalRegister() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Register
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                // value={name}
                                name="name"
                                // onChange={handleChange}
                                className="px-3 py-2 w-100 rounded"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <input
                                type="email"
                                placeholder="Email"
                                // value={email}
                                name="email"
                                // onChange={handleChange}
                                className="px-3 py-2 w-100 rounded"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3" controlId="exampleForm.ControlTextarea1"
                        >
                             <Form.Label>Password</Form.Label>
                            <input
                                type="password"
                                placeholder="Password"
                                // value={password}
                                name="password"
                                // onChange={handleChange}
                                className="px-3 py-2 w-100 rounded"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3" controlId="exampleForm.ControlTextarea1"
                        >
                             <Form.Label>Phone</Form.Label>
                            <input
                                type="text"
                                placeholder="Phone"
                                // value={phone}
                                name="phone"
                                // onChange={handleChange}
                                className="px-3 py-2 w-100 rounded"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3" controlId="exampleForm.ControlTextarea1"
                        >
                             <Form.Label>Address</Form.Label>
                            <input
                                type="text"
                                placeholder="Address"
                                // value={address}
                                name="address"
                                // onChange={handleChange}
                                className="px-3 py-2 w-100 rounded"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} className="w-100">
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalRegister