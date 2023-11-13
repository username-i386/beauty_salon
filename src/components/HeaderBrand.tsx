

export const HeaderBrand = () => {
   return (
      <div className="header__brand brand container">
         <div className="brand__item logotype">
            <div className="logotype__img"></div>
            <div>
               <h1 className="logotype__title">AFRODITE</h1>
               <p className="logotype__subtitle">салон красоты</p>
            </div>
         </div>
         <div className="brand__item quote">
            <h2 className="quote__title">Красота спасет мир.</h2>
            <p className="quote__subtitle">
               Федор Михайлович Достоевский (1821-1881), 
               <br/>
               русский писатель, мыслитель, философ и публицист.
            </p>
         </div>
         <div className="brand__item signup">
            <a href="#" className="signup__online">Записаться</a>
            <a href="#" className="signup__call">Позвонить</a>
         </div>
      </div>
   )
}