import { GeneralInformationCarousel } from "./GeneralInformationCarousel"
import styles from './GeneralInformationCarousel.module.css'


export const CarouselSlides = () => {
   
   return (
      <GeneralInformationCarousel>
         <div className={styles.item + ' ' + styles.item1}>Item 1</div>
         <div className={styles.item + ' ' + styles.item2}>Item 2</div>
      </GeneralInformationCarousel>
   )
}