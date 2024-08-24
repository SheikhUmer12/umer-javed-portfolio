import { Box } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Box
      sx={{
        p: { xs: '15px', lg: '40px' },
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          background: '#011627',
          border: '1px solid #1E2D3D',
          borderRadius: '8px',
          height: { xs: '95vh', lg: '89vh' },

          position: 'relative',
          display: 'flex',
          flexFlow: 'column',
        }}
      >
        <Header />
        <Box
          sx={{
            flex: '1 1 auto',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Box
          sx={{
            flex: '0 1 40px',
          }}
        >
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
