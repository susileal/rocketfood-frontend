import { useState } from 'react';
import { useAuth } from "../../hooks/auth"
import { IoIosArrowBack} from 'react-icons/io';
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { SectionForm } from "../../components/SectionForm"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"


import { Container, Form} from "./styles";


export function Profile() {

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState( );
  const [passwordNew, setPasswordNew] = useState( );

 
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);

  }

  async function handleUpdate(){
    const updated ={
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated});
  }
 


  return (
    <Container>

      <Header/>

      <main>

        <header>
            <Link to="/">
              <ButtonText title="voltar" isFont onClick={handleBack}> <IoIosArrowBack/></ButtonText>
            </Link>
  
          </header>

      <Form>
        <h1> Atualizar conta </h1>
        <SectionForm title="Seu nome">

          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </SectionForm>
        
        <SectionForm title="Email">
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </SectionForm>

        <SectionForm title="Senha atual"> 
        
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPasswordOld(e.target.value)}
          />  
        </SectionForm> 

        <SectionForm title="Nova Senha"> 
        
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPasswordNew(e.target.value)}
          />  
        </SectionForm> 
            
        <Link Link to="/">
            <Button title="Salvar" onClick={handleUpdate}/>
        </Link>
      </Form>

      </main>
      <Footer></Footer>
    </Container>
  )
}