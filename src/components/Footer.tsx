import { Box, Divider, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import { Logotype } from "./Logotype"
import { SocialWAandTG } from "./SocialWAandTG"
import { VKButton } from "./VKButton"


export const Footer = () => {

   interface ISocialTextAndLink {
      url: string
      text: string
   }
   const socialTextAndLink: ISocialTextAndLink[] = [
      { url: '#', text: '+7 (423) 111-11-11' },
      { url: '#', text: '+7 (924) 111-11-11' },
      { url: '#', text: 'Записаться' },
      { url: '#', text: 'Позваонить' },
   ]
   const aboutUsText: string[] = [
      'рожденная Вашими желаниями!',
      'вдохновленная Вами!',
      'которую Вы заслуживаете!',
      'которая остается с Вами!',
      'неподвластная времени!',
   ]

   return (
      <footer>
         <Box bgcolor={'#2b2b2b'} 
               color={'#ffffff'}
               p={10}>
            <Stack direction="row"
                  justifyContent="space-around"
                  alignItems="flex-start">
               <Logotype />
               <Stack direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  alignSelf={'center'}>
                  <Stack direction={'row'}
                        alignItems={'center'}
                        spacing={5}>
                     <Typography variant="h6">
                        Afrodite - это красота,
                     </Typography>
                     <Box>
                        {
                           aboutUsText.map((element, index) => <Typography variant="subtitle1" key={index}>{element}</Typography>)
                        }
                     </Box>
                  </Stack>
               </Stack>
               <Stack direction="column"
                     justifyContent="flex-start"
                     alignItems="center"
                     spacing={2}>
                  <Typography variant="h6">
                     Связаться с нами:
                  </Typography>
                  <Stack direction={'row'}
                        spacing={2}
                        alignItems={'center'}
                        divider={<Divider orientation="vertical" flexItem light />}>
                     <Stack direction={'column'} >
                        <Typography variant="subtitle1">
                           +7 (423) 111-11-11
                        </Typography>
                        <Typography variant="subtitle1">
                           +7 (924) 111-11-11
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