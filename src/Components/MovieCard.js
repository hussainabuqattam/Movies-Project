import React, {useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Paginations } from './Paginations';
import { useDispatch, useSelector } from 'react-redux';
import { AllMovies_type } from '../Redux/Type/type';
import { getMovies } from '../Redux/Action/MoviesAction';

export const MovieCard = () => {
  const [data, setdata] = useState();
  const dispatch = useDispatch()
  useEffect(()=>{
    // all movies api url data using dispatch 
    dispatch(getMovies(AllMovies_type))
  },[])
  const data_movies = useSelector(state => state.movies)
  useEffect(()=>{
    // save movies data in usestate and useeffect work when data changed 
    setdata(data_movies)
  },[data_movies])

   // if the data empity 
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
         <Paginations/>
     </Row>
   );
 };