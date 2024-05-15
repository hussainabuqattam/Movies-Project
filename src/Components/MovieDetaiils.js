import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

export const MovieDetaiils = () => {
    const [details, setDetail] = useState();
    const params = useParams();
const MoviesDetail = async ()=>{
    const mov = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9544246f59fa1bf2818edc3fc4629fa2&language=en`)
    setDetail(mov.data)
    };
 useEffect(()=>{MoviesDetail()},[])
 if (!details) {
    return <div className='justify-content-center d-flex mt-5'><Spinner animation="border"  variant="secondary" /></div>
  }
  return (
    <div className="movie-detail-container">
     <Row className="justify-content-center">
        <Col md="8" className="mt-4">
          <Card className="card-details">
            <Row noGutters>
              <Col md={4}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  alt={details.title}
                  className="img-movie"
                />
              </Col>
              <Col md={8}>
                <Card.Body className="text-center">
                  <Card.Title className="card-text-details">{details.title}</Card.Title>
                  <Card.Text className="card-text-details">{details.release_date}</Card.Text>
                  <Card.Text className="card-text-details">{details.vote_count} Votes</Card.Text>
                  <Card.Text className="card-text-details">{details.vote_average} Rating</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md="8">
          <Card className="card-story">
            <Card.Body>
              <Card.Title className="card-text-title">Story</Card.Title>
              <Card.Text className="card-text-story">{details.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md="8" className="d-flex justify-content-between">
          <Link to="/">
            <Button variant="primary" >
              Home Page
            </Button>
          </Link>
          <a href={details.homepage} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="custom-btn Watch_btn">
              Watch Movie
            </Button>
          </a>
        </Col>
      </Row>
    </div>
  )
}
