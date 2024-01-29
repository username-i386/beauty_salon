import { Box, 
   Button, 
   Card, 
   CardBody,
   Center, 
   CardFooter, 
   Divider, 
   Grid, 
   Heading, 
   Stack, 
   Image, 
   Text,
   useMediaQuery,
   useDisclosure,  } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { SignupModal } from './SIgnupModal';

const HAIRCUTS_AND_STYLING_IMAGE = require('../images/haircuts_and_styling.png');
const HAIR_COLORING_IMAGE = require('../images/hair_coloring.png');
const HAIR_CARE_IMAGE = require('../images/hair_care.png');
const MANICURE_IMAGE = require('../images/manicure.png');
const EYELASH_EXTENSIONS = require('../images/eyelash_extensions.png'); 
const PERMANENT_MAKEUP_IMAGE = require('../images/permanent_makeup.png'); 
const SOLARIUM_IMAGE = require('../images/solarium.png');
const COSMETOLOGY_IMAGE = require('../images/сosmetology.png');
const DEPILATION_IMAGE = require('../images/depilation.png');
const MASSAGE_IMAGE = require('../images/massage.png');
const SCRABBING_IMAGE = require('../images/scrubbing.png'); 
const EYEBROW_CORRECTION_IMAGE = require('../images/eyebrow_correction.png'); 

export const Prices = () => {

   interface IServices {
      image: { url: string, alt: string },
      title: string,
      discription: string,
      ceil: string
   }
   const services: IServices[] = [
      {
         image: { url: HAIRCUTS_AND_STYLING_IMAGE, alt: 'Стрижки и  укладки' },
         title: 'Стрижки и  укладки:',
         discription: 'Различные виды стрижек, от классических до креативных, а также укладки на любой случай.',
         ceil: '1500'
      },
      {
         image: { url: HAIR_COLORING_IMAGE, alt: 'Окрашивание волос' },
         title: 'Окрашивание волос:',
         discription: 'Все виды окрашивания, от однотонного до сложного колорирования.',
         ceil: '1900'
      },
      {
         image: { url: HAIR_CARE_IMAGE, alt: 'Уход за волосами' },
         title: 'Уход за волосами:',
         discription: 'Разнообразные маски, пилинги и процедуры для восстановления и укрепления волос.',
         ceil: '1500'
      },
      {
         image: { url: MANICURE_IMAGE, alt: 'Маникюр и педикюр' },
         title: 'Маникюр и педикюр:',
         discription: 'Классический, аппаратный, европейский, японский, спа-маникюр и педикюр.',
         ceil: '800'
      },
      {
         image: { url: EYELASH_EXTENSIONS, alt: 'Наращивание и ламинирование ресниц' },
         title: 'Наращивание и ламинирование ресниц:',
         discription: 'Создание выразительного взгляда с помощью наращивания и ламинирования ресниц.',
         ceil: '1800'
      },
      {
         image: { url: PERMANENT_MAKEUP_IMAGE, alt: 'Перманентный макияж' },
         title: 'Перманентный макияж:',
         discription: 'Татуаж бровей, губ и глаз, а также микроблейдинг.',
         ceil: '4500'
      },
      {
         image: { url: SOLARIUM_IMAGE, alt: 'Солярий' },
         title: 'Солярий: ',
         discription: 'Получение ровного и здорового загара.',
         ceil: '1130'
      },
      {
         image: { url: COSMETOLOGY_IMAGE, alt: 'Косметология' },
         title: 'Косметология:',
         discription: 'Чистка лица, массаж лица, маски, пилинги, аппаратные процедуры',
         ceil: '2600'
      },
      {
         image: { url: DEPILATION_IMAGE, alt: 'Депиляция' },
         title: 'Депиляция: ',
         discription: 'Удаление нежелательных волос на различных участках тела.',
         ceil: '2500'
      },
      {
         image: { url: MASSAGE_IMAGE, alt: 'Массаж' },
         title: 'Массаж:',
         discription: 'Различные виды массажа, от классического до экзотических.',
         ceil: '2800'
      },
      {
         image: { url: SCRABBING_IMAGE, alt: 'Обертывания и скрабирование' },
         title: 'Обертывания и скрабирование:',
         discription: 'Процедуры для коррекции фигуры и улучшения состояния кожи.',
         ceil: '4200'
      },
      {
         image: { url: EYEBROW_CORRECTION_IMAGE, alt: 'Коррекция и окрашивание бровей' },
         title: 'Коррекция и окрашивание бровей:',
         discription: 'Создание идеальных бровей с учетом формы лица и цвета волос.',
         ceil: '800'
      },
   ];

   const [gridItemSize, setGridItemSize] = useState(320);
   const [isSmallThan370px] = useMediaQuery('(max-width: 370px)');

   useEffect(() => {
      isSmallThan370px ? setGridItemSize(200) : setGridItemSize(320);
   }, [isSmallThan370px]);

   const { isOpen, onOpen, onClose } = useDisclosure();

   const [service, setService] = useState('');

   function signUpHandler(index: number) {
      switch(index) {
         case 0: setService('haircut');     break;
         case 1: setService('coloring');    break;
         case 2: setService('care');        break;
         case 3: setService('manicure');    break;
         case 4: setService('extensions');  break;
         case 5: setService('makeup');      break;
         case 6: setService('solarium');    break;
         case 7: setService('cosmetology'); break;
         case 8: setService('depilation');  break;
         case 9: setService('massage');     break;
         case 10: setService('wrap');       break;
         case 11: setService('correction'); break;
      }
      onOpen();
   }

   return(
      <Box bg='blue.500' p={'10px'}>
         <Center>
            <Heading as={'h2'}
               textAlign={'center'}
               color='blue.500'
               bg='white'
               p={'10px 15px'}
               borderRadius={15} >
               Услуги салона красоты:
            </Heading>
         </Center>
         <Grid 
            gridTemplateColumns={`repeat(auto-fit, minmax(${gridItemSize}px, 1fr))`} 
            gap={'15px'}
            p={'15px'}>
            {
               services.map((element, index) => {
                  return (
                     <Card borderRadius={25} key={index}>
                        <CardBody >
                           <Box display={'inline-block'} overflow={'hidden'}>
                              <Image
                                 src={element.image.url}
                                 alt={element.image.alt}
                                 borderRadius='lg'
                                 transition={'1s'}
                                 display={'block'}
                                 _hover={{
                                    transform: "scale(1.5)",
                                 }} />
                           </Box>
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
                           <Button variant='solid' colorScheme='blue' w={'100%'} onClick={() => signUpHandler(index)} >
                              Записаться онлайн
                           </Button>
                        </CardFooter>
                     </Card>
                  )
               })
            }
         </Grid>
         <SignupModal isOpen={isOpen} onClose={onClose} service={service} />
      </Box>
   )
}