import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { CarouselSlides } from './components/carousel/CarouselSlides';
import { Services } from './components/services/Services';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CarouselSlides />
        <div className="container">
          <Services />
        </div>
      </main> 
    </div>
  );
}

export default App;
