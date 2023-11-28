import { useState, useEffect, Children, cloneElement } from 'react'
import styles from './GeneralInformationCarousel.module.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const GeneralInformationCarousel = ({ children }: any) => {

   const [pages, setPages] = useState([]);
   const [offset, setOffset] = useState(0);

   useEffect(() => {
      setPages(
         Children.map(children, child => {
            return cloneElement(child, {
               style: {
                  height: '100%',
                  minWidth: '100%',
                  maxWidth: '100%',
               }
            })
         })
      )
   }, []);

   useEffect(() => {
      if (pages.length > 0) {
         setTimeout(() => {
            const maxOffset = -(document.documentElement.scrollWidth * (pages.length - 1));
            if (offset > maxOffset) {
               setOffset(currentOffset => currentOffset - document.documentElement.scrollWidth);
            } else {
               setOffset(0)
            }
         }, 6000)
      }
   }, [pages, offset]);

   // function handleLeftArrowClick() {
   //    if (offset < 0) {
   //       setOffset(currentOffset => currentOffset + (window.innerWidth - 32));
   //    }
   // }

   // function handleRightArrowClick() {
   //    const maxOffset = -((window.innerWidth - 32) * (pages.length - 1));
   //    if (offset > maxOffset) {
   //       setOffset(currentOffset => currentOffset - (window.innerWidth - 32));
   //    }
   // }

   return (
      <div className={styles.mainContainer}>
         {/* <FaChevronLeft className={styles.arrow} onClick={handleLeftArrowClick} /> */}
         <div className={styles.window}>
            <div className={styles.allPagesContainer}
               style={{ transform: `translateX(${offset}px)` }}>
               {pages}
            </div>
         </div>
         {/* <FaChevronRight className={styles.arrow} onClick={handleRightArrowClick} /> */}
      </div>
   )
}