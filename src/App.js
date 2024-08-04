import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
 // Import Bootstrap CSS
import About from './components/About';
import Contact from './components/Contact';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ResumeForm from './components/ResumeForm';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={
            <>
              <Header />
              <section id="hero"><Hero /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="resume"><Resume /></section>
              <section id="contact"><Contact /></section>
              <section id="contact-us"><ContactUs /></section>
              <Footer />
            </>
          } />
          {/* Resume Form Page */}
          <Route path="/login" element={<Login/>} />
            <Route path="/upload" element={
              <PrivateRoute>
                <ResumeForm/>
              </PrivateRoute>
            } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
