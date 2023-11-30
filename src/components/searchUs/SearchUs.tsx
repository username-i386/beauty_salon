import { Map, Placemark } from "@pbe/react-yandex-maps"
import { SocialWAandTG } from "../SocialWAandTG"
import { VKButton } from "../VKButton"
import './SearchUs.css'


export const SearchUs = () => {
   
   return (
      <div className="container">
         <div className="search-us">
            <div className="search-us__info">
               <h2 className="info__title">Как нас найти?</h2>
               <p>г. Владивосток, ул. Ладыгина, д. 10</p>
               <p>Мы работаем с 80:00 до 20:00, без выходных</p>
               <a href="tel:+74231111111" className="contacts__phone before-icon">
                  <p>+7 (423) 111-11-11</p>
               </a> 
               <a href="tel:+79241111111" className="contacts__phone before-icon">
                  <p>+7 (924) 111-11-11</p>
               </a>
               <div className="info__btns">
                  <SocialWAandTG /> 
                  <VKButton />
               </div>
            </div>
            <div className="w-full p-3">
               <Map width={'100%'}
                  height={'400px'}
                  defaultState={{
                     center: [43.120016, 131.951326],
                     zoom: 12,
                     controls: ["zoomControl", "fullscreenControl"],
                  }}>
                  <Placemark 
                     defaultGeometry={[43.120016, 131.951326]}
                     properties={{
                        balloonContentBody: "Afrodite - салон красоты",
                     }} />
               </Map>
            </div>
         </div>
      </div>
   )
}