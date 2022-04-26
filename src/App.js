import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
// Routes
import Homepage from './pages/homePage/homePage.page';
import AboutPage from './pages/about/about.page';
import ContactPage from './pages/contact/contact.page';
import PortfolioPage from './pages/portfolio/portfolio.page';
import SpecificPortfolioPage from './pages/specificPortfolio/specificPortfolio.page';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/portfolio' element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
