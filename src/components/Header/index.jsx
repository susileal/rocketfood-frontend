import { Container, Search, Logout} from "./styles";
import { FiSearch, FiLogOut} from 'react-icons/fi';
import MediaQuery from 'react-responsive';
import { CiReceipt} from 'react-icons/ci';
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"


import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import {MenuHamburguer} from "../../components/MenuHamburguer"

import { Input } from '../Input';

export function Header({ onSearchTermChange = null }){
   
  const {user, signOut} = useAuth()
  
  function handleSearchTermChange({ target }) {
    if (onSearchTermChange) {
      const newValue = target.value;
      onSearchTermChange(newValue);
    }
  }

  
  return(
    <Container className="container" >

<main>

    <header>
    <MediaQuery maxWidth={769}>
      <MenuHamburguer onSearchTermChange={onSearchTermChange}/>
    </MediaQuery>
    <Link to="/profile">
          <Logo title="food explorer" isFontHeader isFontSvg> </Logo>
          <MediaQuery minWidth={769}>

          <span >{user.is_admin ? "admin" : user.name}</span>
          </MediaQuery>

    </Link>
    <MediaQuery maxWidth={769}>

        <span >{user.is_admin ? "admin" : user.name}</span>
    </MediaQuery>

    <MediaQuery maxWidth={769}>
    {user.is_admin ? (
       <></>
      ) : (
        <ButtonText>
            <CiReceipt/>

        </ButtonText>
      )}
        </MediaQuery>
    </header>

    
    <MediaQuery minWidth={769}>
     
    <Search >
      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={FiSearch}
        onChange={handleSearchTermChange}
       
      />

    </Search>
    
   
    <section>
    {user.is_admin ? (
      <Link to="/addDish">
        <Button title="Novo prato"
        ></Button>
      </Link>
    ) : (
        <Button title="Pedido" number="(0)"> 
          <CiReceipt/> 
        </Button>
    )}

    </section>

   
    <Logout onClick={signOut}> <FiLogOut/> </Logout> 
    </MediaQuery>
</main>

     
    </Container>
  )

}