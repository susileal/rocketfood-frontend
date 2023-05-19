
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
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
        <label> Email </label>
          <Input
            isBorder
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />

        <label> Senha </label>
          <Input
            isBorder
            placeholder="No mínimo 6 caracteres"
            type="password"
          />  


        <Button title="Entrar" />

        <a to="/"> Criar uma conta </a>
        
      </Form>

   
    </Container>
  );
}