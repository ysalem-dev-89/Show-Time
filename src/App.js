import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
import SeasonDetails from './components/SeasonDetails';

function App() {

  const [page, setPage] = useState(null);
  return (
    <Router>
      <div className='App'>
        <Header page={page}/>
        <Routes>
          <Route path='/' element={<Home setPage={setPage}/>} />
          <Route path='/shows/:id' element={<ShowDetails setPage={setPage} />} />
          <Route path='/shows/season/:id' element={<SeasonDetails setPage={setPage}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
