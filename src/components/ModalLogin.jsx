import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" className='border border-light text-light btn btn-secondary' onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                placeholder=""
                // value={email}
                name="email"
                // onChange={handleChange}
                className="px-3 py-2 w-100 rounded"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                placeholder=""
                // value={email}
                name="email"
                // onChange={handleChange}
                className="px-3 py-2 w-100 rounded"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose} className="w-100">
          <Link to="/home">
              Login
          </Link>
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin