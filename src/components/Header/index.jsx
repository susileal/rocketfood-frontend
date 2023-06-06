import { Container, Search, Logout} from "./styles";
import { FiSearch, FiLogOut} from 'react-icons/fi';
import { Link } from "react-router-dom";



import { Logo } from "../../components/Logo"
import { Button } from "../../components/Button"
import { Input } from '../Input';




export function Header(){
  

  return(
    <Container>

    
    <header>
          <Logo title="food explorer"> </Logo>
          <span >admin</span>

    </header>

    <Search>
      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={FiSearch}
       
      />

    </Search>
   
    <section>

      <Link to="/addDish">
      
        <Button title="Novo prato"></Button>

      </Link>


    </section>
   
    <Logout > <FiLogOut/> </Logout> 
     
    </Container>
  )

}