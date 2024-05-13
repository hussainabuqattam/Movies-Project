import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import Movie_logo from '../Image/Movie_logo.png'
import AxiosFetch from '../CustomHooks/AxiosFetch';
import { Audio } from 'react-loader-spinner'

export const MovieCard = () => {
   const [data] = AxiosFetch('https://api.themoviedb.org/3/movie/popular?api_key=9544246f59fa1bf2818edc3fc4629fa2&language=en-US&page=1')
   if (!data || !data.results) {
     return <div className='spiner_style'><Spinner animation="border"  variant="secondary" /></div>

   }
 
   return (
     <Row>
       {data.results.length >= 1 ? (
         data.results.map((item) => (
           <Col key={item.id} md={3}>
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
           </Col>
         ))
       ) : (
         <h1>No Data</h1>
       )}
     </Row>
   );
 };