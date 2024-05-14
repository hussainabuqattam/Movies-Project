import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navbars } from './Components/Navbars';
import { MovieCard } from './Components/MovieCard';
import { Paginations } from './Components/Paginations';
import axios from 'axios';
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
          <MovieCard data={res}/>
        </Container>
        <Paginations page_movie={page_movie} page={page} />
   </div>
);
}

export default App;
