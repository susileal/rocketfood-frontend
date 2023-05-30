
import { SectionForm } from "../../components/SectionForm"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Logo } from "../../components/Logo"

import { Container, Form } from "./styles";



export function SignIn() {
  
  

  return (
    <Container>
      <section>
        <Logo title="food explorer" isFont/>
      </section>

      <Form>
        <h1> Faça login </h1>
        <SectionForm title="Email">
          <Input
            isBorder
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />
        </SectionForm>

        <SectionForm title="Senha"> 
        
          <Input
            isBorder
            placeholder="No mínimo 6 caracteres"
            type="password"
          />  
        </SectionForm>


        <Button title="Entrar" />

        <ButtonText title="Criar uma conta">  </ButtonText>
        
      </Form>

   
    </Container>
  );
}