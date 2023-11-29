import { useMediaQuery } from "@chakra-ui/react";
import styled from "styled-components";

const ServicesDiv = styled.div`
   padding: 20px;
   background: #e5e5e5;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Title = styled.h2<{size: boolean}>`
   text-transform: uppercase;
   text-align: center;
   font-size: ${({ size }) => size ? '40px' : '56px'};
   margin: 0 0 30px;
`

const Container = styled.div<{size: boolean}>`
   display: grid;
   grid-template-columns: ${({ size }) => (size ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))' )};
   align-items: stretch;
   gap: 15px;
`

const Card = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   padding: 10px;
   background: #fff;
   border-radius: 20px;
`

const TitleCard = styled(Title)`
   font-size: ${({ size }) => size ? '20px' : '24px;'};
   margin: 10px 0;
   font-weight: bold;
`

const SubtitleCard = styled.p<{size: boolean}>`
   font-size: ${({ size }) => size ? '16px' : '20px;'};
   text-transform: lowercase;
   text-align: center;
`

export const Promotion = () => {

   interface IPromotionCardInfo {
      title: string
      subtitle: string
   }

   const promotionCardInfo: IPromotionCardInfo[] = [
      {
         title: 'Знакомство с мастером',
         subtitle: 'все новые клиенты могут получить 50% скидку на первую процедуру у любого мастера салона красоты.',
      },
      {
         title: 'Счастливые часы',
         subtitle: 'Каждый день c 12:12 до 13:13, салон предлагает скидки на различные услуги.',
      },
      {
         title: 'Приведи подругу и получи скидку',
         subtitle: 'Клиент получает скидку на следующую процедуру, если приведет подругу, которая воспользуется услугами салона.',
      },
      {
         title: 'Скидка на парный маникюр',
         subtitle: 'Предложение для пар, которые хотят сделать маникюр вместе.',
      },
      {
         title: 'День без укладки',
         subtitle: 'Каждую среду, салон предлагает скидку на все виды укладок',
      },
      {
         title: 'Комбинированный уход',
         subtitle: 'Предложение включает в себя несколько услуг по уходу за лицом со скидкой',
      },
      {
         title: 'День сияющей кожи',
         subtitle: 'Каждую пятницу, все клиенты получают скидку на процедуры по уходу за кожей',
      },
      {
         title: 'Семейный день',
         subtitle: 'Каждый понедельник, семейные пакеты услуг со скидками.',
      },
   ]

   const [isSmallerThan556px] = useMediaQuery('(max-width: 556px)');
   
   return (
      <ServicesDiv>
         <div className="container">
            <Title size={isSmallerThan556px}>
               Акции для наших клиентов:
            </Title>
            <Container size={isSmallerThan556px}>
               {
                  promotionCardInfo.map((element: IPromotionCardInfo, index: number) => {
                     return (
                        <Card key={index}>
                           <TitleCard size={isSmallerThan556px}>
                              {element.title}
                           </TitleCard>
                           <SubtitleCard size={isSmallerThan556px}>
                              {element.subtitle}
                           </SubtitleCard>
                        </Card>
                     )
                  })
               }
            </Container>
         </div>
      </ServicesDiv>
   )
}

