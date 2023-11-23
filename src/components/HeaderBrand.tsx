import { Logotype } from "./Logotype"
import { SignUpButtonGroup } from "./SignUpButtonGroup"


export const HeaderBrand = () => {
   return (
      <div className="header__brand brand container">
         <Logotype />
         <div className="brand__item quote">
            <h2 className="quote__title">Красота спасет мир.</h2>
            <p className="quote__subtitle">
               Федор Михайлович Достоевский (1821-1881), 
               <br/>
               русский писатель, мыслитель, философ и публицист.
            </p>
         </div>
         <SignUpButtonGroup />
      </div>
   )
}