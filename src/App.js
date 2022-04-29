import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
// Routes
import Homepage from './pages/homePage/homePage.page';
import AboutPage from './pages/about/about.page';
import ContactPage from './pages/contact/contact.page';
import PortfolioPage from './pages/portfolio/portfolio.page';
import SpecificPortfolioPage from './pages/specificPortfolio/specificPortfolio.page';

// Redux
import { connect } from 'react-redux';

const App = ({ language }) => {

  /* This Works to Load While Page is Loading. Need to Play Around with it though. */
  //   <Route path='/' element={
  //     <Suspense fallback={<div>Loading....</div>}>
  //     <HomePageComp />
  //   </Suspense>
  // } />
  // const HomePage = React.lazy(() => import('./pages/homePage/homePage.page'));
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/portfolio/:specificPortfolio' element={<SpecificPortfolioPage />} />
        <Route path='/en' element={<Homepage />} />
        <Route path='/en/about' element={<AboutPage />} />
        <Route path='/en/contact' element={<ContactPage />} />
        <Route path='/en/portfolio' element={<PortfolioPage />} />
        <Route path='/en/portfolio/:specificPortfolio' element={<SpecificPortfolioPage />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.language
});

export default connect(mapStateToProps)(App);
