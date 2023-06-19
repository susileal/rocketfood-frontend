import { Link } from "react-router-dom";
import { FiX, FiSearch } from "react-icons/fi"
import { slide as Menu } from 'react-burger-menu';

import { Container, Content } from "./styles";

import { useAuth } from "../../hooks/auth"


import { Footer } from "../Footer"
import { Input } from "../Input"
import { ButtonText } from "../ButtonText"



export function MenuHamburguer({ onSearchTermChange = null }) {
  const { user, signOut } = useAuth()

  function handleSearchTermChange({ target }) {
    if (onSearchTermChange) {
      const newValue = target.value;
      onSearchTermChange(newValue);
    }
  }

  return (
    <Container>
      <Menu >
      
      <header>
          <h3> Menu </h3>

      </header>

        <Content>
        

            <Input
              placeholder="Busque por pratos ou ingredientes"
              icon={FiSearch}
              onChange={handleSearchTermChange}

            />

            {user.is_admin ? (
              <Link to="/addDish">

                <ButtonText title="Novo Prato" className="buttonMenu"> </ButtonText>
              </Link>
            ) : (
              <></>
            )}

            <div class="line"></div>

            <ButtonText onClick={signOut}> Sair</ButtonText>

            <div class="line"></div>

          </Content>

        <Footer ></Footer>
        
      </Menu>
    </Container>
  )
}