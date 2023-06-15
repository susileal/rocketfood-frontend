import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { SectionForm } from "../../components/SectionForm"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Logo } from "../../components/Logo"

import { Container, Form } from "./styles";



export function SignUp() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert(" Preencha todos os campos!");
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
        
      }
    });
  }
  

  return (
    <Container>

      <main>

        <Logo title="food explorer" isFont/>
      

      <Form>
        <h1> Crie sua conta </h1>
        <SectionForm title="Seu nome">

          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </SectionForm>
        
        <SectionForm title="Email">
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
        </SectionForm>

        <SectionForm title="Senha"> 
        
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />  
        </SectionForm> 


        <Button title="Criar conta" onClick={handleSignUp}/>

      <Link to="/">
      
        <ButtonText title="Já tenho uma conta">  </ButtonText>
      </Link>
        
      </Form>
      </main>
     

   
    </Container>
  );
}