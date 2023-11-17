import { useState } from "react";
import styled from "styled-components"
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const womanCardAvatar = require('../../../public/woman_services_avatar.png');
const manCardAvatar = require('../../../public/man_services_avatar.png');
const kidCardAvatar = require('../../../public/kid_services_avatar.png');

const ServicesDiv = styled.div`
   padding: 20px;
   background: #e5e5e5;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Title = styled.h2`
   text-transform: uppercase;
   text-align: center;
   font-size: 56px;
   margin: 0 0 30px;
`
const Container = styled.div`
   display: flex;
   justify-content: space-between;
`

const Card = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   padding: 30px;
   background: #fff;
   margin: 0 15px;
   border-radius: 20px;
`

const ImageCard = styled.img`
   border-radius: 50%;
   max-width: 300px;
`

const TitleCard = styled(Title)`
   font-size: 24px;
   margin: 10px 0;
   font-weight: bold;
`

const CardList = styled.div`
   list-style: none;
`

const CardListItem = styled.li`
   font-size: 20px;
   span {
      font-weight: bold;
      text-transform: lowercase  ;
   }
`

const Dvider = styled.div`
   height: 1px;
   width: 100%;
   background: #0000004a;
   margin: 10px 0 25px;
`

export const Services = () => {

   const [show, setShow] = useState(false);

   interface IServicesCardInfo {
      image: { src: string, alt: string }
      title: string
      services: string[]
   }

   const servicesCardInfo: IServicesCardInfo[] = [
      {
         image: { src: womanCardAvatar, alt: 'woman' },
         title: 'для женщин',
         services: [
            '1. Стрижки и укладки: различные виды стрижек, от классических до креативных, а также укладки на любой случай.',
            '2. Окрашивание волос: все виды окрашивания, от однотонного до сложного колорирования.',
            '3. Уход за волосами: разнообразные маски, пилинги и процедуры для восстановления и укрепления волос.',
            '4. Маникюр и педикюр: классический, аппаратный, европейский, японский, спа-маникюр и педикюр.',
            '5. Наращивание и ламинирование ресниц: создание выразительного взгляда с помощью наращивания и ламинирования ресниц.',
            '6. Перманентный макияж: татуаж бровей, губ и глаз, а также микроблейдинг.',
            '7. Солярий: получение ровного и здорового загара.',
            '8. Косметология: чистка лица, массаж лица, маски, пилинги, аппаратные процедуры.',
            '9. Депиляция: удаление нежелательных волос на различных участках тела.',
            '10. Массаж: различные виды массажа, от классического до экзотических.',
            '11. Обертывания и скрабирование: процедуры для коррекции фигуры и улучшения состояния кожи.',
            '12. Коррекция и окрашивание бровей: создание идеальных бровей с учетом формы лица и цвета волос.',
         ]
      },
      {
         image: { src: manCardAvatar, alt: 'man' },
         title: 'для мужчин',
         services: [
            '1. Мужские стрижки и укладки: классические и современные стрижки, а также разнообразные укладки.',
            '2. Уход за бородой и усами: моделирование, стрижка, уход за кожей лица.',
            '3. Окрашивание волос и бороды: камуфляж седины, подбор оттенков.',
            '4. Маникюр и педикюр: классический, европейский, аппаратный маникюр и педикюр.',
            '5. Солярий: для получения ровного и быстрого загара.',
            '6. Косметология для мужчин: чистка лица, пилинг, массаж, маски.',
            '7. Массаж: расслабляющий, тонизирующий, лечебный.',
            '8. Коррекция бровей: удаление лишних волосков, придание формы.',
            '9. Эпиляция: удаление волос на лице и теле.',
            '10. Коррекция фигуры: обертывания, скрабирование, лимфодренажный массаж.',
         ]
      },
      {
         image: { src: kidCardAvatar, alt: 'kid' },
         title: 'для детей',
         services: [
            '1. Детские стрижки и укладки.',
            '2. Детский маникюр и педикюр.   ',
            '3. Окрашивание детских волос.',
         ]
      },
   ];

   function showAllServices() {
      setShow(!show)
   }

   return (
      <ServicesDiv>
         <Title>Услуги салона красоты</Title>
         <Container>
            {
               servicesCardInfo.map((element: IServicesCardInfo, index: number) => {
                  return (
                     <Card key={index}>
                        <ImageCard src={element.image.src} alt={element.image.src} />
                        <TitleCard>{element.title}</TitleCard>
                        <CardList>
                           {
                              element.services.map((element, index) => {
                                 if(show) {
                                    return (
                                       <CardListItem key={index}>
                                          <p>{element}</p>
                                          <Dvider />
                                       </CardListItem>
                                    )
                                 } else if(index < 2) {
                                    return (
                                       <CardListItem key={index}>
                                          <p>{element}</p>
                                          <Dvider />
                                       </CardListItem>
                                    )
                                 }
                              })
                           }
                           
                        </CardList>
                        
                     </Card>
                  )
               })
            }
            
         </Container>
         {
            show ? <SlArrowUp onClick={showAllServices} /> : <SlArrowDown onClick={showAllServices} />
         }
      </ServicesDiv>
   )
}

