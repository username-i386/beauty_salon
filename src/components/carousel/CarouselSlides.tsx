import { SignUpButtonGroup } from "../SignUpButtonGroup"
import { GeneralInformationCarousel } from "./GeneralInformationCarousel"
import styles from './GeneralInformationCarousel.module.css'


export const CarouselSlides = () => {
   

   return (
      <GeneralInformationCarousel>
         <div className={styles.item1} >
            <div className={styles.redTintBackground}>
               <div className={styles.darkBackground}>
                  <div className={styles.itemContent}>
                     <p>
                        СОВРЕМЕННЫЙ
                        САЛОН,
                        ЛУЧШЕЕ
                        ОБОРУДОВАНИЕ
                     </p>
                     <SignUpButtonGroup />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.item2} >
            <div className={styles.redTintBackground}>
               <div className={styles.darkBackground}>
                  <div className={styles.itemContent}>
                     <p>
                        СОЗДАДИМ ПРИЧЕСКУ
                        ЛЮБОЙ СЛОЖНОСТИ
                     </p>
                     <SignUpButtonGroup />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.item3} >
            <div className={styles.redTintBackground}>
               <div className={styles.darkBackground}>
                  <div className={styles.itemContent}>
                     <p>
                        ПРОЦЕДУРЫ
                        ДЛЯ
                        КРАСОТЫ И ЗДОРОВЬЯ
                     </p>
                     <SignUpButtonGroup />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.item4} >
            <div className={styles.redTintBackground}>
               <div className={styles.darkBackground}>
                  <div className={styles.itemContent}>
                     <p>
                        БУДЬ
                        ЛУЧШЕЙ ВЕРСИЕЙ СЕБЯ!
                     </p>
                     <SignUpButtonGroup />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.item5} >
            <div className={styles.redTintBackground}>
               <div className={styles.darkBackground}>
                  <div className={styles.itemContent}>
                     <p>
                        БЫТЬ С НАМИ ЗНАЧИТ ЛЮБИТЬ СЕБЯ
                     </p>
                     <SignUpButtonGroup />
                  </div>
               </div>
            </div>
         </div>
      </GeneralInformationCarousel>
   )
}