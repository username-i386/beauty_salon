import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { SignupModal } from "./SIgnupModal";



export const SignUpButtonGroup = ({ onOpen }: any) => {

   
   

   return (
      <div>
         <div className="brand__item signup">
            <button className="signup__online " onClick={onOpen}>Записаться</button>
            <a href="tel:+79241111111" className="signup__call">Позвонить</a>
         </div>
         {/* <SignupModal isOpen={isOpen} onClose={onClose} />   */}
      </div>
   )
}