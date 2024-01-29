import styles from './MainImage.module.css'
import { SignUpButtonGroup } from './SignUpButtonGroup'

// const MAIN_BACKGROUND = require('../images/woman_under_water.png')

export const MainImage = ({onOpen}: any) => {
   return (
      <div className={styles.mainBackground}>
               <div className={styles.darkBackground}>
                  <div className={styles.itemContent}>
                     <p>
                        БУДЬ
                        ЛУЧШЕЙ ВЕРСИЕЙ СЕБЯ!
                     </p>
                     <SignUpButtonGroup onOpen={onOpen} />
                  </div>
               </div>
      </div>
   )
}