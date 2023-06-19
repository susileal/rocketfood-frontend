import { useState, useEffect, useRef } from "react";

import { Container, Content} from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"


import { Footer } from "../Footer"
import { Input } from "../Input"
import { ButtonText } from "../ButtonText"
import { Button } from "../Button"


export function Menu() {
  const {signOut} = useAuth()

  return (
    <Container> 

      

     
      <header> 

        <ButtonText title="Menu"></ButtonText>
      </header>

      <main>
      
      <Content>

        <Input></Input>
        <Button></Button>



        <Logout onClick={signOut}> Sair </Logout> 
   
      

      
      
      </Content>

      </main>

     
        <Footer></Footer>
      

     
      
    </Container>
  )
}