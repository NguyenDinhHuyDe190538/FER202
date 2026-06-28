import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import News from './News';
import Quiz from './Quiz';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Thanh Điều Hướng Chuẩn Mẫu */}
        <Navbar bg="white" expand="lg" className="py-3">
          <Container fluid className="px-4">
            <Nav className="d-flex align-items-center" style={{ gap: '25px', fontSize: '1.15rem' }}>
              <Nav.Link as={Link} to="/" className="text-dark p-0" style={{ fontSize: '1.6rem', fontWeight: '400' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-muted p-0">About</Nav.Link>
              <Nav.Link as={Link} to="/news" className="text-muted p-0">News</Nav.Link>
              <Nav.Link as={Link} to="/quizzes" className="text-muted p-0">Quiz</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-muted p-0">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Các Tuyến Đường Định Tuyến */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/quizzes" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;