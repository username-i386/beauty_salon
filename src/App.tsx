import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { CarouselSlides } from './components/carousel/CarouselSlides';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CarouselSlides />
      </main>
    </div>
  );
}

export default App;
