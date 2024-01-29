import './App.css';
import { Header } from './components/Header';
import { Prices } from './components/Prices';
import { SearchUs } from './components/SearchUs';
import { Footer } from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { YMaps } from '@pbe/react-yandex-maps';
import { Promotion } from './components/Promotion';
import { SignupModal } from './components/SIgnupModal';
import { useDisclosure } from '@chakra-ui/react';
import { MainImage } from './components/MainImage';

const theme = createTheme({})



function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div  > 
      <Header onOpen={onOpen} /> 
      <main>
        <MainImage onOpen={onOpen} />
        <div >
          <Prices />
          <Promotion /> 
          <YMaps query={{
            ns: "use-load-option",
            load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",}}>
            <SearchUs />
          </YMaps>
        </div>
      </main>
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
      <SignupModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default App;
