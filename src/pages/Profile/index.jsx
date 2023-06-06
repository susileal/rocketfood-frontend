
import { IoIosArrowBack} from 'react-icons/io';
import { Link } from "react-router-dom";

import { Input } from "../../components/Input"
import { HeaderUsers } from "../../components/HeaderUsers"
import { SectionForm } from "../../components/SectionForm"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"


import { Container, Form} from "./styles";


export function Profile() {
 


  return (
    <Container>

      <HeaderUsers/>

      <main>

        <header>
            <Link to="/">
              <ButtonText title="voltar" isFont> <IoIosArrowBack/></ButtonText>
            </Link>
  
          </header>

      <Form>
        <h1> Atualizar conta </h1>
        <SectionForm title="Seu nome">

          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
          />
        </SectionForm>
        
        <SectionForm title="Email">
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />
        </SectionForm>

        <SectionForm title="Senha atual"> 
        
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
          />  
        </SectionForm> 

        <SectionForm title="Nova Senha"> 
        
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
          />  
        </SectionForm> 
            
        <Link Link to="/">
            <Button title="Salvar" />
        </Link>
      </Form>

      </main>
      <Footer></Footer>
    </Container>
  )
}