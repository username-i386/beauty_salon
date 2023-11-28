import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea } from "@chakra-ui/react"
import { useEffect, useState } from "react";


export const SignupModal = ({ isOpen, onClose }: any) => {

   const [successMessage, setSuccessMessage] = useState(false);

   const handleSuccesMessage = () => setSuccessMessage(true);

   useEffect(() => {
      setTimeout(() => {
         if (successMessage) {
            onClose();
            setSuccessMessage(false);
         }
      }, 4000)
   }, [successMessage])



   return(
      <div>
         {
            successMessage ?
               <Alert
                  status='success'
                  variant='subtle'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  textAlign='center'
                  maxWidth='500px'
                  height='200px'
                  position={'absolute'}
                  bottom={'50%'}
                  left={'50%'}
                  zIndex={100}
                  transform={'translate(-50%, 50%)'}
               >
                  <AlertIcon boxSize='40px' mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize='lg'>
                     Заявка принята!
                  </AlertTitle>
                  <AlertDescription>
                     Наш сотрудник свяжется с Вами в ближайшее время
                  </AlertDescription>
               </Alert>
               : <Modal closeOnOverlayClick={false} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                     <ModalHeader>Записаться онлайн</ModalHeader>
                     <ModalCloseButton />
                     <ModalBody pb={6}>
                        <FormControl>
                           <FormLabel>Как к Вам обращаться?</FormLabel>
                           <Input placeholder='Введите Ваше имя...' />
                        </FormControl>
                        <FormControl mt={4}>
                           <FormLabel>Номер телефона</FormLabel>
                           <Input placeholder='Введите Ваш номер телефона...' />
                        </FormControl>
                        <FormControl mt={4}>
                           <FormLabel>Какая именно услуга Вас интересует?</FormLabel>
                           <Select placeholder='Выберите услугу:'>
                              <option value=''>Стрижки и укладки</option>
                              <option value=''>Окрашивание волос</option>
                              <option value=''>Уход за волосами</option>
                              <option value=''>Маникюр и педикюр</option>
                              <option value=''>Наращивание и ламинирование ресниц</option>
                              <option value=''>Перманентный макияж</option>
                              <option value=''>Солярий</option>
                              <option value=''>Косметология</option>
                              <option value=''>Депиляция</option>
                              <option value=''>Массаж</option>
                              <option value=''>Обертывания и скрабирование</option>
                              <option value=''>Коррекция и окрашивание бровей</option>
                           </Select>
                        </FormControl>
                        <FormControl mt={4}>
                           <FormLabel>Есть ли у Вас какие-либо пожелания:</FormLabel>
                           <Textarea
                              placeholder='Здесь Вы можете задать вопрос или уточнить что-либо, мы обязательно прочтем Ваше сообщение.'
                              resize={'none'}
                           />
                        </FormControl>
                     </ModalBody>
                     <ModalFooter>
                        <Button colorScheme='blue' mr={3}
                           onClick={handleSuccesMessage}>
                           Отправить
                        </Button>
                        <Button onClick={onClose}>Закрыть</Button>
                     </ModalFooter>
                  </ModalContent>
               </Modal>
         }
      </div>
            
         
   )
}