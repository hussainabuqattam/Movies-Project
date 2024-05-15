import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Paginations } from './Paginations';

export const MovieCard = ({data,page_movie,page}) => {
   if (!data) {
      return <div className='spiner_style'><Spinner animation="border"  variant="secondary" /></div>
    }
   return (
     <Row>
       {data.length >= 1 ? (
         data.map((item) => (
           <Col key={item.id} md={3}>
            <Link to={`movie/${item.id}`}>
             <div className='Card_overlay'>
               <div className='img_overlay'>
                 <img src={`https://image.tmdb.org/t/p/w500/` + item.poster_path} alt='movie logo' />
               </div>
               <div className='text_overlay'>
                 <div className='Overlay_desc'>
                   <h3>Title: {item.title}</h3>
                   <p>Rating: {item.vote_average}</p>
                   <p>Date: {item.release_date}</p>
                 </div>
               </div>
             </div>
             </Link>
           </Col>
         ))
       ) : (
         <h1>No Data</h1>
       )}
         <Paginations page_movie={page_movie} page={page} />
     </Row>
   );
 };