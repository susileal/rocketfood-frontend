
import { useState } from 'react'
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { SectionForm } from "../../components/SectionForm"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Logo } from "../../components/Logo"

import { Container, Form } from "./styles";




export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email, password});

  }
  

  return (
    <Container>
  

     <main>

    <header>
          <Logo title="food explorer" isFont/>

    </header>
      

      <Form>
        <h1> Faça login </h1>
        <SectionForm title="Email">
          <Input
            isBorder
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
        </SectionForm>

        <SectionForm title="Senha"> 
        
          <Input
            isBorder
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />  
        </SectionForm>


        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">
          <ButtonText title="Criar uma conta">  </ButtonText>
        
        </Link>

        
      </Form>
     
     </main>


   
    </Container>
  );
}