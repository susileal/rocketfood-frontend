
import { Input } from "../../components/Input"
import { SectionForm } from "../../components/SectionForm"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Logo } from "../../components/Logo"

import { Container, Form } from "./styles";



export function SignUp() {
  
  

  return (
    <Container>
      <section>
        <Logo title="food explorer" isFont/>
      </section>

      <Form>
        <h1> Crie sua conta </h1>
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

        <SectionForm title="Senha"> 
        
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
          />  
        </SectionForm> 


        <Button title="Criar conta" />

        <ButtonText title="Já tenho uma conta">  </ButtonText>
        
      </Form>

   
    </Container>
  );
}