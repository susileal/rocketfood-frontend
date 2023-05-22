
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
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
        <label> Seu nome </label>
          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
          />

        <label> Email </label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="password"
          />  

        <label> Senha </label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
          />  


        <Button title="Criar conta" />

        <a to="/"> Já tenho uma conta </a>
        
      </Form>

   
    </Container>
  );
}