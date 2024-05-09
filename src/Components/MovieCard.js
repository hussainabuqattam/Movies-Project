import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Movie_logo from '../Image/Movie_logo.png'
export const MovieCard = () => {
const [isHovered, setIsHovered] = useState(false);


  return (
   <Row>
      <Col md={3}>
         <div className='Card_Hover'>
             <div 
             className='img_hover' 
             onMouseEnter={() => setIsHovered(true)} 
             onMouseLeave={() => setIsHovered(false)}
             >
                <a href=''>
                   <img src={Movie_logo} 
                   alt='movie'
                   width='100%' 
                   height='300px' 
                   />
                </a>
             </div>
             { isHovered ? (
             <div className='text_hover'>
                <div>
                    <h3>Movie Titlle : need for speed</h3>
                    <p>Movie des : 2020</p>
                </div>
             </div>) : <></>}
         </div>
      </Col>
   </Row>
)
}
