import React, { useEffect } from 'react'
import Movie_logo from '../Image/Movie_logo.png'
import { Row, Navbar, Container, Col, Button, Form, Spinner } from 'react-bootstrap'

export const Navbars = ({serchapi}) => {
const SerchInput = (e) =>{
  serchapi(e);
}
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className='Nav_logo'>
            <img
              alt=""
              src={Movie_logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            Movie Scope
          </Navbar.Brand>
          <Form className="d-flex Nav_Serch">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => SerchInput(e.target.value)}
            />
            <Button variant="outline" className='Button_Serch'>Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}
