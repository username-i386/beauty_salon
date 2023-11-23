import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { CarouselSlides } from './components/carousel/CarouselSlides';
import { Services } from './components/services/Services';
import { Prices } from './components/prices/Prices';
import { SearchUs } from './components/searchUs/SearchUs';
import { Footer } from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { YMaps } from '@pbe/react-yandex-maps';

const theme = createTheme({})

function App() {
  return (
    <div>
      <Header />
      <main>
        <CarouselSlides />
        <div >
          {/* <Services /> */}
          <Prices />
          <YMaps query={{
            apikey: "45b1a2c0-34ae-4c78-80da-77dc72b878fb",
            ns: "use-load-option",
            load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
            
          }}>
            <SearchUs />
          </YMaps>
        </div>
      </main>
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
