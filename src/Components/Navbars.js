import React, { useEffect } from 'react'
import Movie_logo from '../Image/Movie_logo.png'
import { Row, Navbar, Container, Col, Button, Form, Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AllMovies_type, search_type } from '../Redux/Type/type'
import { getMovies } from '../Redux/Action/MoviesAction'

export const Navbars = () => {
  const dispatch = useDispatch()
     //to search in api
  const search = async (word) => {
    if (word === "") {
      // all movies url api 
      dispatch(getMovies(AllMovies_type))
    } else {
      // serch movies url api 
      dispatch(getMovies(search_type, word, ''))
    }
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
              onChange={(e) => search(e.target.value)}
            />
            <Button variant="outline" className='Button_Serch'>Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}
