import { Logotype } from "./Logotype"
import { SignUpButtonGroup } from "./SignUpButtonGroup"


export const HeaderBrand = ({ onOpen }: any) => {
   return (
      <div className="header__brand brand container">
         <Logotype color={'#000000'} />
         <div className="brand__item quote">
            <h2 className="quote__title">Красота спасет мир.</h2>
            <p className="quote__subtitle">
               <span>Федор Михайлович Достоевский (1821-1881), </span>
               <br/>
               <span>русский писатель, мыслитель, философ и публицист.</span>
            </p>
         </div>
         <SignUpButtonGroup onOpen={onOpen} />
      </div>
   )
}