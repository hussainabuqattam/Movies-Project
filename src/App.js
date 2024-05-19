import { Container } from 'react-bootstrap';
import { Navbars } from './Components/Navbars';
import { MovieCard } from './Components/MovieCard';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { MovieDetaiils } from './Components/MovieDetaiils';

function App() {
  return (
   <div>
      <Navbars/>
      <Container>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieCard/>}/>
                <Route path="/movie/:id" element={<MovieDetaiils />} />
            </Routes>
        </BrowserRouter>
      </Container>      
   </div>
);
}

export default App;
