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
  /* This Works to Load While Page is Loading. Need to Play Around with it though. */
//   <Route path='/' element={
//     <Suspense fallback={<div>Loading....</div>}>
//     <HomePageComp />
//   </Suspense>
// } />
//   const HomePageComp = React.lazy(() => import('./pages/homePage/homePage.page'));
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
