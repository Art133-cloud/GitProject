import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContentInfoBlack from './components/infoBlack';
import Header from './components/header'
import SectionWithBackground from './components/firstSectionWithBackground';
import Category from './components/Category';
import Technology from './components/Technology';
import Advantages from './components/advantages';
import Works from './components/ourWorks';
import Asks from './components/asks';
import Footer from './components/footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContentInfoBlack />
    <Header />
    <SectionWithBackground />
    <Category />
    <Technology />
    <Advantages />
    <Works />
    <Asks/>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
