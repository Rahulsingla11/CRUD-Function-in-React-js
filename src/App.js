import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './comp/Nav';
import Form from './comp/Form';
import Update from './comp/Update';
import Footer from './comp/Footer';
import Details from './comp/Details';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/update/:postId" element={<Update />} />
          <Route path="/" element={<Details />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
