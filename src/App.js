import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navbars } from './Components/Navbars';
import { MovieCard } from './Components/MovieCard';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useLocation, useParams, } from 'react-router-dom'
import { MovieDetaiils } from './Components/MovieDetaiils';

function App() {
  const [res,setres] = useState()
  const [page,setpage] = useState()
  // all  movies 
  const movieapi = async ()=>{
    const mov = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9544246f59fa1bf2818edc3fc4629fa2&language=en-US&page=1')
    setres(mov.data.results);
    setpage(mov.data.total_pages)
  };
  //page_movies
  const page_movie = async (Page_num)=>{
    const mov = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9544246f59fa1bf2818edc3fc4629fa2&language=en-US&page=${Page_num}`)
    setres(mov.data.results);
  }; 
   //serch movies
    const search = async (word) => {
      if(word == ""){
        movieapi();
      }else {
         const res =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9544246f59fa1bf2818edc3fc4629fa2&query=${word}&language=ar`)
         setres(res.data.results) 
         setpage(res.data.total_pages)
        }
      }
    useEffect(()=>{movieapi()},[])
  return (
   <div>
      <Navbars serchapi={search}/>
      <Container>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieCard data={res} page_movie={page_movie} page={page} />}/>
                <Route path="/movie/:id" element={<MovieDetaiils />} />
            </Routes>
        </BrowserRouter>
      </Container>      
   </div>
);
}

export default App;
