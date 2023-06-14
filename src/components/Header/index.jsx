import { Container, Search, Logout} from "./styles";
import { FiSearch, FiLogOut} from 'react-icons/fi';
import { AiOutlineMenu} from 'react-icons/ai';
import MediaQuery from 'react-responsive';
import { CiReceipt} from 'react-icons/ci';
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"


import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Input } from '../Input';

export function Header({ onHeaderChange = null }){
   
  const {user, signOut} = useAuth()
  
  function handleHeaderChange({ target }) {
    if (onHeaderChange) {
      const newValue = target.value;
      onHeaderChange(newValue);
    }
  }

  
  return(
    <Container >


    <header>
    <MediaQuery maxWidth={768}>
        <ButtonText>
            <AiOutlineMenu/>

        </ButtonText>
        </MediaQuery>
    <Link to="/profile">
          <Logo title="food explorer"> </Logo>
          <MediaQuery minWidth={769}>

          <span >{user.is_admin ? "admin" : user.name}</span>
          </MediaQuery>

    </Link>
    <MediaQuery maxWidth={768}>

        <span >{user.is_admin ? "admin" : user.name}</span>
    </MediaQuery>
    </header>

    
    <MediaQuery minWidth={769}>
     
    <Search >
      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={FiSearch}
        onChange={handleHeaderChange}
       
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

     
    </Container>
  )

}