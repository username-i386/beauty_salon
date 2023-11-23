import { Map, Placemark } from "@pbe/react-yandex-maps"
import { SocialWAandTG } from "../SocialWAandTG"
import { VKButton } from "../VKButton"


export const SearchUs = () => {
   
   return (
      <div className="container">
         <div className="flex flex-row justify-around items-center">
            <div className="w-full p-3 flex flex-col h-full items-center">
               <h2 className="font-bold text-5xl mb-8">Как нас найти?</h2>
               <p>г. Владивосток, ул. Ладыгина, д. 10</p>
               <p className="mb-7">Мы работаем с 80:00 до 20:00, без выходных</p>
               <p>+7 (423) 111-11-11</p>
               <p>+7 (924) 111-11-11</p>
               <div className="flex flex-row mt-6">
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