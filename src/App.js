import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NavBar from './components/NavBar';
import FoodMenu from './views/FoodMenu';
import Premium from './views/Premium';
import Stats from './views/Stats';
import Timer from './views/Timer';
import Until from './views/Until';
import After from './views/After';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#68859d',
      contrastText: '#fff',
    },
    purpel: {
      main: '#686A9D',
      contrastText: '#fff',
    },
    good: {
      main: '#859D68',
      contrastText: '#fff',
    },
    bad: {
      main: '#9D6885',
      contrastText: '#fff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <CssBaseline />  */} {/* uncomment if you want to use material UI */}
        <NavBar />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/food-menu" element={<FoodMenu />} />
            <Route index path="/" element={<Home />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="timer/until" element={<Until />} />
            <Route path="/until" element={<Until />} />
            <Route path="timer/after" element={<After />} />
            <Route path="/until" element={<After />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
