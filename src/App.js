import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbars } from './Components/Navbars';
import { MovieCard } from './Components/MovieCard';
import { Paginations } from './Components/Paginations';

function App() {
  return (
   <div>
        <Navbars/>
        <Container>
          <MovieCard/>
        </Container>
        <Paginations/>
   </div>
);
}

export default App;
