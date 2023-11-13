import { HeaderBrand } from "./HeaderBrand"
import { HeaderContacts } from "./HeaderContacts"


export const Header = () => {
   return (
      <header className="header">
         <HeaderContacts />
         <HeaderBrand />
      </header>
   )
}