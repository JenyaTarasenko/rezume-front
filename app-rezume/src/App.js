import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'
import DetailPage from './pages/Detail'



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/projects/:id" element={<DetailPage/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
