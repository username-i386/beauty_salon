import { HeaderBrand } from "./HeaderBrand"
import { HeaderContacts } from "./HeaderContacts"


export const Header = ({ onOpen }: any) => {
   return (
      <header className="header">
         <HeaderContacts />
         <HeaderBrand onOpen={onOpen} />
      </header>
   )
}