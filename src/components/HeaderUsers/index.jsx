import { Container, Search, Logout} from "./styles";
import { FiSearch, FiLogOut} from 'react-icons/fi';
import { CiReceipt} from 'react-icons/ci';
import { Link } from "react-router-dom";

import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from '../Input';




export function HeaderUsers(){
  
  

  return(
    <Container>

    <header>
      <Link to='/profile'>
            <Logo title="food explorer"> </Logo>
            <span> Susana Leal</span>
      </Link>
    </header>

    <Search>
      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={FiSearch}
       
      />

    </Search>
   
    <section>

      
      
        <Button title="Pedido" number="(0)"> 
        <CiReceipt/> 

        </Button>

     


    </section>
   
    <Logout > <FiLogOut/> </Logout> 
     
    </Container>
  )

}