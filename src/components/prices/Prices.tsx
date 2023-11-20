import { Box, Button, ButtonGroup, Flex, Card, CardBody,Center, CardFooter, Divider, Grid, GridItem, Heading, Stack, Image, Text } from '@chakra-ui/react'
const haircutsAndStylingImage = require('../../../public/priceComponent/haircuts_and_styling.png')
export const Prices = () => {

   interface IServices {
      image: { url: string, alt: string },
      title: string,
      discription: string,
      ceil: string
   }
   const services: IServices[] = [
      {
         image: { url: haircutsAndStylingImage, alt: 'Стрижки и  укладки' },
         title: 'Стрижки и  укладки',
         discription: 'Различные виды стрижек, от классических до креативных, а также укладки на любой случай.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Окрашивание волос' },
         title: 'Окрашивание волос:',
         discription: 'Все виды окрашивания, от однотонного до сложного колорирования.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Уход за волосами' },
         title: 'Уход за волосами:',
         discription: 'Разнообразные маски, пилинги и процедуры для восстановления и укрепления волос.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Маникюр и педикюр' },
         title: 'Маникюр и педикюр:',
         discription: 'Классический, аппаратный, европейский, японский, спа-маникюр и педикюр.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Наращивание и ламинирование ресниц' },
         title: 'Наращивание и ламинирование ресниц:',
         discription: 'Создание выразительного взгляда с помощью наращивания и ламинирования ресниц.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Перманентный макияж' },
         title: 'Перманентный макияж:',
         discription: 'Татуаж бровей, губ и глаз, а также микроблейдинг.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Солярий' },
         title: 'Солярий: ',
         discription: 'Получение ровного и здорового загара.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Косметология' },
         title: 'Косметология:',
         discription: 'Чистка лица, массаж лица, маски, пилинги, аппаратные процедуры',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Депиляция' },
         title: 'Депиляция: ',
         discription: 'Удаление нежелательных волос на различных участках тела.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Массаж' },
         title: 'Массаж:',
         discription: 'Различные виды массажа, от классического до экзотических.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Обертывания и скрабирование' },
         title: 'Обертывания и скрабирование:',
         discription: 'Процедуры для коррекции фигуры и улучшения состояния кожи.',
         ceil: '800'
      },
      {
         image: { url: haircutsAndStylingImage, alt: 'Коррекция и окрашивание бровей' },
         title: 'Коррекция и окрашивание бровей:',
         discription: 'Создание идеальных бровей с учетом формы лица и цвета волос.',
         ceil: '800'
      },

   ]

   return(
      <Box p={25} bg='blue.500'>
         <Heading as={'h2'} textAlign={'center'} color={'white'}>
            Цены:
         </Heading>
         <Grid gridTemplateColumns={'repeat(3, 1fr)'}>
            {
               services.map((element, index) => {
                  return (
                     <Card maxW='sm' borderRadius={25} m={5} key={index}>
                        <CardBody>
                           <Image
                              src={element.image.url}
                              alt={element.image.alt}
                              borderRadius='lg'
                           />
                           <Stack mt='6' spacing='3' >
                              <Heading size='md'>
                                 {element.title}
                              </Heading>
                              <Text>
                                 {element.discription}
                              </Text>
                              <Text color='blue.600' fontSize='2xl'>
                                 от {element.ceil}₽
                              </Text>
                           </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                           <Button variant='solid' colorScheme='blue' w={'100%'}>
                              Записаться онлайн
                           </Button>
                        </CardFooter>
                     </Card>
                  )
               })
            }
         </Grid>
      </Box>
   )
}