import { HeaderBrand } from "./HeaderBrand"
import { HeaderContacts } from "./HeaderContacts"


export const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__container">
               <HeaderContacts />
               <HeaderBrand />
            </div>
         </div>
      </header>
   )
}