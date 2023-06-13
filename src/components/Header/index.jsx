import { Container, Search, Logout} from "./styles";
import { FiSearch, FiLogOut} from 'react-icons/fi';
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"


import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from '../Input';




export function Header(){
  
 
  const {signOut} = useAuth()

  function handleHeaderChange({ target }) {
    if (onHeaderChange) {
      const newValue = target.value;
      onHeaderChange(newValue);
    }
  }

  
  return(
    <Container>

    <header>
    <Link to="/profile">
          <Logo title="food explorer"> </Logo>
          <span >admin</span>

    </Link>
    </header>
    

    <Search>
      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={FiSearch}
        onChange={handleHeaderChange}
       
      />

    </Search>
   
    <section>

      <Link to="/addDish">
      
        <Button title="Novo prato"
      
        
        ></Button>

      </Link>


    </section>
   
    <Logout onClick={signOut}> <FiLogOut/> </Logout> 
     
    </Container>
  )

}