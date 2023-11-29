import { Box, Divider, Typography, useMediaQuery } from "@mui/material"
import Stack from "@mui/material/Stack"
import { Logotype } from "./Logotype"
import { SocialWAandTG } from "./SocialWAandTG"
import { VKButton } from "./VKButton"


export const Footer = () => {

   const aboutUsText: string[] = [
      'рожденная Вашими желаниями!',
      'вдохновленная Вами!',
      'которую Вы заслуживаете!',
      'которая остается с Вами!',
      'неподвластная времени!',
   ]

   const windoWidthSmallThan1319px = useMediaQuery('(max-width: 1319px)');
   const windoWidthSmallThan597px = useMediaQuery('(max-width: 597px)');
   const windoWidthSmallThan425px = useMediaQuery('(max-width: 425px)');
   

   return (
      <footer>
         <Box bgcolor={'#2b2b2b'} 
               color={'#ffffff'}
               p={windoWidthSmallThan1319px ? '80px 0' : 10}>
            <Stack direction={windoWidthSmallThan1319px ? "column" : "row" }
               justifyContent="space-around"
               alignItems={windoWidthSmallThan1319px ? "center" : "flex-start"}
               flexWrap='nowrap'>
               <Logotype color={'#ffffff'} />
               <Stack direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  alignSelf={'center'}
                  m={windoWidthSmallThan1319px ? '50px 0' : '0'}>
                  <Stack direction={windoWidthSmallThan597px ? 'column' : 'row'}
                        alignItems={'center'}
                     spacing={windoWidthSmallThan597px ? 0 : 5}>
                     <Typography variant="h6"
                        fontWeight={windoWidthSmallThan597px ? '800' : '400'}
                        mb={windoWidthSmallThan597px ? '10px' : '0a'}>
                        Afrodite - это красота,
                     </Typography>
                     <Stack>
                        {
                           aboutUsText.map((element, index) => {
                              return (
                                 <Typography variant="subtitle1" key={index}>{element}</Typography>
                              )
                           })
                        }
                     </Stack>
                  </Stack>
               </Stack>
               <Stack direction="column"
                     justifyContent="flex-start"
                     alignItems="center"
                     spacing={2}>
                  <Typography variant="h6">
                     Связаться с нами:
                  </Typography>
                  <Stack direction={windoWidthSmallThan425px ? 'column' : 'row'}
                        spacing={2}
                        alignItems={'center'}
                        divider={<Divider orientation="vertical" flexItem light />}>
                     <Stack direction={'column'} >
                        <Typography variant="subtitle1">
                           <a href="tel:+74231111111" className="contacts__phone">+7 (423) 111-11-11</a>
                        </Typography>
                        <Typography variant="subtitle1">
                           <a href="tel:+79241111111" className="contacts__phone">+7 (924) 111-11-11</a>
                        </Typography>
                     </Stack>
                     <Stack direction={'column'}>
                        <SocialWAandTG />
                     </Stack>
                     <VKButton />
                  </Stack>
               </Stack>
            </Stack>
         </Box>
      </footer>
   )
}