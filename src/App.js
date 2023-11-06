import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Themes from './components/Theme';
import Country from './pages/Country';
import Page404 from './pages/Page404';

function App() {

  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <ThemeProvider theme={Themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/country/:countryName' element={<Country />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router >
  );
}

export default App;
