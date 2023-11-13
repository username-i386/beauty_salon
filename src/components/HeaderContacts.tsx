

export const HeaderContacts = () => {
   return (
      <div className="header__container">
         <div className="header__contacts contacts container">
            <div className="contacts__item">
               <p className="contacts__addres before-icon">г. Владивосток, ул. Ладыгина, д. 10</p>
               <div className="dvider"></div>
               <p className="contacts__time before-icon">Пн-Вс 8:00-20:00</p>
            </div>
            <div className="contacts__item">
               <p className="contacts__phone before-icon">+7 (423) 111-11-11</p>
               <p className="contacts__phone before-icon">+7 (924) 111-11-11</p>
               <div className="dvider"></div>
               <div className="contacts__social">
                  <div className="whatsapp before-icon"></div>
                  <div className="telegram before-icon"></div>
               </div>
               <div className="dvider"></div>
               <p className="contacts__vk before-icon">aphrodite</p>
            </div>
         </div>
      </div>
   )
}